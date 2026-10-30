// Apresentação: transforma a classificação em linhas visuais.
window.COMPONENTES_RANKING = {
  renderizarRanking(jogadores) {
    return jogadores.map((jogador) => `
      <li class="item-ranking d-flex align-items-center gap-3 py-3">
        <span class="posicao-ranking d-grid rounded-circle fw-semibold" aria-label="Posição ${jogador.posicao}">${jogador.posicao}</span>
        <div class="flex-grow-1">
          <h3 class="h6 mb-1">${jogador.nome}</h3>
          <p class="small text-white-50 mb-0">${jogador.vitorias} ${jogador.vitorias === 1 ? "vitória" : "vitórias"}</p>
        </div>
        <strong class="pontuacao-ranking text-nowrap">${jogador.pontos.toLocaleString("pt-BR")} pts</strong>
      </li>`).join("");
  }
};
