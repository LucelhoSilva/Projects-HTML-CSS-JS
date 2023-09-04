const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const navigation = document.querySelector("nav");

function abrirMenu() {
  menu.classList.add("showNav");
  content.classList.add("showNav");
  navigation.style.display = "block";
}

function fecharMenu() {
  menu.classList.remove("showNav");
  content.classList.remove("showNav");
  navigation.style.display = "none";
}

open.addEventListener("click", abrirMenu);
close.addEventListener("click", fecharMenu);
