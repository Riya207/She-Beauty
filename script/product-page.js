const addToCartButton = document.querySelector('.add-to-cart');

addToCartButton.addEventListener('click', () => {
    // Add product to cart logic here
    console.log('Product added to cart!');
});

// ############### try #########
function openTab(evt, tabName) {
    var i, tabContent, tabButton;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }
    
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// ############### try #########
