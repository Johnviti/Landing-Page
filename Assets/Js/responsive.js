// ===== RESPONSIVIDADE E MENU HAMBURGER =====

document.addEventListener('DOMContentLoaded', function() {
    // Criar menu hamburger se não existir
    createHamburgerMenu();
    
    // Inicializar funcionalidades responsivas
    initResponsiveFeatures();
    
    // Listener para mudanças de orientação
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Listener para redimensionamento da janela
    window.addEventListener('resize', debounce(handleResize, 250));
});

// Criar menu hamburger
function createHamburgerMenu() {
    const navbar = document.querySelector('.nav-bar-portifolio');
    const menu = document.querySelector('.menu');
    
    if (!navbar || !menu) return;
    
    // Verificar se o hamburger já existe
    if (document.querySelector('.hamburger')) return;
    
    // Criar botão hamburger
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Inserir hamburger após o logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.parentNode.insertBefore(hamburger, logo.nextSibling);
    }
    
    // Adicionar event listener
    hamburger.addEventListener('click', toggleMobileMenu);
}

// Toggle do menu mobile
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (!hamburger || !menu) return;
    
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Fechar menu ao clicar em um link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

// Inicializar funcionalidades responsivas
function initResponsiveFeatures() {
    // Ajustar altura do viewport para mobile
    setViewportHeight();
    
    // Otimizar imagens para diferentes densidades de tela
    optimizeImages();
    
    // Ajustar elementos 3D para mobile
    handle3DElements();
    
    // Configurar lazy loading para imagens
    setupLazyLoading();
}

// Definir altura do viewport para mobile
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Otimizar imagens
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Adicionar loading lazy se não tiver
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Adicionar alt se não tiver
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'Imagem do portfólio');
        }
    });
}

// Gerenciar elementos 3D em mobile
function handle3DElements() {
    const container3D = document.getElementById('container3D');
    const isMobile = window.innerWidth <= 768;
    
    if (container3D) {
        if (isMobile) {
            container3D.style.display = 'none';
        } else {
            container3D.style.display = 'block';
        }
    }
}

// Configurar lazy loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Lidar com mudança de orientação
function handleOrientationChange() {
    setTimeout(() => {
        setViewportHeight();
        handle3DElements();
    }, 100);
}

// Lidar com redimensionamento
function handleResize() {
    setViewportHeight();
    handle3DElements();
    
    // Fechar menu mobile se a tela ficar grande
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        
        if (hamburger && menu) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    }
}

// Função debounce para otimizar performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll para navegação
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Compensar altura da navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Adicionar smooth scroll aos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScrollTo(target);
        });
    });
});

// Detectar se é dispositivo touch
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Adicionar classe para dispositivos touch
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
} else {
    document.body.classList.add('no-touch');
}

// Otimizações para performance em mobile
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduzir qualidade de animações em mobile
        document.body.classList.add('mobile-optimized');
        
        // Desabilitar hover effects em touch devices
        if (isTouchDevice()) {
            document.body.classList.add('no-hover');
        }
    }
}

// Executar otimizações
optimizeForMobile();

// Re-executar otimizações no resize
window.addEventListener('resize', debounce(optimizeForMobile, 250));

// Função para detectar se o usuário está em um dispositivo iOS
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// Ajustes específicos para iOS
if (isIOS()) {
    document.body.classList.add('ios-device');
    
    // Fix para viewport height no iOS
    function setIOSViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', setIOSViewportHeight);
    setIOSViewportHeight();
}

// Prevenção de zoom em inputs no iOS
if (isIOS()) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        if (input.style.fontSize === '' || parseFloat(input.style.fontSize) < 16) {
            input.style.fontSize = '16px';
        }
    });
}

// Função para melhorar performance de scroll
let ticking = false;

function updateScrollPosition() {
    const scrollTop = window.pageYOffset;
    
    // Adicionar classe quando rolar
    if (scrollTop > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);

// Função para carregar recursos de forma assíncrona
function loadResourcesAsync() {
    // Carregar fontes de forma assíncrona
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach(link => {
        link.rel = 'preload';
        link.as = 'style';
        link.onload = function() {
            this.rel = 'stylesheet';
        };
    });
}

// Executar carregamento assíncrono
loadResourcesAsync();

// Service Worker para cache (se disponível)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}