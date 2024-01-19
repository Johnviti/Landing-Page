window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#navbar');
    navbar.classList.toggle('navbar-rolagem', window.scrollY > 0);
});