 document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting normally
            
            const form = event.target;
            const formMessage = document.getElementById('formMessage');
            
            // Basic data retrieval
            const formData = {
                name: form.name.value,
                mobile: form.mobile.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };

            // ------------------------------------------------------------------
            // JAVASCRIPT FUNCTION: Process and Display Feedback
            // ------------------------------------------------------------------
            
            // In a real application, you would send this 'formData' to a server 
            // using the fetch() API or XMLHttpRequest.
            console.log('Form Data Captured:', formData); 

            // Simulate a successful submission response from a server
            const isSuccess = true; 
            
            if (isSuccess) {
                // Display success message
                formMessage.innerHTML = '<div class="alert alert-success" role="alert">Thank you! Your message has been sent successfully. We will respond within 24 hours.</div>';
                
                // Clear the form fields
                form.reset();
            } else {
                // Display error message (for demonstration, this branch is currently unreachable)
                formMessage.innerHTML = '<div class="alert alert-danger" role="alert">An error occurred while sending your message. Please try again later.</div>';
            }
        });