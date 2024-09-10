// function populateCartItems(cartItems) {
//     const cartItemsContainer = document.querySelector('.cart-items');
//     cartItems.forEach(item => {
//       const cartItem = document.createElement('div');
//       cartItem.classList.add('cart-item');
  
//       // Create and populate elements for each item based on your data structure
  
//       // Example:
//       const itemName = document.createElement('p'); 
//       itemName.classList.add('item-name');
//       itemName.textContent = item.name;
//       cartItem.appendChild(itemName);
  
//       // ... repeat for other elements
  
//       cartItemsContainer.appendChild(cartItem);
//     });
//   }


document.addEventListener('DOMContentLoaded', () => {
  // Select all the delete icons (the x-mark icons)
  const deleteIcons = document.querySelectorAll('.fa-circle-xmark');

  // Loop through each delete icon and add a click event listener
  deleteIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          // Find the parent element with the class 'cart-items' and remove it
          const cartItem = this.closest('.cart-items');
          if (cartItem) {
              cartItem.remove(); // Remove the entire cart-items div
          }
      });
  });
});
