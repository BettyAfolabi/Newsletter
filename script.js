// function showSuccess() {
//   const successMessage = document.getElementById("success");
//   const dismiss = document.getElementById("dismiss");
//   const home = document.getElementById("home");

//   successMessage.style.display = "block";
//   home.style.display = "none";

//   // dismiss.addEventListener("click", function () {
//   //   successMessage.style.display = "none";
//   //   home.style.display = "block";
//   // });
// }

function validateEmail() {
  let email = document.getElementById("email");
  let emailInput = email.value;

  if (emailInput == "") {
    setError("Email is required");
    error.style.color = "red";
    email.style.borderColor = "red";
    return false;
  }

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email_pattern.test(emailInput)) {
    setError("Valid email required");
    return false;
  }

  setError("");
  showDiv("success");
  hideDiv("home");
  return true;
}

function setError(message) {
  let error = document.getElementById("error");
  error.textContent = message;
}

function showDiv(id) {
  let divElement = document.getElementById(id);
  divElement.style.display = "block";
}

function hideDiv(id) {
  let divElement = document.getElementById(id);
  divElement.style.display = "none";
}
function dismissMessage() {
  success.style.display = "none";
  home.style.display = "block";
}
