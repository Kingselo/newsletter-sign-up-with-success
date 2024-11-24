const btn = document.getElementById('btn');
const inputArea = document.querySelector('.input-area');
const form = document.querySelector('form');
const errorContainer = document.querySelector(".error-container span");
const successMessage = document.querySelector(".success-message")
const content = document.querySelector(".content-one")
const successDisBtn = document.querySelector(".success-message button")
const emailArea = document.querySelector(".email-area");







form.addEventListener('submit',validate  )
successDisBtn.addEventListener("click", dismiss)

function validate(e) {
    e.preventDefault();
    let input = inputArea.value.trim();
    if (input == "") {
        console.log('Please enter your Email')
    }
    let inputchaa = input.split("")
    console.log(inputchaa)
    if(inputchaa.includes("@")) {
        successMessage.style.display = "grid";
        content.style.display = "none";
        emailArea.innerHTML = input;
        errorContainer.classList.remove('errors');
        inputArea.classList.remove("active");

    }else {
        errorContainer.classList.add('errors');
        inputArea.classList.add("active");
        
    }


        
}

function dismiss() {
    successMessage.style.display = "none";
    content.style.display = "flex";
}