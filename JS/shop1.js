// Auto slideshow for header images
let currentSlide = 0;
const slides = document.querySelectorAll(".header__slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change every 3 seconds