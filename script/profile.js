document.addEventListener('DOMContentLoaded', () => {
    const userId = 'user_id_from_token'; // You can extract this from the token
    const token = localStorage.getItem('token');
  
    fetch(`/api/user/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      // Fill the form with user details
      document.getElementById('first-name').value = data.firstName;
      document.getElementById('last-name').value = data.lastName;
      document.getElementById('email').value = data.email;
      document.getElementById('phone').value = data.phone || '';
    })
    .catch(error => console.error('Error fetching user data:', error));
  });
  
   // Update user details when the "Edit Profile" button is clicked
   document.querySelector('.edit-profile-button').addEventListener('click', (e) => {
    e.preventDefault();
    
    const updatedData = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
    };

    fetch(`/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'User updated successfully') {
        alert('Profile updated successfully');
      } else {
        alert('Error updating profile');
      }
    })
    .catch(error => console.error('Error updating user:', error));
  });
