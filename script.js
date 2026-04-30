 let state = {
    name: false,
    password: false,
    email: false,
    confirm: false
};

 let nameInput = document.getElementById("name");
 nameInput.addEventListener("input", function(){
    let namePattern = /^[a-zA-Z\s]+$/;
    let name = nameInput.value.trim();
    if(!namePattern.test(name)){
        showError(nameInput, "Name must contain only letters and spaces");
        state.name = false;
    } else {
        showSuccess(nameInput);
        state.name = true;
    }
    checkForm();
 });

let emailInput = document.getElementById("email");
emailInput.addEventListener("input", function(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = emailInput.value.trim();
    if(!emailPattern.test(email)){
        showError(emailInput, "Enter valid email");
        state.email = false;
    } else {
        showSuccess(emailInput);
        state.email = true;
    }
    checkForm();
});

let passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function(){
    let password = passwordInput.value.trim();
    if(password.length < 6){
        showError(passwordInput, "Password must be >=6 chars");
        state.password = false;
    } else {
        showSuccess(passwordInput);
        state.password = true;
    }
    confirmInput.dispatchEvent(new Event("input"));
    checkForm();
});


let confirmInput = document.getElementById("confirm");
confirmInput.addEventListener("input", function(){
    let confirm = confirmInput.value.trim();
    let password1 = document.getElementById("password").value.trim();
    if(confirm !== password1){
        showError(confirmInput, "Must be same as password!");
        state.confirm = false;
    } else {
        showSuccess(confirmInput);
        state.confirm = true;
    }
    checkForm();
});

let form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();

        if(state.name && state.password && state.email && state.confirm){
            alert("Form submitted successfully!");
            clearErrors();
                form.reset();
        }

});

function checkForm(){
    let btn = document.getElementById("btn");
    if(state.name && state.password && state.email && state.confirm){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function showError(input, message){
    input.style.border = "2px solid red";

    const error = input.nextElementSibling;
    if(error){
        error.innerText = message;}
}

function showSuccess(input){
    input.style.border = "2px solid green";
    const success = input.nextElementSibling;
    if(success){
        success.innerText = "";
    }
}

function clearErrors(){
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input =>{
        input.style.border = "";
        if(input.nextElementSibling){
            input.nextElementSibling.innerText = "";
        }
    })
}