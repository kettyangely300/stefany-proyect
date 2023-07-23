const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const numSlides = slides.length;
const intervalTime = 3000;

function nextSlide() {
  currentIndex = (currentIndex + 1) % numSlides;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, intervalTime);
