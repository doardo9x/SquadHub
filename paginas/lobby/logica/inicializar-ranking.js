// Inicialização: calcula e exibe a classificação da comunidade.
const listaRanking = document.querySelector("#ranking-comunidade");

if (listaRanking) {
  const jogadoresOrdenados = window.FUNCOES_RANKING.gerarRanking(window.JOGADORES_RANKING);
  listaRanking.innerHTML = window.COMPONENTES_RANKING.renderizarRanking(jogadoresOrdenados);
}
