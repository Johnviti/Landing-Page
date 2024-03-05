
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.ri-arrow-up-s-line');
    scroll.classList.toggle("active", window.scrollY > 800)
});

function backToSection(){
    window.scrollTo(
    top = 0,
    behavior = "smooth"    
    );
}

