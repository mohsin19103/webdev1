const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
    const translateValue = -index * 100 + '%';
    sliderContainer.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startSlider() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

startSlider(); // Start the automatic slider
