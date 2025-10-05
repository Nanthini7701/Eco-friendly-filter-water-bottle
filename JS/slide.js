 let slideIndex = 0;
    const slides = document.querySelectorAll(".slide-img");

    function showSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove("active-slide");
      });
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].classList.add("active-slide");
      setTimeout(showSlides, 2000); // 3 seconds auto change
    }

    showSlides();

     const track = document.getElementById("reviewTrack");
    const slides1 = document.querySelectorAll(".review-card");
    let index = 0;

    function moveSlide() {
      index++;
      if (index > slides1.length - 1) {
        index = 0;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 2000); // Change every 4 seconds