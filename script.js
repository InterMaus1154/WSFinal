

const menuButton = document.querySelector(".Hamburger-menu");
const navigationElement = document.querySelector("nav");
menuButton.addEventListener("click", ()=>{
    navigationElement.classList.toggle("Menu-visible");
});