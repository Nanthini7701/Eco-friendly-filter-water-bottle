 // --- JAVASCRIPT FOR CHECKOUT PROCESS NAVIGATION ---
        
        let currentStep = 1;
        const totalSteps = 3;
        
        // Get elements for navigation and status bar
        const step1View = document.getElementById('step1View');
        const step2View = document.getElementById('step2View');
        const step3View = document.getElementById('step3View');
        const steps = [
            document.getElementById('step1'), 
            document.getElementById('step2'), 
            document.getElementById('step3')
        ];
        const progressBar = document.getElementById('progressBar');

        /**
         * Updates the visual state of the process bar (dots and progress line).
         * @param {number} step - The current active step (1, 2, or 3).
         */
        function updateProcessBar(step) {
            steps.forEach((s, index) => {
                // If the step index is less than the current step number (1, 2, 3), it's active
                if (index < step) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            // Calculate progress bar width
            let progressWidth = 0;
            if (step === 1) {
                progressWidth = '0%';
            } else if (step === 2) {
                // Width is 50% for step 2 (from step 1 to step 2)
                progressWidth = '50%'; 
            } else if (step === 3) {
                // Width is 100% for step 3
                progressWidth = '100%';
            }
            progressBar.style.width = progressWidth;
        }

        /**
         * Navigates to a specific step.
         * @param {number} step - The target step number (1, 2, or 3).
         */
        function navigateToStep(step) {
            // Hide all views
            step1View.classList.add('d-none');
            step2View.classList.add('d-none');
            step3View.classList.add('d-none');

            // Show the target view and update the current step
            currentStep = step;
            if (step === 1) {
                step1View.classList.remove('d-none');
            } else if (step === 2) {
                step2View.classList.remove('d-none');
            } else if (step === 3) {
                step3View.classList.remove('d-none');
            }

            // Update the status bar UI
            updateProcessBar(currentStep);
        }

        // --- Step 1: Shipping Form Submission ---
        document.getElementById('shippingForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform basic form validation here if needed
            
            // If validation passes, navigate to the next step
            navigateToStep(2);
        });

        // --- Step 2: Payment Form Submission ---
        document.getElementById('paymentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Optional: Check if a payment method is selected
            const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
            if (!selectedMethod) {
                alert("Please select a payment method.");
                return;
            }

            // If payment is successfully processed (simulated), navigate to the next step
            navigateToStep(3);
        });

        // --- Step 2: Clickable Card Selection Logic (Enhancement) ---
        document.querySelectorAll('.payment-method-card').forEach(card => {
            card.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            });
        });

        // --- Initial Load ---
        // Ensure only the first step is shown and status bar is set correctly on page load
        document.addEventListener('DOMContentLoaded', () => {
            navigateToStep(1);
        });
