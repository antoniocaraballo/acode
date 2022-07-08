const nav = document.querySelector(".nav")

const ham = document.querySelector(".ham-menu")

function openMenu() {
  nav.classList.toggle("openMenu");
  ham.classList.toggle("ham-menu-open");
  document.querySelector("#body").classList.toggle("body-lock");
}