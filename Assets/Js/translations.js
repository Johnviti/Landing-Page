// Traduções para o sistema multilíngue
const translations = {
    'pt-BR': {
        // Loader
        'loader.title': 'Carregando experiência',
        
        // Header/Menu
        'menu.home': 'Home',
        'menu.about': 'Sobre',
        'menu.projects': 'Projetos',
        'menu.contact': 'Contato',
        'menu.resume': 'Currículo',
        
        // Hero Section
        'hero.greeting': 'Hello World!',
        'hero.name': 'I\'m John Victor',
        'hero.subtitle': 'Full Stack Developer',
        'hero.contact': 'Contato',
        'hero.projects': 'Projetos',
        'hero.3d.title': 'Mundo 3D',
        'hero.3d.description': 'Controle com o mouse<br>e zoom para explorar',
        
        // Projects Section
        'projects.title': 'Meus Projetos',
        'projects.subtitle': 'Confira alguns dos meus projetos recentes demonstrando minha experiência em desenvolvimento frontend, backend e integrações.',
        'projects.filter.all': 'Todos',
        'projects.filter.laravel': 'Laravel',
        'projects.filter.javascript': 'JavaScript',
        'projects.filter.react': 'React',
        'projects.filter.uiux': 'UI/UX',
        'projects.filter.reactnative': 'React Native',
        'projects.demo': 'Demo',
        'projects.github': 'GitHub',
        'projects.figma': 'Figma',
        
        // Contact Section
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Tem um projeto em mente? Vamos conversar sobre como posso ajudar.',
        'contact.email': 'Email',
        'contact.phone': 'Telefone',
        'contact.location': 'Localização',
        'contact.location.value': 'Maceió, Alagoas - Brasil',
        'contact.form.name': 'Seu Nome',
        'contact.form.email': 'Seu Email',
        'contact.form.subject': 'Assunto',
        'contact.form.message': 'Sua Mensagem',
        'contact.form.send': 'Enviar Mensagem',
        'contact.form.success': 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        
        // Footer
        'footer.rights': '© 2023 John Victor. Todos os direitos reservados.',
        
        // Scroll to top
        'scroll.top': 'Voltar ao topo'
    },
    
    'en': {
        // Loader
        'loader.title': 'Loading experience',
        
        // Header/Menu
        'menu.home': 'Home',
        'menu.about': 'About',
        'menu.projects': 'Projects',
        'menu.contact': 'Contact',
        'menu.resume': 'Resume',
        
        // Hero Section
        'hero.greeting': 'Hello World!',
        'hero.name': 'I\'m John Victor',
        'hero.subtitle': 'Full Stack Developer',
        'hero.contact': 'Contact',
        'hero.projects': 'Projects',
        'hero.3d.title': '3D World',
        'hero.3d.description': 'Control with mouse<br>and zoom to explore',
        
        // Projects Section
        'projects.title': 'My Projects',
        'projects.subtitle': 'Check out some of my recent projects showcasing my experience in frontend, backend development and integrations.',
        'projects.filter.all': 'All',
        'projects.filter.laravel': 'Laravel',
        'projects.filter.javascript': 'JavaScript',
        'projects.filter.react': 'React',
        'projects.filter.uiux': 'UI/UX',
        'projects.filter.reactnative': 'React Native',
        'projects.demo': 'Demo',
        'projects.github': 'GitHub',
        'projects.figma': 'Figma',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Have a project in mind? Let\'s talk about how I can help.',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.location.value': 'Maceió, Alagoas - Brazil',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send Message',
        'contact.form.success': 'Message sent successfully! I will get in touch soon.',
        
        // Footer
        'footer.rights': '© 2023 John Victor. All rights reserved.',
        
        // Scroll to top
        'scroll.top': 'Back to top'
    },
    
    'pt-PT': {
        // Loader
        'loader.title': 'A carregar experiência',
        
        // Header/Menu
        'menu.home': 'Início',
        'menu.about': 'Sobre',
        'menu.projects': 'Projectos',
        'menu.contact': 'Contacto',
        'menu.resume': 'Currículo',
        
        // Hero Section
        'hero.greeting': 'Hello World!',
        'hero.name': 'I\'m John Victor',
        'hero.subtitle': 'Programador Full Stack',
        'hero.contact': 'Contacto',
        'hero.projects': 'Projectos',
        'hero.3d.title': 'Mundo 3D',
        'hero.3d.description': 'Controle com o rato<br>e zoom para explorar',
        
        // Projects Section
        'projects.title': 'Os Meus Projectos',
        'projects.subtitle': 'Confira alguns dos meus projectos recentes que demonstram a minha experiência em desenvolvimento frontend, backend e integrações.',
        'projects.filter.all': 'Todos',
        'projects.filter.laravel': 'Laravel',
        'projects.filter.javascript': 'JavaScript',
        'projects.filter.react': 'React',
        'projects.filter.uiux': 'UI/UX',
        'projects.filter.reactnative': 'React Native',
        'projects.demo': 'Demo',
        'projects.github': 'GitHub',
        'projects.figma': 'Figma',
        
        // Contact Section
        'contact.title': 'Entre em Contacto',
        'contact.subtitle': 'Tem um projecto em mente? Vamos conversar sobre como posso ajudar.',
        'contact.email': 'Email',
        'contact.phone': 'Telefone',
        'contact.location': 'Localização',
        'contact.location.value': 'Maceió, Alagoas - Brasil',
        'contact.form.name': 'O Seu Nome',
        'contact.form.email': 'O Seu Email',
        'contact.form.subject': 'Assunto',
        'contact.form.message': 'A Sua Mensagem',
        'contact.form.send': 'Enviar Mensagem',
        'contact.form.success': 'Mensagem enviada com sucesso! Entrarei em contacto em breve.',
        
        // Footer
        'footer.rights': '© 2023 John Victor. Todos os direitos reservados.',
        
        // Scroll to top
        'scroll.top': 'Voltar ao topo'
    }
};

// Função para obter tradução
function getTranslation(key, lang = 'pt-BR') {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : translations['pt-BR'][key] || key;
}

// Exportar para uso global
window.translations = translations;
window.getTranslation = getTranslation;