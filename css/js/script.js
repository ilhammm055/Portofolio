document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('toggle');
    const darkModeToggleMobile = document.getElementById('toggle-mobile');
    const htmlElement = document.documentElement;

    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        htmlElement.classList.add('dark');
        darkModeToggle.checked = true;
        darkModeToggleMobile.checked = true;
    }

    // Desktop toggle
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            htmlElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Mobile toggle
    darkModeToggleMobile.addEventListener('change', function() {
        if (this.checked) {
            htmlElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.checked = true;
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.checked = false;
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            formResponse.classList.remove('hidden');
            formResponse.textContent = 'Thank you for your message! I will get back to you soon.';
            formResponse.className = 'mt-4 p-4 rounded-lg border bg-green-100 border-green-400 text-green-700';
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formResponse.classList.add('hidden');
            }, 5000);
        });
    }

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize on load
});
