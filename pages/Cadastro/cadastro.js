// Campos de senha
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const feedbackSenhas = document.getElementById("feedback-senhas");

// Lista dos requisitos e suas regras
const requisitos = [
    {
        id: "req-tamanho",
        validar: valor => valor.length >= 8
    },
    {
        id: "req-maiuscula",
        validar: valor => /[A-Z]/.test(valor)
    },
    {
        id: "req-minuscula",
        validar: valor => /[a-z]/.test(valor)
    },
    {
        id: "req-numero",
        validar: valor => /[0-9]/.test(valor)
    },
    {
        id: "req-especial",
        validar: valor => /[^A-Za-z0-9]/.test(valor)
    }
];

// Atualiza a aparência dos requisitos da senha
function verificarRequisitosSenha() {
    requisitos.forEach(requisito => {
        const elemento = document.getElementById(requisito.id);
        const cumprido = requisito.validar(senha.value);

        elemento.classList.toggle("valido", cumprido);
    });
}

// Confere se as senhas são iguais
function verificarSenhas() {
    const valorSenha = senha.value;
    const valorConfirmacao = confirmarSenha.value;

    // Limpa o estado anterior
    confirmarSenha.setCustomValidity("");
    confirmarSenha.classList.remove("senha-invalida", "senha-valida");
    feedbackSenhas.classList.remove("invalido", "valido");
    feedbackSenhas.textContent = "";

    // Não mostra avisos enquanto a confirmação estiver vazia
    if (!valorConfirmacao) {
        return;
    }

    // Não compara enquanto a senha original estiver vazia
    if (!valorSenha) {
        feedbackSenhas.textContent = "Digite a senha acima primeiro.";
        feedbackSenhas.classList.add("invalido");
        confirmarSenha.setCustomValidity("Digite a senha original primeiro.");
        confirmarSenha.classList.add("senha-invalida");
        return;
    }

    // Senhas diferentes
    if (valorSenha !== valorConfirmacao) {
        feedbackSenhas.textContent = "✕ As senhas não coincidem.";
        feedbackSenhas.classList.add("invalido");
        confirmarSenha.setCustomValidity("As senhas não coincidem.");
        confirmarSenha.classList.add("senha-invalida");
        return;
    }

    // Senhas iguais
    feedbackSenhas.textContent = "✓ As senhas coincidem.";
    feedbackSenhas.classList.add("valido");
    confirmarSenha.classList.add("senha-valida");
}

// Exibe ou oculta a senha ao clicar no olho
document.querySelectorAll("[data-toggle-password]").forEach(botao => {
    botao.addEventListener("click", () => {
        const campoId = botao.dataset.togglePassword;
        const campo = document.getElementById(campoId);

        const exibirSenha = campo.type === "password";

        campo.type = exibirSenha ? "text" : "password";

        botao.setAttribute("aria-pressed", String(exibirSenha));
        botao.setAttribute(
            "aria-label",
            exibirSenha ? "Ocultar senha" : "Exibir senha"
        );

        const iconeOlho = botao.querySelector(".icone-olho");
        const iconeOlhoFechado = botao.querySelector(".icone-olho-fechado");

        iconeOlho.classList.toggle("d-none", exibirSenha);
        iconeOlhoFechado.classList.toggle("d-none", !exibirSenha);
    });
});

// Valida os requisitos ao digitar a senha
senha.addEventListener("input", () => {
    verificarRequisitosSenha();
    verificarSenhas();
});

// Compara as senhas ao digitar a confirmação
confirmarSenha.addEventListener("input", verificarSenhas);