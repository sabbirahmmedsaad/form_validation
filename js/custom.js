// get element form html;

var userName = document.getElementById("userName");
var nameError = document.getElementById("nameError");

var userEmail = document.getElementById("userEmail");
var emailError = document.getElementById("emailError");

var pass = document.getElementById("pass");
var passError = document.getElementById("passError");

var rePass = document.getElementById("rePass");
var rePassError = document.getElementById("rePassError");


// create a function for submit button;
function subm(){
    //user name error
    if(userName.value == ""){
        userName.style.borderColor = "#d22222";
        userName.focus();
        nameError.innerHTML = "Please enter your name first";
        return false;
    }

    //user email error
    if(userEmail.value == ""){
        userEmail.style.borderColor = "#d22222";
        userEmail.focus();
        emailError.innerHTML = "Please enter your email first";
        return false;
    }

    //pass error
    if(pass.value == ""){
        pass.style.borderColor = "#d22222";
        pass.focus();
        passError.innerHTML = "Please enter your password";
        return false;
    }

    if(pass.value.length <= 5){
        pass.style.borderColor = "#d22222";
        pass.focus();
        passError.innerHTML = "password must be 6 letters";
        return false;
    }

    //rePass error
    if(rePass.value == ""){
        rePass.style.borderColor = "#d22222";
        rePass.focus();
        rePassError.innerHTML = "Please confirm your password";
        return false;
    }

    if(rePass.value != pass.value){
        rePass.style.borderColor = "#d22222";
        rePass.focus();
        rePassError.innerHTML = "passwords did not match";
        return false;
    }

}


// create a function for remove error
function errorRemove(){
    //user name remove error
    if(userName.value != ""){
        userName.style.borderColor = "#dddddd";
        nameError.innerHTML = ""; 
    }

    //user email remove error
    if(userEmail.value != ""){
        userEmail.style.borderColor = "#dddddd";
        emailError.innerHTML = ""; 
    }

    //pass remove error
    if(pass.value != ""){
        pass.style.borderColor = "#dddddd";
        passError.innerHTML = ""; 
    }

    //rePass remove error
    if(rePass.value != ""){
        rePass.style.borderColor = "#dddddd";
        rePassError.innerHTML = ""; 
    }
}

userName.addEventListener('blur', errorRemove);
userEmail.addEventListener('blur', errorRemove);
pass.addEventListener('blur', errorRemove);
rePass.addEventListener('blur', errorRemove);


// modal

var trigger =document.getElementById("trigger");
var modal =document.getElementById("modal");
var closeModal =document.getElementById("closeModal");


trigger.addEventListener("click",function(){
    modal.style.display = "flex";
});

closeModal.addEventListener("click",function(){
    modal.style.display = "none";
});
