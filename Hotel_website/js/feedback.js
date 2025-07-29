const scriptURL = 'https://script.google.com/macros/s/your-script-id/exec'; // Replace with your script URL
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
