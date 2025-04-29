/**
 * Contact form functionality
 */
export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add input validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', validateInput);
      input.addEventListener('input', clearValidation);
    });
  }
}

/**
 * Handle form submission
 * @param {Event} e - The submit event
 */
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form elements
  const form = e.target;
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');
  
  // Validate all inputs
  const nameValid = validateInput({ target: nameInput });
  const emailValid = validateInput({ target: emailInput });
  const messageValid = validateInput({ target: messageInput });
  
  // Proceed only if all inputs are valid
  if (nameValid && emailValid && messageValid) {
    // In a real application, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    
    // Disable form and show loading state
    form.classList.add('loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    form.querySelectorAll('input, textarea').forEach(input => {
      input.disabled = true;
    });
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Show success message
      form.innerHTML = `
        <div class="form-success">
          <i class="fas fa-check-circle"></i>
          <h3>Message Sent!</h3>
          <p>Thank you for contacting me. I'll get back to you soon.</p>
        </div>
      `;
    }, 1500);
  }
}

/**
 * Validate form input on blur
 * @param {Event} e - The blur event
 * @returns {boolean} - Whether the input is valid
 */
function validateInput(e) {
  const input = e.target;
  const value = input.value.trim();
  let isValid = true;
  
  // Get or create error element
  let errorElement = input.parentElement.querySelector('.form-error');
  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.className = 'form-error';
    input.parentElement.appendChild(errorElement);
  }
  
  // Validate based on input type
  if (value === '') {
    errorElement.textContent = 'This field is required';
    input.classList.add('invalid');
    isValid = false;
  } else if (input.type === 'email' && !isValidEmail(value)) {
    errorElement.textContent = 'Please enter a valid email address';
    input.classList.add('invalid');
    isValid = false;
  } else {
    errorElement.textContent = '';
    input.classList.remove('invalid');
  }
  
  return isValid;
}

/**
 * Clear validation error when user starts typing
 * @param {Event} e - The input event
 */
function clearValidation(e) {
  const input = e.target;
  const errorElement = input.parentElement.querySelector('.form-error');
  
  if (input.value.trim() !== '') {
    input.classList.remove('invalid');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}