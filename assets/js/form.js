document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {  // Ensure the form is fully loaded
        const form = document.getElementById("quoteForm");
        const responseMessage = document.getElementById("responseMessage");

        if (!form) {
            console.error("Form element not found.");
            return;
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents default page reload

            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                responseMessage.style.display = "block";
                responseMessage.textContent = "Form submitted successfully!";
                responseMessage.style.color = "green";
                form.reset(); // Clear the form after submission
            })
            .catch(error => {
                responseMessage.style.display = "block";
                responseMessage.textContent = "Error submitting form. Please try again.";
                responseMessage.style.color = "red";
                console.error("Error:", error);
            });
        });
    }, 500); // Delays execution slightly to ensure the form is loaded
});
