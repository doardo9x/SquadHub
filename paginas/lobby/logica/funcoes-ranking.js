// Cálculos: a pontuação cresce de forma constante a cada vitória.
function calcularPontuacao(vitorias) {
  return 100 * vitorias + 50;
}

function gerarRanking(jogadores) {
  return jogadores
    .map((jogador) => ({
      ...jogador,
      pontos: calcularPontuacao(jogador.vitorias)
    }))
    .sort((a, b) => b.pontos - a.pontos)
    .map((jogador, indice) => ({ ...jogador, posicao: indice + 1 }));
}

window.FUNCOES_RANKING = { calcularPontuacao, gerarRanking };
