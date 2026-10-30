// Monta o conteúdo estático e inicializa os controles das trilhas.
const secoesJogos = document.querySelector("#game-sections");
const listaOnline = document.querySelector("#online-players");

secoesJogos.innerHTML = LobbyData.games
  .map((game) => LobbyComponents.gameSection(game, LobbyData.actions.joinLobby))
  .join("");
listaOnline.innerHTML = LobbyData.onlinePlayers
  .map((player) => LobbyComponents.onlinePlayer(player))
  .join("");

document.querySelectorAll(".lobby-carousel").forEach(function (carousel) {
  const track = carousel.querySelector(".lobby-track");
  const buttons = carousel.querySelectorAll("[data-lobby-move]");

  function updateButtons() {
    const limit = track.scrollWidth - track.clientWidth;

    buttons.forEach(function (button) {
      const direction = Number(button.dataset.lobbyMove);
      const disabled = direction < 0
        ? track.scrollLeft <= 1
        : track.scrollLeft >= limit - 1;

      button.disabled = disabled;
      button.setAttribute("aria-disabled", String(disabled));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const direction = Number(button.dataset.lobbyMove);
      track.scrollBy({ left: track.clientWidth * direction, behavior: "smooth" });
    });
  });

  track.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();
});
