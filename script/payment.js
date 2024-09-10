// Get all clickable image options
const paymentOptions = document.querySelectorAll('img.option');

// Get the submit button
const submitBtn = document.getElementById('submit-btn');

// Get the success message element
const successMessage = document.getElementById('success-message');

// Variable to store the selected option
let selectedOption = null;

// Get the container element to apply the blur effect
const container = document.querySelector('.container');

// Loop through the image options and add a click event listener
paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove 'selected' class from all options
        paymentOptions.forEach(opt => opt.classList.remove('selected'));

        // Add 'selected' class to the clicked image
        option.classList.add('selected');

        // Store the selected option value
        selectedOption = option.getAttribute('data-value');

        // Enable the submit button
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled');
    });
});

// Add click event listener to the submit button
submitBtn.addEventListener('click', () => {
    if (selectedOption) {
        // Show the success message
        successMessage.style.display = 'block';

        // Apply blur to the background
        container.classList.add('blur-background');

        // Optionally log the selected option to the console
        console.log('Selected Option:', selectedOption);

        // Hide the success message and remove blur after 2 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            container.classList.remove('blur-background');
        }, 3000);  // 2 seconds
    }
});
