// write your JavaScript here
const emailInput = document.getElementById("email");
const myForm = document.getElementById("subscribeForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");
const submitButton = document.querySelector("newsletter-button"); 

function validateEmail(email) {
    return email.includes('@');
}

emailInput.addEventListener('input', function () {
    const email = this.value;

    if (email.length === 0) {
        this.classList.remove('valid', 'invalid');
        errorMessage.classList.remove('show');
        submitButton.disabled = true;
    } else if (validateEmail(email)){
        this.classList.remove('invalid');
        this.classList.add('valid');
        errorMessage.classList.remove('show');
        submitButton.disabled = false;
    } else{
        this.classList.remove('valid');
        this.classList.add('invalid');
        errorMessage.classList.add('show');
        submitButton.disabled = true;
    }

});

myForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = emailInput.value;

    if (validateEmail(email)) {
        successMessage.style.display = 'block';
        emailInput.value = "";
        console.log('Email submitted:', email);
    }
}
)
