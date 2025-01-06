const sup = document.querySelector(".btn1");
const Lgn = document.querySelector(".btn2");
const back = document.querySelector(".btn3");
const opt = document.querySelector(".choice");
const sup_form = document.querySelector(".signup-choice");
const container = document.querySelector(".signup-login");
const head = document.querySelector("h3");
const inp = document.querySelectorAll("input");
const Lgn_form=document.querySelector(".login-choice");
sup_form.style.display = "none";
Lgn_form.style.display="none";
sup.addEventListener("click",()=>{
    Lgn_form.style.display = "none";
    head.innerText="Sign up";
    opt.style.display = "none";
    sup_form.style.display = "block";
    // Trigger the stretching animation
    container.classList.add("expanded1");
    // Wait for the animation to complete, then show the form
    setTimeout(() => {
        opt.style.display = "none";
        sup_form.style.display = "block";
    }, 1000); // Match the CSS transition duration (1.5s)
});
back.addEventListener("click",(ev)=>{
    ev.preventDefault();
    for(let i of inp)
    {
        if(i.value!="")
            i.value="";
    }
    sup_form.style.display = "none";
    opt.style.display = "block";
    head.innerText="Sign up Or Login";
    container.classList.remove("expanded1");
    // Wait for the shrinking animation, then show the options
    setTimeout(() => {
        opt.style.display = "block";
        head.innerText = "Sign up Or Login";
    }, 1000); // Match the CSS transition duration (1.5s)
});
Lgn.addEventListener("click",()=>{
    container.classList.add("expanded2");
    setTimeout(() => {
        opt.style.display = "none";
        sup_form.style.display ="none"
        Lgn_form.style.display = "block";
    }, 10);
    head.innerText="Login with your email";
    

});

/*Lgn_form.style.display = "block";
    // Trigger the stretching animation
    container.classList.add("expanded");
    // Wait for the animation to complete, then show the form
    // Match the CSS transition duration (1.5s) */