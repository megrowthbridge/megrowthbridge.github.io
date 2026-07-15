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

        if (
            submitBtn &&
            btnText &&
            success &&
            error
        ) {

            form.addEventListener("submit", async function (e) {

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

                } catch {

                    error.style.display = "block";

                }

                submitBtn.disabled = false;
                submitBtn.classList.remove("loading");
                btnText.textContent = "Send Message / Inquiry";

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

    if (
        trigger &&
        modal &&
        closeBtn &&
        frame
    ) {

        function openVideo() {

            modal.style.display = "flex";
            document.body.style.overflow = "hidden";

            frame.src = videoURL;

        }

        function closeVideo() {

            modal.style.display = "none";
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

            if (
                e.key === "Escape" &&
                modal.style.display === "flex"
            ) {

                closeVideo();

            }

        });

    }

});
