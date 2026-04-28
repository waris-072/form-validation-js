document.getElementById("btn").addEventListener("click", function(e){
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let password = document.getElementById("password").value.trim();
            let email = document.getElementById("email").value.trim();
            let errorMsg = document.getElementById("msg");
            errorMsg.innerText = "";
            
            
            if(name == "" || password == "" || email ==  ""){
                errorMsg.innerText = "All fields are required!"
                errorMsg.style.color = "red";
                return;
            }

            if(password.length < 6){
                errorMsg.innerText = "Password must be 6+ long!";
                errorMsg.style.color = "red";
                return;
            }
            if(!email.includes("@") || !email.includes(".")){
                errorMsg.innerText = "Enter the valid email address!"
                errorMsg.style.color = "red";
                return;
            }

            errorMsg.innerText = "form submitted!"
            errorMsg.style.color = "green"
            return;
        });