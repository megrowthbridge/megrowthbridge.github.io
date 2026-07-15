document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
       CONTACT FORM
    ========================================================== */

    const form = document.getElementById("contactForm");

    if (form) {

        const submitBtn = document.getElementById("submitBtn");
        const btnText = submitBtn?.querySelector(".btn-text");

        const success = document.getElementById("formSuccess");
        const error = document.getElementById("formError");

        if (submitBtn && btnText && success && error) {

            const defaultButtonText = btnText.textContent;

            form.addEventListener("submit", async (e) => {

                e.preventDefault();

                success.style.display = "none";
                error.style.display = "none";

                submitBtn.disabled = true;
                submitBtn.classList.add("loading");
                btnText.textContent = "Sending...";

                try {

                    const response = await fetch(form.action, {
                        method: "POST",
                        body: new FormData(form),
                        headers: {
                            Accept: "application/json"
                        }
                    });

                    if (response.ok) {

                        form.reset();
                        success.style.display = "block";

                    } else {

                        error.style.display = "block";

                    }

                } catch (err) {

                    console.error("Contact form error:", err);
                    error.style.display = "block";

                } finally {

                    submitBtn.disabled = false;
                    submitBtn.classList.remove("loading");
                    btnText.textContent = defaultButtonText;

                }

            });

        }

    }

    /* ==========================================================
       VIDEO MODAL
    ========================================================== */

    const trigger = document.getElementById("videoTrigger");
    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("videoClose");
    const frame = document.getElementById("youtubeFrame");

    const videoURL =
        "https://www.youtube-nocookie.com/embed/fD0xMgvViqg?autoplay=1";

    if (trigger && modal && closeBtn && frame) {

        function openVideo() {

            modal.classList.add("is-open");
            modal.style.display = "flex";

            modal.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

            frame.src = videoURL;

        }

        function closeVideo() {

            modal.classList.remove("is-open");
            modal.style.display = "none";

            modal.setAttribute("aria-hidden", "true");

            document.body.style.overflow = "";

            frame.src = "";

        }

        trigger.addEventListener("click", openVideo);

        closeBtn.addEventListener("click", closeVideo);

        modal.addEventListener("click", (e) => {

            if (e.target === modal) {

                closeVideo();

            }

        });

        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape" && modal.classList.contains("is-open")) {

                closeVideo();

            }

        });

    }

});
