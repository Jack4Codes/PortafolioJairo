/**
 * Mobile menu functionality
 */
export function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle body scroll when menu is open
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when a nav item is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') && 
      !e.target.closest('nav') && 
      !e.target.closest('.mobile-menu-btn')
    ) {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Add CSS for mobile menu
  addMobileMenuStyles();
}

/**
 * Add mobile menu styles
 */
function addMobileMenuStyles() {
  const styleEl = document.createElement('style');
  
  styleEl.textContent = `
    body.menu-open {
      overflow: hidden;
    }
    
    @media (max-width: 767px) {
      .nav-links {
        padding: 1rem 0;
      }
      
      .nav-links.active {
        height: calc(100vh - 70px);
        padding: 2rem 0;
      }
      
      .nav-links a {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        transition-delay: calc(var(--item-index, 0) * 0.1s);
      }
      
      .nav-links.active a {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  document.head.appendChild(styleEl);
  
  // Set transition delay for nav items
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
}