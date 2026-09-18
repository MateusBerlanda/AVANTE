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

fecharModal.addEventListener("click", () => {
  modal.classList.add("fechando");

  setTimeout(() => {
    modal.classList.remove("ativo");
    modal.classList.remove("fechando");
  }, 500);
});

// =====================================
// BOTÕES DA PRIMEIRA ETAPA
// =====================================

const btnDoarProduto = document.getElementById("btnDoarProduto");

const btnComprarProduto = document.getElementById("btnComprarProduto");

btnDoarProduto.addEventListener("click", () => {
  mostrarEtapa("etapaDoar");
});

btnComprarProduto.addEventListener("click", () => {
  mostrarEtapa("etapaComprar");
});

// =====================================
// QUANTIDADE - DOAÇÃO
// =====================================

let quantidadeDoar = 1;

const quantidadeDoarElemento = document.getElementById("quantidadeDoar");

document.getElementById("maisDoar").addEventListener("click", () => {
  quantidadeDoar++;

  quantidadeDoarElemento.textContent = quantidadeDoar;
});

document.getElementById("menosDoar").addEventListener("click", () => {
  if (quantidadeDoar > 1) {
    quantidadeDoar--;
  }

  quantidadeDoarElemento.textContent = quantidadeDoar;
});

// =====================================
// QUANTIDADE - COMPRA
// =====================================

let quantidadeComprar = 1;

const quantidadeComprarElemento = document.getElementById("quantidadeComprar");

document.getElementById("maisComprar").addEventListener("click", () => {
  quantidadeComprar++;

  quantidadeComprarElemento.textContent = quantidadeComprar;
});

document.getElementById("menosComprar").addEventListener("click", () => {
  if (quantidadeComprar > 1) {
    quantidadeComprar--;
  }

  quantidadeComprarElemento.textContent = quantidadeComprar;
});

// =====================================
// FORMULÁRIO DE DOAÇÃO
// =====================================

const formDoacao = document.getElementById("formDoacao");

formDoacao.addEventListener("submit", (event) => {
  event.preventDefault();

  const produto = document.getElementById("produto").value;

  const quantidade = quantidadeDoar;

  // Preencher resumo

  document.getElementById("resumoTipo").textContent = "Doação de produto";

  document.getElementById("resumoProduto").textContent = produto;

  document.getElementById("resumoQuantidade").textContent = quantidade;

  // Esconder valor

  document.getElementById("linhaValor").style.display = "none";

  // Ir para resumo

  mostrarEtapa("etapaResumo");
});

// =====================================
// FORMULÁRIO DE COMPRA
// =====================================

const formCompra = document.getElementById("formCompra");

formCompra.addEventListener("submit", (event) => {
  event.preventDefault();

  const produtoSelecionado = document.querySelector(
    'input[name="produtoCompra"]:checked',
  );

  // Segurança caso nenhum produto tenha sido escolhido

  if (!produtoSelecionado) {
    alert("Escolha um produto para continuar.");

    return;
  }

  const produto = produtoSelecionado.value;

  const preco = parseFloat(produtoSelecionado.dataset.preco);

  const quantidade = quantidadeComprar;

  const valorTotal = preco * quantidade;

  // Preencher resumo

  document.getElementById("resumoTipo").textContent = "Compra para doação";

  document.getElementById("resumoProduto").textContent = produto;

  document.getElementById("resumoQuantidade").textContent = quantidade;

  document.getElementById("resumoValor").textContent =
    "R$ " + valorTotal.toFixed(2).replace(".", ",");

  // Mostrar valor

  document.getElementById("linhaValor").style.display = "flex";

  // Ir para resumo

  mostrarEtapa("etapaResumo");
});

// =====================================
// CONFIRMAR DOAÇÃO
// =====================================

const confirmarDoacao = document.getElementById("confirmarDoacao");

confirmarDoacao.addEventListener("click", () => {
  mostrarEtapa("etapaSucesso");
});

// =====================================
// VOLTAR PARA O INÍCIO
// =====================================

const voltarInicio = document.getElementById("voltarInicio");

voltarInicio.addEventListener("click", () => {
  modal.classList.remove("ativo");

  mostrarEtapa("etapaEscolha");
});
