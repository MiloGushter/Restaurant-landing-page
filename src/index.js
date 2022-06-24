import { printTime } from "./modules/newFunction";
import "./sass/main.scss";
import "./img/nav-logo.svg";
console.log("hello from index.js");
const button = document.createElement("button");
button.textContent = "Click me and check console!";
button.addEventListener("click", printTime);
document.body.appendChild(button);
