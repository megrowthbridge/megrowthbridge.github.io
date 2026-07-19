const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const successBox = document.getElementById("formSuccess");
    const errorBox = document.getElementById("formError");

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = document.getElementById("submitBtn");
        const btnText = submitBtn.querySelector(".btn-text");

        successBox.style.display = "none";
        errorBox.style.display = "none";

        btnText.textContent = "Sending...";
        submitBtn.disabled = true;

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {

                contactForm.reset();

                successBox.style.display = "block";

            } else {

                errorBox.style.display = "block";

            }

        } catch (err) {

            errorBox.style.display = "block";

        }

        btnText.textContent = "Send Message / Inquiry";
        submitBtn.disabled = false;

    });

}
