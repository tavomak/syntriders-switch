/**
 * Main JavaScript Entry Point
 * Synth Riders Switch - Marketing Landing Page
 */

import { initNavigation } from './modules/navigation.js';
import { SOCIAL_LINKS, LEGAL_LINKS } from './constants.js';

/**
 * Populate all links with URLs from constants
 */
const populateLinks = () => {
  // Populate social media links
  document.querySelectorAll('[data-social-link]').forEach((link) => {
    const linkType = link.getAttribute('data-social-link');
    if (SOCIAL_LINKS[linkType]) {
      link.href = SOCIAL_LINKS[linkType];
    }
  });

  // Populate legal/footer links
  document.querySelectorAll('[data-legal-link]').forEach((link) => {
    const linkType = link.getAttribute('data-legal-link');
    if (LEGAL_LINKS[linkType]) {
      link.href = LEGAL_LINKS[linkType];
    }
  });

  console.log('🔗 Links populated from constants');
};

/**
 * Initialize all modules when DOM is ready
 */
const init = () => {
  console.log('🚀 Initializing Synth Riders Switch Landing Page');

  // Populate all links from constants
  populateLinks();

  // Initialize navigation (mobile menu, smooth scrolling)
  initNavigation();

  // TODO: Initialize form validation when contact page is ready
  // import('./modules/form.js').then(({ initForm }) => initForm());

  // TODO: Initialize analytics when GA4 tracking ID is provided
  // import('./modules/analytics.js').then(({ initAnalytics }) => initAnalytics());

  console.log('✅ All modules initialized successfully');
};

/**
 * Check if DOM is already loaded, otherwise wait for it
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
