import { submitForm } from "./app/app";
import "./index.css";

const formElement = document.getElementById("signin-form");

formElement.addEventListener("submit", submitForm);
