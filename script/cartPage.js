function populateCartItems(cartItems) {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItems.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      // Create and populate elements for each item based on your data structure
  
      // Example:
      const itemName = document.createElement('p');
      itemName.classList.add('item-name');
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);
  
      // ... repeat for other elements
  
      cartItemsContainer.appendChild(cartItem);
    });
  }