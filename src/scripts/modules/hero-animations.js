/**
 * Hero Animations Module
 * Handles entrance animations for the hero section with accessibility support
 */

export const initHeroAnimations = () => {
  console.log('🎬 Initializing hero animations');

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    console.log('⚡ Reduced motion detected - skipping animations');
    // Show all elements immediately for users who prefer reduced motion
    const animatedElements = document.querySelectorAll('[class*="motion-safe:animate-"]');
    animatedElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    });
    return;
  }

  // Trigger animations on page load with staggered timing
  const triggerHeroAnimations = () => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    // Add animation trigger class to start animations
    hero.classList.add('animate-loaded');

    // Manually trigger animations by replacing motion-safe classes with active ones
    const animatedElements = [
      { selector: '.motion-safe\\:animate-fade-in', class: 'animate-fade-in', delay: 0 },
      { 
        selector: '.motion-safe\\:animate-fade-in-up.motion-safe\\:animation-delay-300', 
        class: 'animate-fade-in-up animation-delay-300', 
        delay: 0 
      },
      { 
        selector: '.motion-safe\\:animate-fade-in-up.motion-safe\\:animation-delay-500', 
        class: 'animate-fade-in-up animation-delay-500', 
        delay: 0 
      },
      { 
        selector: '.motion-safe\\:animate-fade-in-up.motion-safe\\:animation-delay-600', 
        class: 'animate-fade-in-up animation-delay-600', 
        delay: 0 
      },
      { 
        selector: '.motion-safe\\:animate-fade-in-up.motion-safe\\:animation-delay-700', 
        class: 'animate-fade-in-up animation-delay-700', 
        delay: 0 
      },
      { 
        selector: '.motion-safe\\:animate-fade-in-up.motion-safe\\:animation-delay-800', 
        class: 'animate-fade-in-up animation-delay-800', 
        delay: 0 
      }
    ];

    animatedElements.forEach(({ selector, class: animationClass, delay }) => {
      setTimeout(() => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          // Remove motion-safe classes and add active animation classes
          element.className = element.className
            .replace(/motion-safe:[\w-]+/g, '')
            .trim();
          element.classList.add(...animationClass.split(' '));
        });
      }, delay);
    });
  };

  // Trigger animations when hero section is in view (for better performance)
  const observeHero = () => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hero.classList.contains('animate-loaded')) {
            triggerHeroAnimations();
            observer.unobserve(hero); // Stop observing once animations are triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of hero is visible
    );

    observer.observe(hero);
  };

  // Initialize animations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeHero);
  } else {
    observeHero();
  }
};

/**
 * Add keyboard interaction support for hero buttons
 */
export const initHeroInteractions = () => {
  console.log('⌨️ Initializing hero keyboard interactions');

  const handleKeyDown = (event) => {
    // Handle Enter and Space keys for buttons
    if (event.key === 'Enter' || event.key === ' ') {
      const target = event.target;
      
      // If it's a link/button, trigger click
      if (target.tagName === 'A' || target.getAttribute('role') === 'button') {
        event.preventDefault();
        target.click();
      }
    }
  };

  // Add keyboard listeners to hero buttons
  const heroButtons = document.querySelectorAll('#hero [data-social-link]');
  heroButtons.forEach(button => {
    button.addEventListener('keydown', handleKeyDown);
    
    // Add focus/blur effects
    button.addEventListener('focus', () => {
      button.classList.add('ring-2', 'ring-synth-pink', 'ring-offset-2');
    });
    
    button.addEventListener('blur', () => {
      button.classList.remove('ring-2', 'ring-synth-pink', 'ring-offset-2');
    });
  });
};

// Initialize both animation and interaction features
export const initHero = () => {
  initHeroAnimations();
  initHeroInteractions();
};