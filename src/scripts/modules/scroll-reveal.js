/**
 * Scroll Reveal Animations Module
 * Uses Intersection Observer for performance and accessibility
 */

export const initScrollReveal = () => {
  console.log('🎬 Initializing scroll reveal animations');

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    console.log('⚡ Reduced motion detected - showing all elements immediately');
    // Show all elements immediately for users who prefer reduced motion
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-logo');
    scrollElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.classList.add('revealed');
    });
    return;
  }

  // Create intersection observer for scroll reveal
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Add small delay before starting animation
        setTimeout(() => {
          element.classList.add('revealed');
        }, 200); // 200ms delay
        
        // Stop observing this element once revealed
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all scroll reveal elements
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(element => {
    observer.observe(element);
  });

  // Special handling for artist logos with staggered animation
  initArtistLogosReveal();
};

/**
 * Initialize artist logos with staggered reveal animation
 */
const initArtistLogosReveal = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return; // Already handled in main function
  }

  const logoElements = document.querySelectorAll('.scroll-reveal-logo');
  
  if (logoElements.length === 0) return;

  const logoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const logoContainer = entry.target;
        
        // Find all logo images within this container
        const logos = logoContainer.querySelectorAll('.scroll-reveal-logo');
        
        // Add initial delay, then reveal logos one by one with staggered delays
        setTimeout(() => {
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add('revealed');
            }, index * 150); // 150ms delay between each logo
          });
        }, 300); // 300ms initial delay before starting the sequence

        // Stop observing once animation starts
        logoObserver.unobserve(logoContainer);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Find the artist logos container and observe it
  const artistSection = document.querySelector('[data-artist-logos]');
  if (artistSection) {
    logoObserver.observe(artistSection);
  }
};

