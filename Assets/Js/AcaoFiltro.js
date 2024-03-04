const btns = document.querySelectorAll('.btn-project a');

btns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        const filter = btn.getAttribute('data-filter');
        swiperCards.slideTo(0);
        event.preventDefault();
        swiperCards.slides.forEach(function(slide) {
            if (filter === 'all') {
                slide.style.display = 'block';
            } else {
                if (slide.classList.contains(filter)) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            }
        });
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        swiperCards.update();
    });
});
