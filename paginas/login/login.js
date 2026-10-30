// Dados demonstrativos para o acesso local.
const emailCorreto = "admin@squadhub.com.br";
const senhaCorreta = "SquadHub123!";

// Inicializacao do formulario de acesso.
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "../../index.html";
    } else {
        alert("Usuário ou senha incorreta.");
    }
});
