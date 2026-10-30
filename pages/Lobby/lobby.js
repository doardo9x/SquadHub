// Configura as setas dos carrosséis de lobby.
const carrosseis = document.querySelectorAll(".lobby-carousel");

carrosseis.forEach(function (carrossel) {
  const trilha = carrossel.querySelector(".lobby-track");
  const botoes = carrossel.querySelectorAll("[data-lobby-move]");

  function atualizarBotoes() {
    const limite = trilha.scrollWidth - trilha.clientWidth;

    botoes.forEach(function (botao) {
      const direcao = Number(botao.dataset.lobbyMove);
      botao.disabled = direcao < 0
        ? trilha.scrollLeft <= 1
        : trilha.scrollLeft >= limite - 1;
    });
  }

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const direcao = Number(botao.dataset.lobbyMove);
      trilha.scrollBy({
        left: trilha.clientWidth * direcao,
        behavior: "smooth"
      });
    });
  });

  trilha.addEventListener("scroll", atualizarBotoes);
  window.addEventListener("resize", atualizarBotoes);
  atualizarBotoes();
});
