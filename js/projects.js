/**
 * Project filtering functionality
 */
export function initProjectFilters() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Add click event to tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get the category to filter
      const filterCategory = button.getAttribute('data-category');
      
      // Filter projects
      filterProjects(filterCategory, projectCards);
    });
  });
  
  // Initialize with "All" selected
  document.querySelector('.tab-btn[data-category="all"]').classList.add('active');
}

/**
 * Filter projects based on category
 * @param {string} category - The category to filter by
 * @param {NodeList} projects - The project cards to filter
 */
function filterProjects(category, projects) {
  projects.forEach(project => {
    // Get project categories (space-separated list)
    const projectCategories = project.getAttribute('data-category');
    
    // Show all projects if "all" category is selected
    if (category === 'all') {
      project.style.display = 'block';
      
      // Add animation class
      setTimeout(() => {
        project.classList.add('fade-in');
      }, 10);
    }
    // Otherwise, check if project belongs to selected category
    else if (projectCategories.includes(category)) {
      project.style.display = 'block';
      
      // Add animation class
      setTimeout(() => {
        project.classList.add('fade-in');
      }, 10);
    }
    // Hide projects that don't match
    else {
      project.classList.remove('fade-in');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        project.style.display = 'none';
      }, 300);
    }
  });
}