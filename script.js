function validateEmail() {
  let email = document.getElementById("email");
  let emailInput = email.value;
  document.getElementById("displayEmail").textContent = emailInput;

  if (emailInput == "") {
    setError("Email is required");
    error.style.color = "red";
    email.style.borderColor = "red";
    emailInput.style.color = "red";
    return false;
  }

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email_pattern.test(emailInput)) {
    setError("Valid email required");
    error.style.color = "red";
    email.style.borderColor = "red";
    emailInput.style.color = "red";
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
  home.style.display = "flex";
  document.getElementById("email").value = "";
}
