import { createBanner } from './banner.js';
import { createCta } from './cta.js';
import { createFooter } from './footer.js';
import { createHeader } from './header.js';
import { initializeKPI } from './kpi.js';
import { createOurjobs } from './ourjobs.js';


window.addEventListener("DOMContentLoaded", function () {
  animateValue(0, 2000);
  createBanner();
  createCta();
  createFooter();
  createHeader();
  initializeKPI();
  createOurjobs();
});

function animateValue(start, duration) {
  let startTimestamp = null;
  let kpiValue = document.querySelectorAll('span.kpi-value');

  function animate(element) {
    let end = parseInt(element.innerHTML);
    let steps = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        window.requestAnimationFrame(steps);
      }
    };

    window.requestAnimationFrame(steps);
  }

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is now in the viewport
          animate(entry.target);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  kpiValue.forEach((element) => {
    observer.observe(element);
  });
}
