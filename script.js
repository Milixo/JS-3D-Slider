
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let index = 0;

function updateCarousel() {
    const angle = 360 / totalSlides;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `rotateY(${angle * i}deg) translateZ(500px)`;
    }
    const currentAngle = -angle * index;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
}

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Auto-rotate every 7 seconds
setInterval(() => {
    document.querySelector('.next').click();
}, 7000);

// Initialize
updateCarousel();
