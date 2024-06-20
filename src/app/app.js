import { sum } from "./utils/sum";

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

export function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  if (validateEmail(email) && validatePassword(password)) {
    alert("Sign in successful!", sum(4, 5));
    // You can add more actions here, like sending the data to a server
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  return true;
}
