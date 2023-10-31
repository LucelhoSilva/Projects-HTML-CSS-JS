const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const navigation = document.querySelector("nav");
const page = document.documentElement;

function abrirMenu() {
  menu.classList.add("showNav");
  content.classList.add("showNav");
  page.classList.add('noOverflow')
  navigation.style.display = "block";
}

function fecharMenu() {
  menu.classList.remove("showNav");
  content.classList.remove("showNav");
  page.classList.remove('noOverflow')
  navigation.style.display = "none";
}

open.addEventListener("click", abrirMenu);
close.addEventListener("click", fecharMenu);
