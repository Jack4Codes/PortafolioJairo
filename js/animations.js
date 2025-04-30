// Scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Initial check for elements in viewport
  checkFadeElements();
  
  // Check elements on scroll
  window.addEventListener('scroll', checkFadeElements);
  
  function checkFadeElements() {
    const triggerBottom = window.innerHeight * 0.85;
    
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('active');
      }
    });
  }
  
  // Animate skill bars when they come into view
  const skillSection = document.getElementById('skills');
  
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  };
  
  // Intersection Observer for skills section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  if (skillSection) {
    observer.observe(skillSection);
  }
  
  // Typing animation for hero section
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero h2');
  
  if (heroTitle && heroSubtitle) {
    heroTitle.style.opacity = '1';
    heroSubtitle.style.opacity = '1';
  }
});