// MENU HAMBÚRGUER

const btnHamburger = document.getElementById("btnHamburger");
const btnFecharMenu = document.getElementById("btnFecharMenu");
const menuNav = document.getElementById("menuNav");
const menuOverlay = document.getElementById("menuOverlay");
const linksMenu = menuNav.querySelectorAll("a");

// Abrir menu
function abrirMenu() {
  menuNav.classList.add("aberto");
  menuOverlay.classList.add("aberto");
  document.body.classList.add("menu-aberto");
}

// Fechar menu
function fecharMenu() {
  menuNav.classList.remove("aberto");
  menuOverlay.classList.remove("aberto");
  document.body.classList.remove("menu-aberto");
}

// Clique no hambúrguer
btnHamburger.addEventListener("click", abrirMenu);

// Clique no X
btnFecharMenu.addEventListener("click", fecharMenu);

// Clique no fundo escuro
menuOverlay.addEventListener("click", fecharMenu);

// Fecha o menu ao clicar em algum link
linksMenu.forEach((link) => {
  link.addEventListener("click", fecharMenu);
});