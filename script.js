document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector(".btn-text");

    const success = document.getElementById("formSuccess");
    const error = document.getElementById("formError");

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        success.style.display = "none";
        error.style.display = "none";

        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

        btnText.textContent = "Sending...";

        try{

            const response = await fetch(form.action,{
                method:"POST",
                body:new FormData(form),
                headers:{
                    Accept:"application/json"
                }
            });

            if(response.ok){

                form.reset();

                success.style.display="block";

            }else{

                error.style.display="block";

            }

        }catch{

            error.style.display="block";

        }

        submitBtn.classList.remove("loading");
        submitBtn.disabled=false;

        btnText.textContent="Send Message / Inquiry";

    });

});
