document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  
  // Validate email format
  if (!validateEmail(email)) {
    alert('Invalid email address');
    return;
  }

  // Call your verification function here
  verifyEmail(email);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function verifyEmail(email) {
  // Example API URL - Replace with actual API
  const apiUrl = `https://api.example.com/verify?email=${encodeURIComponent(email)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.valid) {
        alert('Email verified! You will receive our updates.');
        // Optionally, store the email address or handle further actions
      } else {
        alert('Email verification failed.');
      }
    })
    .catch(error => {
      console.error('Error verifying email:', error);
    });
}
