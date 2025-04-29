/**
 * Theme toggle functionality
 */
export function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use OS preference
  const savedTheme = localStorage.getItem('theme');
  
  // If user has a saved preference, use it
  if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateThemeIcon(savedTheme === 'dark');
  // Otherwise, use OS preference
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
  
  // Theme toggle click handler
  themeToggleBtn.addEventListener('click', () => {
    // Toggle dark mode class
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateThemeIcon(isDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
  
  // Update theme when OS preference changes
  prefersDarkScheme.addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    
    // Only update if user hasn't set a preference
    if (!savedTheme) {
      const shouldBeDark = e.matches;
      document.body.classList.toggle('dark-mode', shouldBeDark);
      updateThemeIcon(shouldBeDark);
    }
  });
}

// Update the theme toggle icon
function updateThemeIcon(isDarkMode) {
  const themeToggleIcon = document.querySelector('#theme-toggle i');
  
  if (isDarkMode) {
    themeToggleIcon.classList.remove('fa-moon');
    themeToggleIcon.classList.add('fa-sun');
  } else {
    themeToggleIcon.classList.remove('fa-sun');
    themeToggleIcon.classList.add('fa-moon');
  }
}