// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const passwordConfirmation = document.querySelector("#password-confirm-input");


// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
  firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
  lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
  emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
  password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};
  passwordConfirmation.onkeyup = () => {
  passwordConfirmation.classList.remove("is-valid");
  passwordConfirmation.classList.remove("is-invalid");
};


// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  let isPasswordOk = false;
  let isPasswordconfirmOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
        const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (password.value.length < 6) {
    password.classList.add("is-invalid");
  } else {
    password.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (passwordConfirmation.value !== password.value || passwordConfirmation.value === "") {
    passwordConfirmation.classList.add("is-invalid");
  } else {
    passwordConfirmation.classList.add("is-valid");
    isPasswordconfirmOk = true;


  }
  if (isFirstNameOk && isLastNameOk && isPasswordOk && isPasswordconfirmOk && isEmailOk ) alert("Registered successfully");
};

// add callback function for Reset button.
  resetBtn.onclick = () => {

   
      firstNameInput.classList.remove("is-valid");
      firstNameInput.classList.remove("is-invalid");
      firstNameInput.value = "";
      lastNameInput.classList.remove("is-valid");
      lastNameInput.classList.remove("is-invalid");
      lastNameInput.value = "";
      emailInput.classList.remove("is-valid");
      emailInput.classList.remove("is-invalid");
      emailInput.value = "";
      password.classList.remove("is-valid");
      password.classList.remove("is-invalid");
      password.value = "";
      passwordConfirmation.classList.remove("is-valid");
      passwordConfirmation.classList.remove("is-invalid");
      passwordConfirmation.value = "";
    
  }