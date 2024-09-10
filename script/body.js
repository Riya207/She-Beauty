document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        {
          id: 1,
          name: "Vaseline",
          brand: "Plum",
          price: 299.99,
          image: "../image/bproduct1.png"
        },
        {
          id: 2,
          name: "Shampoo",
          brand: "Dove",
          price: 999.99,
          image: "../image/bproduct2.png"
        },
        {
          id: 3,
          name: "Lotion",
          brand: "Nivea",
          price: 999.99,
          image: "../image/bproduct3.png"
        },
        {
          id: 4,
          name: "Lotion",
          brand: "Dove",
          price: 999.99,
          image: "../image/bproduct4.png"
        },
        {
          id: 5,
          name: "Scent",
          brand: "Renee",
          price: 1099.99,
          image: "../image/bproduct4.png"
        }
    ];

    // Use querySelector or access the first element from the collection
    const productsContainer = document.querySelector('.products-container');
    const bodyProductTemplate = document.getElementById('bodyProductTemplate');

    if (productsContainer && bodyProductTemplate) {
        products.forEach(product => {
          const clone = bodyProductTemplate.content.cloneNode(true);

          // Set product data in the template
          clone.querySelector('.brand-name h3').textContent = product.brand;
          clone.querySelector('.item-detail p').textContent = product.name;
          clone.querySelector('.price').textContent = `NPR ${product.price}`;
          clone.querySelector('.img-holder img').src = product.image;
          clone.querySelector('.img-holder img').alt = product.name;

          // Append the populated product card to the container
          productsContainer.appendChild(clone);
        });
    } else {
        console.error('Product container or template not found!');
    }
});
