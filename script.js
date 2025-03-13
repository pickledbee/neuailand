// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('subscription-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});

// Form submission handler for Google Apps Script Web App
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formStatus = document.getElementById('form-status');
  formStatus.innerHTML = "Submitting...";
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // Replace with your Google Apps Script Web App URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxmC07Sy7vmu3NktEpL-p3RxA8p_ah9wIyn0Brgil4PPgc4tvcILD3mEC4GRcGIRtkr/exec';
  
  // Send data to Google Apps Script
  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      formStatus.innerHTML = '<div style="background-color: #d4edda; color: #155724; border-radius: 5px; padding: 10px;">Thank you for subscribing! Check your email for confirmation.</div>';
      document.getElementById('subscription-form').reset();
    } else {
      formStatus.innerHTML = `<div style="background-color: #f8d7da; color: #721c24; border-radius: 5px; padding: 10px;">${data.message}</div>`;
    }
  })
  .catch(error => {
    formStatus.innerHTML = '<div style="background-color: #f8d7da; color: #721c24; border-radius: 5px; padding: 10px;">There was an error submitting your form. Please try again later.</div>';
    console.error('Error submitting form:', error);
  });
}
