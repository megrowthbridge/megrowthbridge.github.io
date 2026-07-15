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

const trigger = document.getElementById("videoTrigger");

const modal = document.getElementById("videoModal");

const closeBtn = document.getElementById("videoClose");

const frame = document.getElementById("youtubeFrame");

const videoURL =
"https://www.youtube-nocookie.com/embed/fD0xMgvViqg?autoplay=1";

if(trigger){

    trigger.addEventListener("click",()=>{

        modal.style.display="flex";

        frame.src=videoURL;

    });

}

function closeVideo(){

    modal.style.display="none";

    frame.src="";

}

closeBtn.addEventListener("click",closeVideo);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeVideo();

    }

});
