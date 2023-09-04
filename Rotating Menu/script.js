const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

function abrirMenu() {
  menu.classList.add("showNav");
  content.classList.add("showNav");
}

function fecharMenu() {
  menu.classList.remove("showNav");
  content.classList.remove("showNav");
}

open.addEventListener("click", abrirMenu);
close.addEventListener("click", fecharMenu);
