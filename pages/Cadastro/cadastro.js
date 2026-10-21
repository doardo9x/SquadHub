// Campos do formulário
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const feedbackSenhas = document.getElementById("feedback-senhas");
const requisitosSenha = document.getElementById("requisitos-senha");

// Lista de requisitos e as regras usadas para verificá-los
const listaRequisitos = 
[
    { id: "req-tamanho", minimo: 8 },
    { id: "req-maiuscula", padrao: /[A-Z]/ },
    { id: "req-minuscula", padrao: /[a-z]/ },
    { id: "req-numero", padrao: /[0-9]/ },
    { id: "req-especial", padrao: /[^A-Za-z0-9]/ }
];

// Atualiza a lista de requisitos conforme a senha é digitada
function verificarRequisitosSenha() {
    const valor = senha.value;

    for (let i = 0; i < listaRequisitos.length; i++) {
        const requisito = listaRequisitos[i];
        const elemento = document.getElementById(requisito.id);
        let cumprido;

        if (requisito.minimo) {
            cumprido = valor.length >= requisito.minimo;
        } else {
            cumprido = requisito.padrao.test(valor);
        }

        elemento.classList.toggle("valido", cumprido);
    }
}

// Compara a senha com a confirmação
function verificarSenhas() {
    const valorSenha = senha.value;
    const valorConfirmacao = confirmarSenha.value;

    confirmarSenha.setCustomValidity("");
    confirmarSenha.classList.remove("senha-invalida", "senha-valida");
    feedbackSenhas.classList.remove("invalido", "valido");
    feedbackSenhas.textContent = "";

    if (valorConfirmacao === "") {
        return;
    }

    if (valorSenha === "") {
        feedbackSenhas.textContent = "Digite a senha acima primeiro.";
        feedbackSenhas.classList.add("invalido");
        confirmarSenha.setCustomValidity("Digite a senha original primeiro.");
        confirmarSenha.classList.add("senha-invalida");
        return;
    }

    if (valorSenha !== valorConfirmacao) {
        feedbackSenhas.textContent = "✕ As senhas não coincidem.";
        feedbackSenhas.classList.add("invalido");
        confirmarSenha.setCustomValidity("As senhas não coincidem.");
        confirmarSenha.classList.add("senha-invalida");
        return;
    }

    feedbackSenhas.textContent = "✓ As senhas coincidem.";
    feedbackSenhas.classList.add("valido");
    confirmarSenha.classList.add("senha-valida");
}

// Mostra ou esconde o campo de senha
function alternarSenha(campo, botao) {
    const mostrar = campo.type === "password";
    const iconeOlho = botao.querySelector(".icone-olho");
    const iconeOlhoFechado = botao.querySelector(".icone-olho-fechado");

    if (mostrar) {
        campo.type = "text";
        botao.setAttribute("aria-label", "Ocultar senha");
        botao.setAttribute("aria-pressed", "true");
        iconeOlho.classList.add("d-none");
        iconeOlhoFechado.classList.remove("d-none");
    } else {
        campo.type = "password";
        botao.setAttribute("aria-label", "Exibir senha");
        botao.setAttribute("aria-pressed", "false");
        iconeOlho.classList.remove("d-none");
        iconeOlhoFechado.classList.add("d-none");
    }
}

// Liga cada botão de olho ao campo correspondente
const botaoSenha = document.querySelector('[data-toggle-password="senha"]');
const botaoConfirmarSenha = document.querySelector('[data-toggle-password="confirmar-senha"]');

botaoSenha.addEventListener("click", function () {
    alternarSenha(senha, botaoSenha);
});

botaoConfirmarSenha.addEventListener("click", function () {
    alternarSenha(confirmarSenha, botaoConfirmarSenha);
});

// Atualiza os requisitos e a confirmação enquanto a pessoa digita
senha.addEventListener("input", function () {
    if (senha.value.length > 0) {
        requisitosSenha.classList.add("visivel");
    } else {
        requisitosSenha.classList.remove("visivel");
    }

    verificarRequisitosSenha();
    verificarSenhas();
});

confirmarSenha.addEventListener("input", verificarSenhas);
