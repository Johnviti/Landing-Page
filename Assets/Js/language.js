// Sistema de gerenciamento de idiomas
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'pt-BR';
        this.init();
    }

    init() {
        this.updateContent();
        this.bindEvents();
    }

    // createLanguageSelector() {
    //     // Criar o seletor de idiomas
    //     const languageSelector = document.createElement('div');
    //     languageSelector.className = 'language-selector';
    //     languageSelector.innerHTML = `
           
    //     `;

    //     // Inserir antes do header
    //     const header = document.querySelector('.menu');
    //     document.body.insertBefore(languageSelector, header);
    // }

    bindEvents() {
        // Event listeners para os botões de idioma
        document.querySelectorAll('.flag-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Atualizar botões ativos
        document.querySelectorAll('.flag-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Atualizar conteúdo
        this.updateContent();
    }

    updateContent() {
        // Atualizar todos os elementos com data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = getTranslation(key, this.currentLanguage);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        // Atualizar título da página
        const titles = {
            'pt-BR': 'John Victor | Desenvolvedor Full Stack',
            'en': 'John Victor | Full Stack Developer',
            'pt-PT': 'John Victor | Programador Full Stack'
        };
        document.title = titles[this.currentLanguage];

        // Atualizar atributos alt das imagens se necessário
        this.updateImageAlts();
    }

    updateImageAlts() {
        // Atualizar textos alternativos das imagens baseado no idioma
        const logoImg = document.querySelector('.logo img');
        if (logoImg) {
            const alts = {
                'pt-BR': 'Logo John Victor',
                'en': 'John Victor Logo',
                'pt-PT': 'Logótipo John Victor'
            };
            logoImg.alt = alts[this.currentLanguage];
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Inicializar o gerenciador de idiomas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});