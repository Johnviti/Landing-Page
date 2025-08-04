// Loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const progressFill = document.querySelector('.progress-fill');
    
    // Simular progresso de carregamento
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Iniciar animações após o carregamento
                    animateSkills();
                }, 500);
            }, 500);
        }
    }, 200);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollTop = window.scrollY;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTop > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Active menu link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.menu-link[href*="${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.menu-link[href*="${sectionId}"]`).classList.remove('active');
        }
    });
});

// Animate skills on scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // If it's the skills section, animate the skill bars
            if (entry.target.classList.contains('about-skills')) {
                animateSkills();
            }
        }
    });
}, { threshold: 0.1 });

// Observe elements for animation
document.querySelectorAll('.about-skills, .tech-item, .project-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message with current language
        const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'pt-BR';
        const successMessage = getTranslation('contact.form.success', currentLang);
        alert(successMessage);
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll to section
function backToSection() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize AOS animations if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Update scroll to top button title based on language
function updateScrollTopTitle() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn && window.languageManager) {
        const currentLang = window.languageManager.getCurrentLanguage();
        const title = getTranslation('scroll.top', currentLang);
        scrollTopBtn.setAttribute('title', title);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', () => {
    updateScrollTopTitle();
});