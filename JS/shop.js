

   /**
 * Switches between the Water Bottles and Accessories tabs.
 * @param {string} targetId - The ID of the tab panel to activate ('water-bottles' or 'accessories').
 */
function switchTab(targetId) {
    // 1. Deactivate all tab buttons and panels
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.setAttribute('hidden', '');
        panel.classList.remove('active');
    });

    // 2. Activate the target button and panel
    const newActiveButton = document.querySelector(`.tab-button[data-target="${targetId}"]`);
    const newActivePanel = document.getElementById(targetId);

    if (newActiveButton && newActivePanel) {
        newActiveButton.classList.add('active');
        newActiveButton.setAttribute('aria-selected', 'true');
        
        newActivePanel.removeAttribute('hidden');
        newActivePanel.classList.add('active');
    }
}

/**
 * Handles the Add to Cart button click and simulates a page redirect.
 * @param {HTMLElement} buttonElement - The button element that was clicked.
 */
function addToCart(buttonElement) {
    // Get the product name for context
    const productName = buttonElement.closest('.product-card').querySelector('.product-card__name').textContent;

    // Simulate adding to cart and redirecting to a confirmation/cart page
    alert(`"${productName.trim()}" added to cart! Redirecting...`);

    // In a real application, you would change this line to your actual cart page URL.
    window.location.href = 'Product-cart.html';
}

// Ensure the correct tab is active on load
document.addEventListener('DOMContentLoaded', () => {
    switchTab('water-bottles'); // Default to Water Bottles tab on page load
});     