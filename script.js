function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

function handleFormSubmission(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email').value;
  if (!validateEmail(emailInput)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Call Google Apps Script Web App URL to submit the email
  const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
  fetch(scriptURL, { method: 'POST', body: new FormData(event.target) })
      .then(response => response.json())
      .then(data => {
          alert('Thank you for subscribing!');
          event.target.reset();
      })
      .catch(error => console.error('Error!', error.message));
}