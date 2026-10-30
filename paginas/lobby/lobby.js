// Inicialização: monta jogos e jogadores e conecta os controles das trilhas.
const secoesJogos = document.querySelector("#secoes-jogos");
const listaJogadoresOnline = document.querySelector("#jogadores-online");

// Cada jogo vira uma seção com seus cartões de sala. A ação compartilhada
// define para onde os botões levam (atualmente, para a página "Em breve").
secoesJogos.innerHTML = window.DADOS_LOBBY.jogos
  .map((jogo) => window.COMPONENTES_LOBBY.criarSecaoJogo(jogo, window.DADOS_LOBBY.acoes.entrarNaSala))
  .join("");
listaJogadoresOnline.innerHTML = window.DADOS_LOBBY.jogadoresOnline
  .map((jogador) => window.COMPONENTES_LOBBY.criarJogadorOnline(jogador))
  .join("");

// Cada jogo tem seu próprio carrossel; navegar por um não afeta os demais.
document.querySelectorAll(".carrossel-lobbies").forEach(function (carrossel) {
  const trilha = carrossel.querySelector(".trilha-lobbies");
  const botoes = carrossel.querySelectorAll("[data-mover-lobby]");

  function atualizarBotoes() {
    // Desativa a seta que aponta para fora da área rolável da trilha.
    const limite = trilha.scrollWidth - trilha.clientWidth;

    botoes.forEach(function (botao) {
      const direcao = Number(botao.dataset.moverLobby);
      const desabilitado = direcao < 0
        ? trilha.scrollLeft <= 1
        : trilha.scrollLeft >= limite - 1;

      botao.disabled = desabilitado;
      botao.setAttribute("aria-disabled", String(desabilitado));
    });
  }

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const direcao = Number(botao.dataset.moverLobby);
      // Avança ou volta aproximadamente uma largura visível, suavemente.
      trilha.scrollBy({ left: trilha.clientWidth * direcao, behavior: "smooth" });
    });
  });

  trilha.addEventListener("scroll", atualizarBotoes);
  window.addEventListener("resize", atualizarBotoes);
  atualizarBotoes();
});
