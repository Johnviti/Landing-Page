window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.arrow-top');
    scroll.classList.toggle("active-scroll", window.scrollY > 300)
});

function backToSection(){
    window.scrollTo(
    top = 0,
    behavior = "smooth"    
    );
}