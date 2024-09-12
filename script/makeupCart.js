// const makeupShop = document.getElementById('makeupShop')

// let generateShop = ()=>{
//     makeupShop.innerHTML = shopItemsData.map((x)=>{
//         let {id, name, brand, price, image} = x
//         return `
//         <div class="product product1" id=product-id-${id}>
//                         <div class="img-holder"><img src='${image}' alt=""><p class="offer"></p></div>
//                         <div class="product-content">
//                             <div class="brand-name"><h3>${brand}</h3></div>
//                             <div class="item-detail"><p>${name}</p></div>
//                             <div class="rating">
//                                 <i class="fa-solid fa-star"></i>
//                                 <span class="avg-rating">4.5/5</span>
//                                 <span class="count">(6)</span>
//                             </div>
//                             <div class="price"><p>NPR. ${price}</p></div>
//                             <div class="btn-container">
//                                 <i class="fa-regular fa-heart fa-3x"></i>
//                                 <div class="add-to-cart" onclick="add_to_cart('${id}','${name}','${brand}','${price}','${image}')">Add to Cart</div>
//                             </div>
//                         </div>
                       
//                     </div>
//         `
//     })
//     let add_to_cart =(id,name,brand,price,image) => {
//         console.log(id)
//     }
// }

// generateShop();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






// document.addEventListener("DOMContentLoaded", function() {


// })

const product = [
    {
        "id": 1,
        "name": "Eye shadow",
        "brand": "L.A girl",
        "price": 499.99,
        "image": "../image/meye1.png"
    },
    {
        "id": 2,
        "name": "Eye shadow",
        "brand": "Lakme",
        "price": 699.99,
        "image": "../image/meye2.png"
    },
    {
        "id": 3,
        "name": "Concealer",
        "brand": "Mamaearth",
        "price": 679.99,
        "image": "../image/meye3.png"
    },
    {
        "id": 4,
        "name": "Himalaya facewash",
        "brand": "Himalaya",
        "price": 299.99,
        "image": "../image/mproduct1.png"
    },
    {
        "id": 5,
        "name": "Makeup Removing Balm",
        "brand": "Renee",
        "price": 1279.99,
        "image": "../image/mproduct2.png"
    },
    {
        "id": 6,
        "name": "Lip Balm",
        "brand": "Himalaya",
        "price": 679.99,
        "image": "../image/mproduct3.png"
    },
    {
        "id": 7,
        "name": "Refreshing and Glorifying Toner",
        "brand": "Himalaya",
        "price": 679.99,
        "image": "../image/mproduct5.png"
    },
    {
        "id": 8,
        "name": "Kajal",
        "brand": "Himalaya",
        "price": 679.99,
        "image": "../image/mproduct6.png"
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;

    document.getElementById('makeupShop').innerHTML = categories.map((item)=>
    {
        var {id, name, brand, price, image} = item;
        return(
            `<div class="product product1">
                        <div class="img-holder"><img src=${image} alt=""><p class="offer"></p></div>
                        <div class="product-content">
                            <div class="brand-name"><h3>${brand}</h3></div>
                            <div class="item-detail"><p>${name}</p></div>
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <span class="avg-rating">4.5/5</span>
                                <span class="count">(6)</span>
                            </div>
                            <div class="price"><p>NPR. ${price}</p></div>
                            <div class="btn-container">
                                <i class="fa-regular fa-heart fa-3x"></i>`+
                                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+`
                            </div>
                        </div>
                       
                    </div>`
        )
    }).join('')

    var cart = [];

    function displaycart(a){
        let j = 0;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = 
            // "Your Cart is empty"
           
              `<div class="empty-box">
                        <img src="./image/emptycart.png" alt="">
                        <p>No items in cart</p>
                    </div>
                    <button>Go to shop</button>`
         

        }

        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {id, name, brand, price, image} = items;
                return(`<input type="checkbox" id="item1" name="item1" value="" class="largeCheckbox">
                    <label for="item1"></label>
                    <img class="img" src=${image} alt="product picture">
                    <div class="details">
                        <div class="item-details">
                            <p class="item-name">${name}</p>
                            <div class="quantity">
                              <span class="-"> -</span>
                              <span> 1</span>
                              <span class="plus"> +</span>
                            </div>
                        </div>
                        +"<i class="fa-solid fa-circle-xmark fa-2x onclick='delElement("+ (j++) +")'></i>"+
                        <p class="item-price">NPR. ${price}</p>
                    </div>`)
            }).join('');
        }
    }








// -----------------------------------------------------------------------------------------------------------------------------

