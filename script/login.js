document.getElementById('signin').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log('Login form submitted with:', { email, password });
    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

  console.log('Fetch response:', response);

        const data = await response.json();
        console.log('Parsed response data:', data);

        if (response.ok) {
            alert('Login successful!');
            // Store the token in local storage or cookies
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);

            
            if (data.role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else {
                window.location.href = '../She-Beauty/userpage.html';
            }
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed due to a network or server error!');
    }
});

