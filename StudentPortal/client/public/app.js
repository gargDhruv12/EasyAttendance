document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000') // Fetch from backend
      .then(response => response.text()) // Convert response to text
      .then(data => {
          document.getElementById('message').textContent = data; // Display on page
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          document.getElementById('message').textContent = 'Error loading message.';
      });
});
