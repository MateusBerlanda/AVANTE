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
  btnHamburger.setAttribute("aria-expanded", "true");
}

// Fechar menu
function fecharMenu() {
  menuNav.classList.remove("aberto");
  menuOverlay.classList.remove("aberto");
  document.body.classList.remove("menu-aberto");
  btnHamburger.setAttribute("aria-expanded", "false");
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

// Fecha o menu ao apertar ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharMenu();
  }
});

// MODAL

const abrirModal = document.getElementById("abrirModal");
const abrirModal2 = document.getElementById("btnMenuDoar");
const abrirModal3 = document.getElementById("btnMenuDoarHamburger");
const fecharModal = document.getElementById("fecharModal");
const modal = document.getElementById("modal");

// =====================================
// ABRIR MODAL
// =====================================

abrirModal.addEventListener("click", () => {
  modal.classList.add("ativo");
  mostrarEtapa("etapaEscolha");
});

abrirModal2.addEventListener("click", () => {
  modal.classList.add("ativo");
  mostrarEtapa("etapaEscolha");
});

abrirModal3.addEventListener("click", () => {
  modal.classList.add("ativo");
  mostrarEtapa("etapaEscolha");
});

// =====================================
// FECHAR MODAL
// =====================================

let temporizadorObrigado = null;

function fecharModalCompleto() {
  clearTimeout(temporizadorObrigado);
  modal.classList.add("fechando");

  setTimeout(() => {
    modal.classList.remove("ativo");
    modal.classList.remove("fechando");
    mostrarEtapa("etapaEscolha");
    resetarEtapaConfirmacao();
  }, 500);
}

fecharModal.addEventListener("click", fecharModalCompleto);

const listaBrinquedos = document.getElementById("listaBrinquedos");
const btnVerMaisBrinquedos = document.getElementById("btnVerMaisBrinquedos");

if (btnVerMaisBrinquedos) {
  btnVerMaisBrinquedos.addEventListener("click", () => {
    listaBrinquedos.classList.toggle("mostrar-todos");
    btnVerMaisBrinquedos.firstChild.textContent =
      listaBrinquedos.classList.contains("mostrar-todos")
        ? "VER MENOS "
        : "VER MAIS ";
  });
}
