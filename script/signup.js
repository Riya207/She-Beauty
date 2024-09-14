document.getElementById('sign-up').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Signup form submitted with:', { firstName, lastName, email, password });
    try {
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });

        const data = await response.json();
        console.log('Signup response:', data);

        if (response.ok) {
            alert('Signup successful!');
            window.location.href = './loginOrsignup.html'; // Redirect to login page
        } else {
            alert(data.message || 'Signup failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Signup failed!');
    }
});
