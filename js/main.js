import { initThemeToggle } from './theme.js';
import { initProjectFilters } from './projects.js';
import { initContactForm } from './form.js';
import { initAnimations } from './animations.js';
import { initMobileMenu } from './mobileMenu.js';
import { initLanguage } from './i18n.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle functionality
  initThemeToggle();
  
  // Initialize project filtering
  initProjectFilters();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize animations
  initAnimations();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize language switcher
  initLanguage();
  
  // Handle header scroll effect
  initHeaderScroll();
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('header');
  const scrollThreshold = 100;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}