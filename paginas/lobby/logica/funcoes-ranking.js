// Cálculos: a pontuação cresce de forma constante a cada vitória.
function calcularPontuacao(vitorias) {
  // Cada vitória vale 100 pontos; todos começam com 50 pontos de base.
  return 100 * vitorias + 50;
}

function gerarRanking(jogadores) {
  // Cria cópias com pontuação, ordena do maior para o menor e atribui
  // posições começando em 1, sem modificar a lista recebida.
  return jogadores
    .map((jogador) => ({
      ...jogador,
      pontos: calcularPontuacao(jogador.vitorias)
    }))
    .sort((a, b) => b.pontos - a.pontos)
    .map((jogador, indice) => ({ ...jogador, posicao: indice + 1 }));
}

window.FUNCOES_RANKING = { calcularPontuacao, gerarRanking };
