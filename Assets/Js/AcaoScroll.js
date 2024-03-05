window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.ri-arrow-up-s-line');
    scroll.classList.toggle("active", window.scrollY > 300)
    var aboutMeSection = document.getElementById('sobre');
    var projetosSection = document.getElementById('projetos');
    if (aboutMeSection.getBoundingClientRect().top + 30 < window.innerHeight) {
        scroll.classList.add('dark');
    } else {
        
    }
    if (projetosSection.getBoundingClientRect().top + 30 < window.innerHeight) {
        scroll.classList.remove('dark');
    }
});

function backToSection(){
    window.scrollTo(
    top = 0,
    behavior = "smooth"    
    );
}