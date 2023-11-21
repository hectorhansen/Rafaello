import { animateValue } from './animatedkpi.js';

window.addEventListener("DOMContentLoaded", function () {
  animateValue(0, 2000);
});

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_7phwhso';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Sent!';
      }, (err) => {
        btn.value = 'Error, try again!';
        alert(JSON.stringify(err));
      });
  });
