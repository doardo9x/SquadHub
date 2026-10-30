// Inicialização: calcula e exibe a classificação da comunidade.
const listaRanking = document.querySelector("#ranking-comunidade");

// Se a área de ranking existir nesta página, calcula e insere a classificação.
if (listaRanking) {
  const jogadoresOrdenados = window.FUNCOES_RANKING.gerarRanking(window.JOGADORES_RANKING);
  listaRanking.innerHTML = window.COMPONENTES_RANKING.renderizarRanking(jogadoresOrdenados);
}
