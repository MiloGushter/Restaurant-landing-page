import populateHome from "./modules/homeModule";
import populateMenu from "./modules/menuModule";
import populateContact from "./modules/contactModule";
import "./sass/main.scss";

console.log("hello from index.js");

populateHome();

let navigation = document.querySelectorAll(".nav-item");
const home = navigation[0];
const menu = navigation[1];
const contact = navigation[2];

home.addEventListener("click", populateHome);

menu.addEventListener("click", populateMenu);

contact.addEventListener("click", populateContact);
