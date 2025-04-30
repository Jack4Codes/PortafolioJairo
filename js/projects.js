// Projects data and functionality
document.addEventListener('DOMContentLoaded', () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and user authentication.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A creative portfolio website with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/5632369/pexels-photo-5632369.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with user authentication and real-time updates.',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'RESTful API',
      description: 'A comprehensive REST API for a blog platform with authentication, authorization, and CRUD operations.',
      image: 'https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Authentication System',
      description: 'A secure authentication system with password hashing, JWT tokens, and role-based access control.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with websockets, private messaging, and file sharing.',
      image: 'https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fullstack',
      technologies: ['Node.js', 'Express', 'Socket.io', 'React'],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  const projectsContainer = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Display all projects initially
  displayProjects('all');
  
  // Filter button functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter and display projects
      displayProjects(filter);
    });
  });
  
  // Display projects based on filter
  function displayProjects(filter) {
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    // Clear container
    projectsContainer.innerHTML = '';
    
    // Create and append project cards
    filteredProjects.forEach(project => {
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);
    });
    
    // Apply fade-in animation to new cards
    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in', 'active');
      });
    }, 100);
  }
  
  // Create project card element
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    const technologies = project.technologies.join(', ');
    
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-info">
        <span class="project-category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><small>${technologies}</small></p>
        <div class="project-links">
          <a href="${project.liveLink}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
          <a href="${project.codeLink}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Source Code
          </a>
        </div>
      </div>
    `;
    
    return card;
  }
});