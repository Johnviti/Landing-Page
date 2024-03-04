const btns = document.querySelectorAll('.btn-project a');

btns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        const filter = btn.getAttribute('data-filter');
        swiperCards.slideTo(0);
        event.preventDefault();
        if (filter === 'all') {
            swiperCards.forEach(function(slide) {
                slide.style.display = 'block';
            });
        }else{
            swiperCards.forEach(function(slide) {
                if (slide.classList.contains(filter)) {
                    slide.style.display = 'block';
                }else{
                    slide.style.display = 'none';
                }
            });
        }
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        swiperCards.update();
    });
});