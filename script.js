// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('show');
            const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
            mobileMenuIcon.classList.remove('active');
            
            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Form submission handling (example)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Here you would typically send the data to your server
            // For now, we'll just show a success message
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    });
}

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question i').classList.remove('rotate');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        const icon = question.querySelector('i');
        icon.classList.toggle('rotate');
    });
});

// Mobile menu toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuIcon.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('show') && !navLinks.contains(e.target) && (!mobileMenuIcon || !mobileMenuIcon.contains(e.target))) {
         navLinks.classList.remove('show');
    }
});

// Close mobile menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

// Re-add hover effect to feature cards (CSS handles main effect, JS optional)
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Testimonial Slider (if needed)
const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

if (testimonialSlider) {
    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonialSlider.classList.add('active');
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
        testimonialSlider.classList.remove('active');
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
}); 