const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const modal = document.getElementById("modal");

// =====================================
// ETAPAS
// =====================================

const etapas = document.querySelectorAll(".etapa");

// Função para trocar de etapa

function mostrarEtapa(id) {
  etapas.forEach((etapa) => {
    etapa.classList.remove("ativa");
  });

  const etapaSelecionada = document.getElementById(id);

  if (etapaSelecionada) {
    etapaSelecionada.classList.add("ativa");
  }
}

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

// =====================================
// FLUXO "QUERO DOAR" (Formulário de Doação -> Confirmação -> Obrigado)
// =====================================

const btnDoarProduto = document.getElementById("btnDoarProduto");
const btnVoltarEscolha = document.getElementById("btnVoltarEscolha");
const btnVoltarForm = document.getElementById("btnVoltarForm");
const formDoacao = document.getElementById("formDoacao");
const btnConfirmarDoacao = document.getElementById("btnConfirmarDoacao");
const confirmacaoForm = document.getElementById("confirmacaoForm");
const confirmacaoObrigadoDoacao = document.getElementById("confirmacaoObrigadoDoacao");

// Volta a última etapa para o estado de formulário (usado ao fechar/reabrir o modal)
function resetarEtapaConfirmacao() {
  confirmacaoForm.style.display = "";
  confirmacaoObrigadoDoacao.classList.remove("ativa");
}

// Abre a etapa do formulário de doação
btnDoarProduto.addEventListener("click", () => {
  mostrarEtapa("etapaFormDoacao");
});

// Voltar da etapa de formulário para a escolha
btnVoltarEscolha.addEventListener("click", () => {
  mostrarEtapa("etapaEscolha");
});

// Voltar da etapa de confirmação para o formulário
btnVoltarForm.addEventListener("click", () => {
  mostrarEtapa("etapaFormDoacao");
});

// Envio do formulário (CONTINUAR) -> vai para a etapa de confirmação
formDoacao.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mostrarEtapa("etapaConfirmacao");
});

// Confirmar doação -> exibe "Obrigado pela Doação" na própria última etapa
// e fecha o modal sozinho após 5 segundos, sem precisar clicar no X
btnConfirmarDoacao.addEventListener("click", () => {
  confirmacaoForm.style.display = "none";
  confirmacaoObrigadoDoacao.classList.add("ativa");

  temporizadorObrigado = setTimeout(() => {
    fecharModalCompleto();
  }, 5000);
});

// =====================================
// STEPPER DE QUANTIDADE
// =====================================

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

// =====================================
// FLUXO "ESCOLHER PRESENTE"
// Formulário de Compra -> Confirmação -> Obrigado
// =====================================

const btnComprarProduto = document.getElementById("btnComprarProduto");
const btnVoltarCompra = document.getElementById("btnVoltarCompra");
const btnVoltarFormCompra = document.getElementById("btnVoltarFormCompra");
const formCompra = document.getElementById("formCompra");
const btnConfirmarCompra = document.getElementById("btnConfirmarCompra");
const confirmacaoFormCompra = document.getElementById("confirmacaoFormCompra");
const confirmacaoObrigadoCompra = document.getElementById("confirmacaoObrigadoCompra");

// -------------------------------------
// ESCOLHER PRESENTE
// -------------------------------------

btnComprarProduto.addEventListener("click", () => {
  mostrarEtapa("etapaFormCompra");
});

// -------------------------------------
// VOLTAR PARA ESCOLHA
// -------------------------------------

btnVoltarCompra.addEventListener("click", () => {
  mostrarEtapa("etapaEscolha");
});

// -------------------------------------
// FORMULÁRIO DE COMPRA
// CONTINUAR -> CONFIRMAÇÃO
// -------------------------------------

formCompra.addEventListener("submit", (evento) => {
  evento.preventDefault();

  mostrarEtapa("etapaConfirmacaoCompra");
});

// -------------------------------------
// VOLTAR PARA FORMULÁRIO
// -------------------------------------

btnVoltarFormCompra.addEventListener("click", () => {
  mostrarEtapa("etapaFormCompra");
});


function resetarEtapaConfirmacao() {
  confirmacaoForm.style.display = "";
  confirmacaoObrigadoCompra.classList.remove("ativa");
}


btnConfirmarCompra.addEventListener("click", () => {
  confirmacaoFormCompra.style.display = "none";
  confirmacaoObrigadoCompra.classList.add("ativa");

  temporizadorObrigado = setTimeout(() => {
    fecharModalCompleto();
  }, 5000);
});