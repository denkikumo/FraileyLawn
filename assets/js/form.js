document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quoteForm");
    const responseMessage = document.getElementById("responseMessage");

    if (!form) {
        console.error("❌ Form element not found.");
        return;
    }

    if (!responseMessage) {
        console.error("❌ responseMessage element not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default redirection

        const formData = new FormData(form);

        fetch("https://formspree.io/f/mbldqwdv", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                responseMessage.textContent = "Your request has been submitted successfully!";
                responseMessage.style.display = "block";
                responseMessage.style.color = "green";

                // Clear the form fields after successful submission
                form.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    responseMessage.style.display = "none";
                }, 3000);
            } else {
                responseMessage.textContent = "Oops! There was an error. Please try again.";
                responseMessage.style.display = "block";
                responseMessage.style.color = "red";
            }
        })
        .catch(error => {
            responseMessage.textContent = "Something went wrong. Please try again.";
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
        });
    });
});
