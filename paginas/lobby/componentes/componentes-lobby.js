// Componentes: montam cartões, seções de jogos e linhas de jogadores.
window.COMPONENTES_LOBBY = {
  criarCartaoSala(sala, jogo, acao) {
    const avatares = sala.participantes
      .map((inicial) => `<span aria-hidden="true">${inicial}</span>`)
      .join("");

    return `
      <article class="cartao-lobby item-lobby h-100" data-tema="${jogo.tema}">
        <div class="conteudo-cartao">
          <span class="sigla-jogo">${jogo.sigla}</span>
          <div class="informacoes-lobby">
            <h4>${sala.nome}</h4>
            <p>${sala.jogadores}/${sala.capacidade} jogadores</p>
            <div class="linha-etiquetas"><span>${sala.categoria}</span><span>${sala.plataforma}</span></div>
          </div>
          <div class="rodape-cartao">
            <div class="avatares-participantes" aria-label="Participantes do lobby">${avatares}</div>
            <a class="btn btn-sm botao-roxo" href="${acao.link}">${acao.texto} <i class="bi bi-arrow-right-short" aria-hidden="true"></i></a>
          </div>
        </div>
      </article>`;
  },

  criarSecaoJogo(jogo, acao) {
    const idTitulo = `${jogo.identificador}-titulo`;
    const idTrilha = `${jogo.identificador}-trilha-lobbies`;
    const cartoesSalas = jogo.salas
      .map((sala) => this.criarCartaoSala(sala, jogo, acao))
      .join("");

    return `
      <section id="${jogo.identificador}" class="secao-jogo mb-4" aria-labelledby="${idTitulo}">
        <div class="cabecalho-jogo d-flex align-items-center gap-3 mb-3">
          <span class="marca-jogo tema-${jogo.tema}" aria-hidden="true"><i class="bi ${jogo.icone}"></i></span>
          <div><h2 id="${idTitulo}" class="h5 mb-0">${jogo.nome}</h2><p class="small mb-0">${jogo.descricao}</p></div>
          <span class="quantidade-lobbies ms-auto">${jogo.quantidadeLobbies} lobbies</span>
        </div>
        <div class="carrossel-lobbies position-relative" data-jogo="${jogo.identificador}">
          <button class="carousel-control-prev" type="button" data-mover-lobby="-1" aria-controls="${idTrilha}" aria-label="Lobbies anteriores de ${jogo.nome}">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-mover-lobby="1" aria-controls="${idTrilha}" aria-label="Próximos lobbies de ${jogo.nome}">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          <div id="${idTrilha}" class="trilha-lobbies" tabindex="0" aria-label="Lobbies de ${jogo.nome}">${cartoesSalas}</div>
        </div>
      </section>`;
  },

  criarJogadorOnline(jogador) {
    return `
      <li>
        <div class="avatar-jogador avatar-${jogador.temaAvatar}" aria-hidden="true">${jogador.inicial}</div>
        <div class="jogador-online"><strong>${jogador.nome}</strong><span>${jogador.status}</span></div>
        <i class="bi ${jogador.iconeJogo} icone-jogo-jogador" aria-hidden="true"></i>
      </li>`;
  }
};
