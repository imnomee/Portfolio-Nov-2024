const elements = document.querySelectorAll('.element');
const fixedImage = document.querySelector('#fixed-image');
elements.forEach((element) => {
    element.addEventListener('mouseenter', (e) => {
        if (e.target.className === 'element') {
            const image = e.target.getAttribute('data-image');
            fixedImage.style.display = 'block';
            fixedImage.style.backgroundImage = `url(${image})`;
        }
    });
    element.addEventListener('mouseleave', (e) => {
        if (e.target.className === 'element') {
            fixedImage.style.display = 'none';
        }
    });
});

var swiper = new Swiper('.mySwiper', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});
