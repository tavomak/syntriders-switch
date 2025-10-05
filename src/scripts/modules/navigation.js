/**
 * Navigation Module
 * Handles mobile menu toggle, keyboard navigation, and accessibility
 */

export const initNavigation = () => {
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const header = document.querySelector('[data-header]');

  if (!mobileMenuToggle || !mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  /**
   * Toggle mobile menu open/closed
   */
  const toggleMobileMenu = () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  };

  /**
   * Close mobile menu
   */
  const closeMobileMenu = () => {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  };

  /**
   * Handle click on toggle button
   */
  mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  /**
   * Close menu when clicking outside
   */
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /**
   * Close menu on ESC key
   */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      mobileMenuToggle.focus();
    }
  });

  /**
   * Close menu when clicking on a menu link
   */
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  /**
   * Handle smooth scrolling for anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update URL without scrolling
        history.pushState(null, '', href);
      }
    });
  });

  console.log('✅ Navigation module initialized');
};
