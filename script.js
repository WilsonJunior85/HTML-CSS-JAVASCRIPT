
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");



form.addEventListener("submit", (event) =>{
event.preventDefault();

formChek();

});


email.addEventListener("blur", (e)=>{
    checkInputEmail();
    
});

username.addEventListener("blur", (e) =>{
    checkInputUsername();
});

password.addEventListener("blur", ()=>{
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", (e) =>{
    checkInputPasswordConfirmation();
});






function formChek(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation()

    const formItems = form.querySelectorAll(".form-content");
    const validando = [...formItems].every((e)=>{
        return e.className === "form-content";
    })

    if(validando){
        alert("Cadastrado com sucesso");
    }
  
}

function checkInputUsername(){
const userNameValue = username.value;
    if(userNameValue === ""){
        errorInput(username,"Favor colocar um nome válido");
    }else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
    errorInput(email, " Favor digitar um email válido");
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}


function checkInputPassword(){
    const passwordValue = password.value;
    if(!passwordValue){
        errorInput(password, " Favor digite uma senha válida");
    }else if(passwordValue.length < 4){
      errorInput(password, "Sua senha conter mais de 4 caracteres");
    }
    else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, " Favor digite uma senha válida");
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "Sua senha de ser a mesma digitada acima");
    }
    else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}






// Função universal para erros
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;

    formItem.className = "form-content error";
}