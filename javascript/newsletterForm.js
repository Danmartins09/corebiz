// ------ NEWSLETTER FORM -----
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const signupForm = document.querySelector(".signupForm");
const signupTitle = document.querySelector(".signupTitle");
const success = document.querySelector(".success");

function sendData(e) {
  e.preventDefault();
  console.log(inputEmail.value);
  console.log(inputName.value);

  axios
    .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      email: inputEmail.value,
      name: inputName.value,
    })
    .then((response) => {
      const status = response.status;
      if (status == 200) {
        signupForm.style.display = "none";
        signupTitle.style.display = "none";
        success.style.display = "flex";
        signupForm.reset();
      }
    })
    .catch((error) => console.log(error));
}

function nameValidation() {
  let text;
  if (inputName.value == "") {
    text = "Preencha com seu nome completo";
    inputName.style.border = "1px solid #D7182A";
  } else {
    text = "";
    inputName.style.border = "none";
  }
  document.getElementById("inputNameAlert").innerHTML = text;
}

function emailValidation() {
  let text;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value == "") {
    text = "Preencha com um e-mail válido";
    inputEmail.style.border = "1px solid #D7182A";
  } else if (!inputEmail.value.match(regexEmail)) {
    text = "Sintaxe e-mail inválida";
    inputEmail.style.border = "1px solid #D7182A";
  } else {
    text = "";
    inputEmail.style.border = "none";
  }
  document.getElementById("inputEmailAlert").innerHTML = text;
}

function newRegister() {
  signupForm.style.display = "flex";
  signupTitle.style.display = "flex";
  success.style.display = "none";
}

const btnSend = document.querySelector(".btnSend");
const btnSuccess = document.querySelector(".btnSuccess");
btnSend.addEventListener("click", sendData);
btnSend.addEventListener("click", nameValidation);
btnSend.addEventListener("click", emailValidation);
btnSuccess.addEventListener("click", newRegister);
