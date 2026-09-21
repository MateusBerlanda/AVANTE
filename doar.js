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
const fecharModal = document.getElementById("fecharModal");
const modal = document.getElementById("modal");


// =====================================
// ABRIR MODAL
// =====================================

abrirModal.addEventListener("click", () => {
  modal.classList.add("ativo");

  mostrarEtapa("etapaEscolha");
});

// =====================================
// FECHAR MODAL
// =====================================

let temporizadorObrigado = null;

// Fecha o modal e devolve tudo ao estado inicial (usado pelo X e pelo temporizador)
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

// MAIS E MENOS

const qtdMenos = document.getElementById("qtdMenos");
const qtdMais = document.getElementById("qtdMais");
const qtdValor = document.getElementById("qtdValor");

qtdMenos.addEventListener("click", () => {
  const valorAtual = parseInt(qtdValor.value, 10);
  if (valorAtual > 1) {
    qtdValor.value = valorAtual - 1;
  }
});

qtdMais.addEventListener("click", () => {
  const valorAtual = parseInt(qtdValor.value, 10);
  qtdValor.value = valorAtual + 1;
});

// =====================================
// UPLOAD DE FOTO (DROPZONE)
// =====================================

const fotoProduto = document.getElementById("fotoProduto");
const dropzoneTexto = document.getElementById("dropzoneTexto");

fotoProduto.addEventListener("change", () => {
  if (fotoProduto.files.length > 0) {
    dropzoneTexto.textContent = fotoProduto.files[0].name;
  } else {
    dropzoneTexto.textContent = "+ Adicionar foto";
  }
});