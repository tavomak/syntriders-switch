/**
 * Utility Functions Library
 * Common helper functions used across the application
 * 
 * TODO: Implement utility functions as needed
 */

/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  // TODO: Implement debounce
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Minimum time between executions in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
  // TODO: Implement throttle
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Local storage helper with error handling
 * @param {string} key - Storage key
 * @param {any} value - Value to store (will be JSON stringified)
 */
export const setLocalStorage = (key, value) => {
  // TODO: Implement safe localStorage setter
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('localStorage error:', error);
  }
};

/**
 * Get item from local storage with error handling
 * @param {string} key - Storage key
 * @returns {any} - Parsed value or null
 */
export const getLocalStorage = (key) => {
  // TODO: Implement safe localStorage getter
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('localStorage error:', error);
    return null;
  }
};

/**
 * Format date to human-readable string
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, locale = 'en-US') => {
  // TODO: Implement date formatting
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * API fetch wrapper with error handling
 * @param {string} url - API endpoint URL
 * @param {Object} options - Fetch options
 * @returns {Promise} - Promise resolving to response data
 */
export const apiRequest = async (url, options = {}) => {
  // TODO: Implement fetch wrapper with error handling
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API request error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Check if device prefers reduced motion
 * @returns {boolean} - True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  // TODO: Check for reduced motion preference
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Scroll to element with optional offset
 * @param {Element|string} element - Element or selector to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (element, offset = 0) => {
  // TODO: Implement smooth scroll with offset
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};
