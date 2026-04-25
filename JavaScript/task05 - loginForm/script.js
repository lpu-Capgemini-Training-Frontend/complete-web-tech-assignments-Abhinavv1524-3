const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const lengthRule = document.getElementById("length");
const lowerRule = document.getElementById("lower");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const specialRule = document.getElementById("special");

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

function validateUsername() {
  if (username.value.length < 3 || username.value.length > 25) {
    showError(username, "3–25 characters required");
  } else {
    showSuccess(username);
  }
}

function validateEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!pattern.test(email.value)) {
    showError(email, "Invalid email");
  } else {
    showSuccess(email);
  }
}

function validatePassword() {
  const val = password.value;

  toggleRule(lengthRule, val.length >= 8);
  toggleRule(lowerRule, /[a-z]/.test(val));
  toggleRule(upperRule, /[A-Z]/.test(val));
  toggleRule(numberRule, /[0-9]/.test(val));
  toggleRule(specialRule, /[!@#$%^&*]/.test(val));

  if (
    val.length >= 8 &&
    /[a-z]/.test(val) &&
    /[A-Z]/.test(val) &&
    /[0-9]/.test(val) &&
    /[!@#$%^&*]/.test(val)
  ) {
    showSuccess(password);
  } else {
    showError(password, "Password not strong enough");
  }

  validateConfirmPassword();
}

function validateConfirmPassword() {
  if (confirmPassword.value === "") {
    showError(confirmPassword, "Re-enter password");
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
  } else {
    showSuccess(confirmPassword);
  }
}

function toggleRule(element, condition) {
  if (condition) {
    element.classList.add("valid");
    element.innerText = "✔ " + element.innerText.slice(2);
  } else {
    element.classList.remove("valid");
    element.innerText = "❌ " + element.innerText.slice(2);
  }
}

function showError(input, message) {
  input.classList.add("error");
  input.classList.remove("success");
  input.nextElementSibling.innerText = message;
}

function showSuccess(input) {
  input.classList.add("success");
  input.classList.remove("error");
  input.nextElementSibling.innerText = "";
}
