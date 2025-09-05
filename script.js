// write your JavaScript here
const email = document.getElementById("email");
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setcustomValidity("Still expecting an email address!");
    } else {
        email.setcustomValidity("");
    }
});

const button = document.querySelector(".newsletter-button");
const emailInput = document.querySelector("#email");

button.addEventListener("click", function(){
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        message.textContent = "Email is required.";
        message.stylecolor = "red";
    } else if
        (!emailValue.includes("@") || !emailValue.includes(".")) {
            message.textcontent = "Please enter a valid email address.";
            message.style.color = "red";
        } else{
            message.textContent = "Thanks for subscribing!";
            message.style.color = "green";
            emailInput.value = "";
        }
});
