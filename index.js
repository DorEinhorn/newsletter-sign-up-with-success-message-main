const form = document.querySelector("form");
const card_1 = document.querySelector(".container");
const card_2 = document.querySelector(".submit");
const dismissBtn = document.querySelector(".dissmis")
const emailIn = document.getElementById("email");
const submittedEmail = document.querySelector(".submitted-email");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector(".error")


submitBtn.addEventListener("click",submitEmail);

dismissBtn.addEventListener("click", toggleCards);


function toggleCards(){
    card_1.classList.toggle("hide");
    card_2.classList.toggle("hide");
}

// email validation
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  
  function submitEmail(e){
    e.preventDefault();

    if(validateEmail(emailIn.value)){
        submittedEmail.innerHTML = emailIn.value;
        toggleCards();
        emailIn.value = "";
    }
    else{
        error.textContent = 'Invaild E-mail';
        emailIn.classList.add("error-input");
    }
  };