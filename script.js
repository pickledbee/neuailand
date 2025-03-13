// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Form submission handler for static site
function handleFormSubmit(event) {
  event.preventDefault();
  const formStatus = document.getElementById('form-status');
  formStatus.innerHTML = "Submitting...";
  
  // Get form data
  const form = event.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  
  // For GitHub Pages static site, we'll use Formspree or a similar service
  // This is a simplified example showing what happens when the form is submitted
  
  // In a real implementation, you would send the data to a service like:
  // fetch('https://formspree.io/f/yourformid', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({name, email})
  // })
  
  // For demo purposes, we'll simulate a successful submission
  setTimeout(() => {
    formStatus.innerHTML = '<div class="success-message">Thank you for subscribing! Check your email for confirmation.</div>';
    form.reset();
    
    // You could redirect to a thank you page with:
    // window.location.href = 'thank-you.html';
  }, 1500);
  
  // For demonstration, we'll log the data to console
  console.log(`Form submitted with name: ${name} and email: ${email}`);
}