const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateSlider() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    const maxIndex = window.innerWidth > 768 ? slides.length - 2 : slides.length - 1;
    if (index >= maxIndex) {
        index = 0;
    } else {
        index++;
    }
    updateSlider();
}

function prevSlide() {
    if (index <= 0) {
        const maxIndex = window.innerWidth > 768 ? slides.length - 2 : slides.length - 1;
        index = maxIndex;
    } else {
        index--;
    }
    updateSlider();
}

nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

let autoSlideInterval = setInterval(nextSlide, 3500);

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3500);
}

window.addEventListener('resize', updateSlider);