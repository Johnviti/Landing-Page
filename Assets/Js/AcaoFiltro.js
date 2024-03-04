const btns = document.querySelectorAll('.btn-project a');

btns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const filter = btn.getAttribute('data-filter');
        console.log(filter);
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        const cards = document.querySelectorAll('.card__article');
        cards.forEach(card => {
            card.style.display = 'none';
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block'; 
                console.log(card);
            }
        });
        swiperCards.update();
    });
});