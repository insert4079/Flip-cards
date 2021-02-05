let card = document.querySelectorAll('.card'),
    cardWrap = document.querySelectorAll('.cardWrap'),
    wrapper = document.querySelector('.wrapper');

for (let i = 0; i < card.length; i++) {
    cardWrap[i].addEventListener('mousemove', function(e) {
        card[i].style.transform = `rotateY(${(e.offsetX - card[i].clientWidth/2)/5}deg) rotateX(${-(e.offsetY - card[i].clientHeight/2)/5}deg)`
    });

    cardWrap[i].addEventListener('mouseleave', function() {
        card[i].style.transform = `rotateX(0deg)`;
    });
}
