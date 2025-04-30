// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Validate form (simple validation)
    if (validateForm(formValues)) {
      // Simulate form submission (would be replaced with actual API call)
      simulateFormSubmission(formValues)
        .then(response => {
          showSuccessMessage();
          contactForm.reset();
        })
        .catch(error => {
          showErrorMessage(error);
        });
    }
  }
  
  function validateForm(data) {
    // Simple validation - check if all fields have values
    let isValid = true;
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    requiredFields.forEach(field => {
      const input = contactForm.querySelector(`[name="${field}"]`);
      const value = data[field].trim();
      
      if (!value) {
        markInvalid(input, `${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        isValid = false;
      } else {
        markValid(input);
      }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      const emailInput = contactForm.querySelector('[name="email"]');
      markInvalid(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
    
    return isValid;
  }
  
  function markInvalid(input, message) {
    input.classList.add('error');
    
    // Remove existing error message if any
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Create and append error message
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.75rem';
    errorElement.style.marginTop = '0.25rem';
    
    input.parentElement.appendChild(errorElement);
  }
  
  function markValid(input) {
    input.classList.remove('error');
    
    // Remove existing error message if any
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
  
  // Simulated form submission (would be replaced with actual API call)
  function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        // 90% success rate for simulation
        if (Math.random() < 0.9) {
          resolve({ success: true, message: 'Message sent successfully!' });
        } else {
          reject({ success: false, message: 'Failed to send message. Please try again.' });
        }
      }, 1500);
    });
  }
  
  function showSuccessMessage() {
    const formContainer = contactForm.parentElement;
    
    // Create success message
    const successElement = document.createElement('div');
    successElement.className = 'message success-message';
    successElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <p>Your message has been sent successfully! I'll get back to you soon.</p>
    `;
    successElement.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    successElement.style.color = 'var(--success-color)';
    successElement.style.padding = '1rem';
    successElement.style.borderRadius = '4px';
    successElement.style.marginBottom = '1.5rem';
    successElement.style.display = 'flex';
    successElement.style.alignItems = 'center';
    successElement.style.gap = '0.5rem';
    
    // Insert before the form
    formContainer.insertBefore(successElement, contactForm);
    
    // Remove after 5 seconds
    setTimeout(() => {
      successElement.remove();
    }, 5000);
  }
  
  function showErrorMessage(error) {
    const formContainer = contactForm.parentElement;
    
    // Create error message
    const errorElement = document.createElement('div');
    errorElement.className = 'message error-message';
    errorElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      <p>${error.message || 'An error occurred. Please try again.'}</p>
    `;
    errorElement.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.padding = '1rem';
    errorElement.style.borderRadius = '4px';
    errorElement.style.marginBottom = '1.5rem';
    errorElement.style.display = 'flex';
    errorElement.style.alignItems = 'center';
    errorElement.style.gap = '0.5rem';
    
    // Insert before the form
    formContainer.insertBefore(errorElement, contactForm);
    
    // Remove after 5 seconds
    setTimeout(() => {
      errorElement.remove();
    }, 5000);
  }
});