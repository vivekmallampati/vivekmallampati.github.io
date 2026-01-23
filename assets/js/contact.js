/**
 * Contact Form JavaScript with Formspree Integration
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;

      // Disable submit button and show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon> Sending...';

      // Hide previous messages
      formMessage.style.display = 'none';
      formMessage.className = '';

      try {
        // Submit to Formspree
        // Note: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
        // You can get this from https://formspree.io after creating an account
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success
          formMessage.style.display = 'block';
          formMessage.className = 'success';
          formMessage.innerHTML = `
            <div style="background: rgba(0, 212, 255, 0.1); border: 1px solid var(--color-accent-primary); 
                        border-radius: var(--radius-md); padding: var(--spacing-md); color: var(--color-accent-primary);">
              <strong>✓ Message sent successfully!</strong><br>
              Thank you for reaching out. I'll get back to you as soon as possible.
            </div>
          `;
          
          // Reset form
          contactForm.reset();
          
          // Scroll to message
          formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          // Error from Formspree
          const data = await response.json();
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        // Network error or other issue
        formMessage.style.display = 'block';
        formMessage.className = 'error';
        formMessage.innerHTML = `
          <div style="background: rgba(255, 0, 0, 0.1); border: 1px solid #ff4444; 
                      border-radius: var(--radius-md); padding: var(--spacing-md); color: #ff4444;">
            <strong>✗ Error sending message</strong><br>
            ${error.message || 'Please try again later or send an email directly to mallampv@oregonstate.edu'}
          </div>
        `;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });

    // Real-time form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(input);
      });

      input.addEventListener('input', function() {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });

    function validateField(field) {
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = '';

      // Remove previous error styling
      field.classList.remove('error');
      const existingError = field.parentElement.querySelector('.field-error');
      if (existingError) {
        existingError.remove();
      }

      // Validate based on field type
      if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
      } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
      }

      // Show error if invalid
      if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#ff4444';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = 'var(--font-size-sm)';
        errorDiv.style.marginTop = 'var(--spacing-xs)';
        errorDiv.textContent = errorMessage;
        field.parentElement.appendChild(errorDiv);
      } else {
        field.style.borderColor = '';
      }

      return isValid;
    }
  }
});
