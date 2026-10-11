// Campo de senha
const senha = document.getElementById("senha");

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

// Atualiza a aparência dos requisitos
function verificarRequisitosSenha() {
    requisitos.forEach(requisito => {
        const elemento = document.getElementById(requisito.id);

        // Verifica se a senha cumpre o requisito atual
        const cumprido = requisito.validar(senha.value);

        // Adiciona ou remove a classe conforme o resultado
        elemento.classList.toggle("valido", cumprido);
    });
}

// Verifica os requisitos sempre que o usuário digitar
senha.addEventListener("input", verificarRequisitosSenha);
