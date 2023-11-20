import { animateValue } from './animatedkpi.js';
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
  initializeKPI();
  createOurjobs();
  createCta();
  createFooter();
  createHeader();

});