// const product = [
//     {
//         "id": 1,
//         "name": "Eye shadow",
//         "brand": "L.A girl",
//         "price": 499.99,
//         "image": "../image/meye1.png"
//     },
//     {
//         "id": 2,
//         "name": "Eye shadow",
//         "brand": "Lakme",
//         "price": 699.99,
//         "image": "../image/meye2.png"
//     },
//     {
//         "id": 3,
//         "name": "Concealer",
//         "brand": "Mamaearth",
//         "price": 679.99,
//         "image": "../image/meye3.png"
//     },
//     {
//         "id": 4,
//         "name": "Himalaya facewash",
//         "brand": "Himalaya",
//         "price": 299.99,
//         "image": "../image/mproduct1.png"
//     },
//     {
//         "id": 5,
//         "name": "Makeup Removing Balm",
//         "brand": "Renee",
//         "price": 1279.99,
//         "image": "../image/mproduct2.png"
//     },
//     {
//         "id": 6,
//         "name": "Lip Balm",
//         "brand": "Himalaya",
//         "price": 679.99,
//         "image": "../image/mproduct3.png"
//     },
//     {
//         "id": 7,
//         "name": "Refreshing and Glorifying Toner",
//         "brand": "Himalaya",
//         "price": 679.99,
//         "image": "../image/mproduct5.png"
//     },
//     {
//         "id": 8,
//         "name": "Kajal",
//         "brand": "Himalaya",
//         "price": 679.99,
//         "image": "../image/mproduct6.png"
//     },
// ];

// const categories = [...new Set(product.map(item => item))];
// let i = 0;

// document.getElementById('makeupShop').innerHTML = categories.map(item => {
//     var { id, name, brand, price, image } = item;
//     return `
//         <div class="product product1">
//             <div class="img-holder"><img src=${image} alt=""><p class="offer"></p></div>
//             <div class="product-content">
//                 <div class="brand-name"><h3>${brand}</h3></div>
//                 <div class="item-detail"><p>${name}</p></div>
//                 <div class="rating">
//                     <i class="fa-solid fa-star"></i>
//                     <span class="avg-rating">4.5/5</span>
//                     <span class="count">(6)</span>
//                 </div>
//                 <div class="price"><p>NPR. ${price}</p></div>
//                 <div class="btn-container">
//                     <i class="fa-regular fa-heart fa-3x"></i>
//                     <button onclick='addToCart(${JSON.stringify(item)})'>Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     `;
// }).join('');

// function addToCart(item) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(item);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${item.name} has been added to the cart!`);
// }



// document.addEventListener('DOMContentLoaded', function () {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     if (cart.length === 0) {
//         document.getElementById('cartItem').innerHTML = `
//             <div class="empty-box">
//                 <img src="./image/emptycart.png" alt="">
//                 <p>No items in cart</p>
//             </div>
//             <button onclick="window.location.href='makeup2.html'">Go to shop</button>
//         `;
//     } else {
//         document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
//             var { name, brand, price, image } = item;
//             return `
//                 <div class="cart-item">
//                     <input type="checkbox" id="item${index}" class="largeCheckbox">
//                     <label for="item${index}"></label>
//                     <img class="img" src=${image} alt="product picture">
//                     <div class="details">
//                         <div class="item-details">
//                             <p class="item-name">${name}</p>
//                             <div class="quantity">
//                                 <span class="minus" onclick="updateQuantity(${index}, -1)"> -</span>
//                                 <span id="quantity${index}">1</span>
//                                 <span class="plus" onclick="updateQuantity(${index}, 1)"> +</span>
//                             </div>
//                         </div>
//                         <i class="fa-solid fa-circle-xmark fa-2x" onclick="removeFromCart(${index})"></i>
//                         <p class="item-price">NPR. ${price}</p>
//                     </div>
//                 </div>
//             `;
//         }).join('');

//         updateOrderSummary();
//     }
// });

// function updateQuantity(index, change) {
//     let quantityElement = document.getElementById(`quantity${index}`);
//     let quantity = parseInt(quantityElement.textContent) + change;
//     if (quantity > 0) {
//         quantityElement.textContent = quantity;
//     }
// }

// function removeFromCart(index) {
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     location.reload();  // Refresh the page after removal
// }

// function updateOrderSummary() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let totalPrice = cart.reduce((total, item) => total + item.price, 0);
//     document.querySelector('.order-summary-item span').textContent = `NPR. ${totalPrice.toFixed(2)}`;
//     document.querySelector('.order-summary-total span').textContent = `NPR. ${totalPrice.toFixed(2)}`;
// }
