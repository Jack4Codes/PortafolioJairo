const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      title: "Full-Stack Developer",
      subtitle: "Crafting elegant solutions for complex problems"
    },
    about: {
      title: "About Me",
      description: "Hello! I'm Alex, a passionate full-stack developer with 5 years of experience building web applications. I specialize in creating robust backend systems and intuitive user interfaces.",
      experience: "Years Experience",
      projects: "Projects Completed",
      clients: "Happy Clients"
    },
    projects: {
      title: "My Projects",
      all: "All",
      frontend: "Frontend",
      backend: "Backend"
    },
    skills: {
      title: "My Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others"
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message Sent!",
      successMsg: "Thank you for contacting me. I'll get back to you soon."
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto"
    },
    hero: {
      title: "Desarrollador Full-Stack",
      subtitle: "Creando soluciones elegantes para problemas complejos"
    },
    about: {
      title: "Sobre Mí",
      description: "¡Hola! Soy Alex, un desarrollador full-stack apasionado con 5 años de experiencia construyendo aplicaciones web. Me especializo en crear sistemas backend robustos e interfaces de usuario intuitivas.",
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos"
    },
    projects: {
      title: "Mis Proyectos",
      all: "Todos",
      frontend: "Frontend",
      backend: "Backend"
    },
    skills: {
      title: "Mis Habilidades",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y Otros"
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
      success: "¡Mensaje Enviado!",
      successMsg: "Gracias por contactarme. Te responderé pronto."
    }
  }
};

let currentLang = 'en';

export function initLanguage() {
  const langSwitcher = document.querySelector('.language-switcher');
  const langBtn = document.querySelector('.lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-dropdown button');

  // Toggle dropdown
  langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langDropdown.classList.remove('active');
    }
  });

  // Handle language selection
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      setLanguage(lang);
      langDropdown.classList.remove('active');
    });
  });

  // Initialize with default language
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelector('.current-lang').textContent = lang.toUpperCase();
  
  // Update all translations
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key, translations[lang]);
    
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

function getTranslation(key, translations) {
  return key.split('.').reduce((obj, k) => obj && obj[k], translations);
}

// Export for use in other modules
export { translations, currentLang };