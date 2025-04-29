/**
 * Initialize scroll-based animations
 */
export function initAnimations() {
  // Animate elements when they come into view
  const animateElements = document.querySelectorAll('.project-card, .skill-item, .stat, .about-content, .contact-content');
  
  // Set up intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add animation class when element is in viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // trigger slightly before element comes into view
  });
  
  // Observe each animate element
  animateElements.forEach(element => {
    // Add initial invisible class
    element.classList.add('animate');
    observer.observe(element);
  });
  
  // Add CSS for animations
  addAnimationStyles();
}

/**
 * Add animation styles to the document
 */
function addAnimationStyles() {
  // Create style element
  const styleEl = document.createElement('style');
  
  // Add animation styles
  styleEl.textContent = `
    /* Base animation class */
    .animate {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    /* Fade in animation */
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Staggered animation for grid items */
    .projects-grid .project-card,
    .skills-grid .skill-item {
      transition-delay: calc(var(--animation-order, 0) * 0.1s);
    }
  `;
  
  // Add style to head
  document.head.appendChild(styleEl);
  
  // Set animation order for staggered animations
  setStaggeredAnimationOrder();
}

/**
 * Set animation order for staggered grid animations
 */
function setStaggeredAnimationOrder() {
  // Project cards
  const projectCards = document.querySelectorAll('.projects-grid .project-card');
  projectCards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index);
  });
  
  // Skill items
  const skillItems = document.querySelectorAll('.skills-grid .skill-item');
  skillItems.forEach((item, index) => {
    item.style.setProperty('--animation-order', index % 4); // Limit delay
  });
}