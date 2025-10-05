document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Carousel Logic ---
    const heroImages = document.querySelectorAll('.hero-carousel .hero-image');
    const heroIndicators = document.querySelectorAll('.carousel-indicators .indicator');
    let heroIndex = 0;

    function nextHeroImage() {
        // Remove 'active' classes from current image and indicator
        heroImages[heroIndex].classList.remove('active-image');
        heroIndicators[heroIndex].classList.remove('active-indicator');

        // Move to the next index (loops back to 0 after the last image)
        heroIndex = (heroIndex + 1) % heroImages.length;

        // Add 'active' classes to the new image and indicator
        heroImages[heroIndex].classList.add('active-image');
        heroIndicators[heroIndex].classList.add('active-indicator');
    }

    // Set the auto-change interval for the Hero Section (0.3 seconds)
    if (heroImages.length > 1) {
        setInterval(nextHeroImage, 700); // 300 milliseconds
    }


    // --- Original Filtration Carousel Logic ---
    const originalImages = document.querySelectorAll('.original-carousel .original-image');
    let originalIndex = 0;

    function nextOriginalImage() {
        // Remove 'active' class from current image
        originalImages[originalIndex].classList.remove('active-original-image');

        // Move to the next index (loops back to 0 after the last image)
        originalIndex = (originalIndex + 1) % originalImages.length;

        // Add 'active' class to the new image
        originalImages[originalIndex].classList.add('active-original-image');
    }

    // Set the auto-change interval for the Original Filtration Section (0.3 seconds)
    if (originalImages.length > 1) {
        setInterval(nextOriginalImage, 500); // 300 milliseconds
    }

});


document.addEventListener('DOMContentLoaded', () => {
    
    // ... (Existing Hero Carousel Logic - 0.3s) ...
    // ... (Existing Original Filtration Carousel Logic - 0.3s) ...


    // ===================================================
    // 3. END BOTTLES CAROUSEL LOGIC (4 Images, 0.7s interval)
    // ===================================================
    const endImages = document.querySelectorAll('.end-bottles-carousel .end-image');
    let endIndex = 0;
    const END_INTERVAL = 700; // 0.7 seconds

    function nextEndImage() {
        if (endImages.length === 0) return;

        // 1. Deactivate current
        endImages[endIndex].classList.remove('active-end-image');

        // 2. Calculate next index (loops from 3 back to 0)
        endIndex = (endIndex + 1) % endImages.length;

        // 3. Activate next
        endImages[endIndex].classList.add('active-end-image');
    }

    // Start the End Bottles Carousel timer
    if (endImages.length > 1) {
        setInterval(nextEndImage, END_INTERVAL);
    }
});