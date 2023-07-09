//NAVBAR
let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-icon");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.remove("active");
};

//Window on scroll
window.onscroll = () => {
  menu.classList.remove("menu-icon");
  navbar.classList.remove("active");
};
