const scriptURL = 'https://script.google.com/macros/s/AKfycbx-Rr45Ti9rs3Nt4pNnmpfV1EG2kUV4WIncQIgAE83odJqfMGFc_ntI1nT6stW6NFA0-g/exec'; // Replace with your script URL
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert("Thanks for your feedback! 😊");
    form.reset();
  })
  .catch(error => {
    alert("Something went wrong. Please try again.");
    console.error('Error!', error.message);
  });
});
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
