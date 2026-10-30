// Funções de apresentação dos cartões e das seções de jogos.
window.LobbyComponents = {
  lobbyCard(lobby, game, action) {
    const avatars = lobby.participants.map((initial) => `<span aria-hidden="true">${initial}</span>`).join("");

    return `
      <article class="lobby-card lobby-slide h-100" data-theme="${game.theme}">
        <div class="card-content">
          <span class="game-chip">${game.abbreviation}</span>
          <div class="lobby-info">
            <h4>${lobby.name}</h4>
            <p>${lobby.players}/${lobby.capacity} jogadores</p>
            <div class="tag-row"><span>${lobby.category}</span><span>${lobby.platform}</span></div>
          </div>
          <div class="card-bottom">
            <div class="mini-avatars" aria-label="Participantes do lobby">${avatars}</div>
            <a class="btn btn-sm btn-purple" href="${action.href}">${action.text} <i class="bi bi-arrow-right-short" aria-hidden="true"></i></a>
          </div>
        </div>
      </article>`;
  },

  gameSection(game, action) {
    const headingId = `${game.id}-heading`;
    const trackId = `${game.id}-lobby-track`;
    const lobbyCards = game.lobbies.map((lobby) => this.lobbyCard(lobby, game, action)).join("");

    return `
      <section id="${game.id}" class="game-section mb-4" aria-labelledby="${headingId}">
        <div class="game-heading d-flex align-items-center gap-3 mb-3">
          <span class="game-mark game-${game.theme}" aria-hidden="true"><i class="bi ${game.icon}"></i></span>
          <div><h2 id="${headingId}" class="h5 mb-0">${game.name}</h2><p class="small mb-0">${game.description}</p></div>
          <span class="game-count ms-auto">${game.lobbyCount} lobbies</span>
        </div>
        <div class="lobby-carousel position-relative" data-game="${game.id}">
          <button class="carousel-control-prev" type="button" data-lobby-move="-1" aria-controls="${trackId}" aria-label="Lobbies anteriores de ${game.name}">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-lobby-move="1" aria-controls="${trackId}" aria-label="Próximos lobbies de ${game.name}">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          <div id="${trackId}" class="lobby-track" tabindex="0" aria-label="Lobbies de ${game.name}">${lobbyCards}</div>
        </div>
      </section>`;
  },

  onlinePlayer(player) {
    return `
      <li>
        <div class="avatar avatar-${player.avatarTheme}" aria-hidden="true">${player.initial}</div>
        <div class="online-person"><strong>${player.name}</strong><span>${player.status}</span></div>
        <i class="bi ${player.gameIcon} player-game-icon" aria-hidden="true"></i>
      </li>`;
  }
};
