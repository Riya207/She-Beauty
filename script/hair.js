let hairpd = document.getElementById('hairpd');

let hairItemsData = [{
    id: 1,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct1.png"
},
{
    id: 2,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct2.png"
},
{
    id: 3,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct3.png"
},
{
    id: 4,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct4.png"
},
{
    id: 5,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct5.png"
},
{
    id: 6,
    name: "Hair Cream",
    brand: "Plum",
    price: 399.99,
    image: "../image/hproduct6.png"
},
{
    id: 7,
    name: "Hair Shampoo",
    brand: "Plum",
    price: 109.99,
    image: "../image/hproduct7.png"
},
{
    id: 8,
    name: "Hair Oil",
    brand: "Plum",
    price: 879.99,
    image: "../image/hproduct8.png"
},
{
    id: 9,
    name: "lorem oil",
    brand: "Plum",
    price: 6679.99,
    image: "../image/hproduct1.png"
},
];



let generateHair = ()=>{
    return (hairpd.innerHTML= hairItemsData.map((x)=>{
        let {id, name, brand, price, image} = x;
        return `
   <div id=product-id-${id} class="product product1" >
                        <div class="img-holder"><img src=${image} alt=""><p class="offer"></p></div>
                        <div class="product-content">
                            <div class="brand-name"><h3>${brand}</h3></div>
                            <div class="item-detail"><p>${name}</p></div>
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <span class="avg-rating">4.7/5</span>
                                <span class="count">(5)</span>
                            </div>
                            <div class="price"><p>NPR. ${price}</p></div>
                            <div class="btn-container">
                                <i class="fa-regular fa-heart fa-3x"></i>
                                <div class="add-to-cart">Add to Cart</div>
                            </div>
                        </div>
                       
                    </div>
    `
    }).join(""));
};

generateHair();