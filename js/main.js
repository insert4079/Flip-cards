let card = document.querySelectorAll('.card'),
    cardWrap = document.querySelectorAll('.cardWrap'),
    wrapper = document.querySelector('.wrapper');

// cardWrap[0].addEventListener('mousemove', function(e) {
//     card[0].style.transform = `rotateY(${(e.offsetX - card[0].clientWidth/2)/4}deg) rotateX(${-(e.offsetY - card[0].clientHeight/2)/4}deg)`
// });






for (let i = 0; i < card.length; i++) {
    cardWrap[i].addEventListener('mousemove', function(e) {
        card[i].style.transform = `rotateY(${(e.offsetX - card[i].clientWidth/2)/5}deg) rotateX(${-(e.offsetY - card[i].clientHeight/2)/5}deg)`
    });

    cardWrap[i].addEventListener('mouseleave', function() {
        card[i].style.transform = `rotateX(0deg)`;
    });
}