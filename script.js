document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Simple Validation Logic
            if (name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                hideError(name);
            }

            if (!validateEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            } else {
                hideError(email);
            }

            if (message.value.trim().length < 10) {
                showError(message, 'Message must be at least 10 characters');
                isValid = false;
            } else {
                hideError(message);
            }

            if (isValid) {
                // Mock success
                document.getElementById('formSuccess').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 5000);
            }
        });
    }

    // Helper Functions
    function showError(input, message) {
        const group = input.parentElement;
        const errorDisplay = group.querySelector('.error-msg');
        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block';
        input.style.borderColor = '#ef4444';
    }

    function hideError(input) {
        const group = input.parentElement;
        const errorDisplay = group.querySelector('.error-msg');
        errorDisplay.style.display = 'none';
        input.style.borderColor = '#ddd';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});