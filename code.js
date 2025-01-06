const sup = document.querySelector(".btn1");
const Lgn = document.querySelector(".btn2");
const back = document.querySelector(".btn3");
const opt = document.querySelector(".choice");
const sup_form = document.querySelector(".signup-choice");
const container = document.querySelector(".signup-login");
const head = document.querySelector("h3");
sup_form.style.display = "none";
sup.addEventListener("click",()=>{
    head.innerText="Sign up";
    opt.style.display = "none";
    sup_form.style.display = "block";
    // Trigger the stretching animation
    container.classList.add("expanded");
    // Wait for the animation to complete, then show the form
    setTimeout(() => {
        opt.style.display = "none";
        sup_form.style.display = "block";
    }, 500); // Match the CSS transition duration (0.5s)
});
back.addEventListener("click",()=>{
    sup_form.style.display = "none";
    opt.style.display = "block";
    head.innerText="Sign up Or Login";
    container.classList.remove("expanded");
    // Wait for the shrinking animation, then show the options
    setTimeout(() => {
        opt.style.display = "block";
        head.innerText = "Sign up Or Login";
    }, 500); // Match the CSS transition duration (0.5s
});
