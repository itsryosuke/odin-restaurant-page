import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadHome();

const homeButton = document.querySelector("nav>button:first-child");
homeButton.addEventListener("click", () => {loadHome()});

const menuButton = document.querySelector("nav>button:nth-child(2)");
menuButton.addEventListener("click", () => {loadMenu()});

const contactButton = document.querySelector("nav>button:nth-child(3)");
contactButton.addEventListener("click", () => {loadContact()});