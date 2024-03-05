window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.ri-arrow-up-s-line');
    scroll.classList.toggle("active", window.scrollY > 300)
    var aboutMeSection = document.getElementById('sobre');
    if (aboutMeSection.getBoundingClientRect().top + 30 < window.innerHeight) {
        console.log('entrou');
        scroll.classList.add('dark');
    } else {
        scroll.classList.remove('dark');
    }
});

function backToSection(){
    window.scrollTo(
    top = 0,
    behavior = "smooth"    
    );
}