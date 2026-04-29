let form = document.getElementById("form");
form.addEventListener("submit", function(e){
            e.preventDefault();

            let nameInput = document.getElementById("name");
            let name = nameInput.value.trim();
            let passwordInput = document.getElementById("password");
            let password = passwordInput.value.trim();
            let emailInput = document.getElementById("email");
            let email = emailInput.value.trim();

            let errorMsg = document.getElementById("msg");
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isValid = true;
            
            clearErrors();
            
            if(name == ""){
               showError(nameInput,"Name is required");
               isValid = false;
            }

            if(password.length < 6){
                showError(passwordInput, "Password must be 6+chars");
                isValid = false; 
            }
            if(!emailPattern.test(email)){
                showError(emailInput,"Enter valid email");
                isValid = false;
            }

            if(isValid){
            errorMsg.innerText = "form submitted!";
            errorMsg.style.color = "white";
            errorMsg.style.textShadow = "0 1px 2px green";
            form.reset();
            }
        });

        function showError(input, message){
                input.style.border = "2px solid red";

                const error = input.nextElementSibling;
                if(error){
                    error.innerText = message;}
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