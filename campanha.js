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

const numero = document.querySelector(".numero");
const secao = document.querySelector(".doar-numero");

const valorFinal = 5525;
let iniciou = false;

function contador() {
    let valor = 0;

    const intervalo = setInterval(() => {
        valor += 25;

        if (valor >= valorFinal) {
            valor = valorFinal;
            clearInterval(intervalo);
        }

        numero.textContent = valor;
    }, 10);
}

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting && !iniciou) {
            iniciou = true;
            contador();
        }
    });
}, {
    threshold: 0.3
});

observador.observe(secao);