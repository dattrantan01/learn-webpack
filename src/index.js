import { submitForm } from "./app/app";
import "./index.css";

const formElement = document.getElementById("signin-form");

console.log("dat");

formElement.addEventListener("submit", submitForm);
