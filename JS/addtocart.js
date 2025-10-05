// --- Image Gallery Functionality ---

/**
 * Changes the main product image when a thumbnail is clicked.
 * @param {HTMLElement} thumbnail - The thumbnail element that was clicked.
 */
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    // NOTE: Replace the 'data-image' attribute values in the HTML with your actual image paths.
    const newSrc = thumbnail.getAttribute('data-image'); 
    
    // Update main image source
    if (newSrc) {
        mainImage.src = newSrc;
    }

    // Update active state for thumbnails
    document.querySelectorAll('.thumbnail').forEach(t => {
        t.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// --- Dynamic Review Functionality ---

const reviewsData = [
    { name: "Kim Twohig", rating: 5, text: "This product was excellent and with travelling to Africa, had no problems at all and was not concerned about the water in Africa. Perfect for travel" },
    { name: "Sharon", rating: 5, text: "I got this for a trip to India and all the water I drank was filtered through the filtration system in this bottle. Highly recommend." },
    { name: "Katherine P.", rating: 4, text: "I live in a very old apartment with very old pipes, but this water bottle's built in filter gives me the taste and quality without the frustration and waste of store bought water bottles." },
    { name: "David M.", rating: 5, text: "Best purchase for camping and backpacking! It's lightweight, durable, and the water tastes fresh every time. Essential gear." },
    { name: "Aisha H.", rating: 4, text: "Great product, though the flow rate is a little slow when the filter is new. Worth the wait for clean drinking water anywhere." }
];

let currentReviewIndex = 0;

/**
 * Generates the HTML string for a star rating.
 * @param {number} rating - The star rating (e.g., 5).
 * @returns {string} HTML string of stars.
 */
function generateStars(rating) {
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
}

/**
 * Updates the reviews displayed in the grid with the next set of three reviews.
 */
function updateReviews() {
    const grid = document.getElementById('review-grid');
    if (!grid) return; // Exit if the review grid element is not found
    
    // Clear current reviews (or use an animation library for smooth transition)
    grid.innerHTML = ''; 

    // Calculate the indices for the next three reviews, wrapping around
    for (let i = 0; i < 3; i++) {
        const review = reviewsData[(currentReviewIndex + i) % reviewsData.length];
        
        const reviewHTML = `
            <div class="review-card" data-review-id="${review.name}">
                <h3 class="review-card__name">${review.name}</h3>
                <div class="review-card__rating">${generateStars(review.rating)}</div>
                <p class="review-card__text">${review.text}</p>
            </div>
        `;
        grid.innerHTML += reviewHTML;
    }

    // Move to the next starting index for the next rotation
    currentReviewIndex = (currentReviewIndex + 1) % reviewsData.length;
}

// --- Add to Cart Redirect ---

function addToCartAndRedirect() {
    // Navigate to the specified cart page as requested
    window.location.href = 'Product-cart.html'; 
}

// Set up the automatic review rotation (e.g., every 5 seconds)
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of the first three reviews
    updateReviews(); 
    // Set interval for continuous rotation
    setInterval(updateReviews, 5000); 
    
    // Attach the redirect function to the global scope if not already done
    window.addToCartAndRedirect = addToCartAndRedirect;
    window.changeMainImage = changeMainImage;
});