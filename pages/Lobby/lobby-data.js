// Conteúdo demonstrativo separado da estrutura dos componentes.
window.LobbyData = {
  actions: {
    joinLobby: { href: "../EmBreve/EmBreve.html", text: "Em breve" }
  },
  games: [
    {
      id: "fc",
      name: "EA SPORTS FC",
      abbreviation: "FC",
      icon: "bi-controller",
      description: "Monte seu time e entre em campo",
      lobbyCount: 4,
      theme: "fc",
      lobbies: [
        { name: "Rumo ao Elite", players: 4, capacity: 10, category: "Ranqueado", platform: "PC / Console", participants: ["J", "M", "R"] },
        { name: "Casual / Diversão", players: 7, capacity: 10, category: "Casual", platform: "PC / Console", participants: ["A", "L", "C"] },
        { name: "Pro Clubs", players: 3, capacity: 10, category: "Pro Clubs", platform: "Console", participants: ["P", "G", "T"] },
        { name: "Partida entre amigos", players: 5, capacity: 10, category: "Casual", platform: "Console", participants: ["B", "D", "V"] }
      ]
    },
    {
      id: "cs",
      name: "Counter-Strike 2",
      abbreviation: "CS2",
      icon: "bi-crosshair",
      description: "Tática, estratégia e muita ação",
      lobbyCount: 3,
      theme: "cs",
      lobbies: [
        { name: "Competitivo", players: 5, capacity: 10, category: "Ranqueado", platform: "PC", participants: ["N", "F", "R"] },
        { name: "Casual / Diversão", players: 8, capacity: 10, category: "Casual", platform: "PC", participants: ["C", "V", "J"] },
        { name: "Aula / Treino", players: 4, capacity: 10, category: "Treino", platform: "PC", participants: ["G", "H", "M"] }
      ]
    },
    {
      id: "valorant",
      name: "VALORANT",
      abbreviation: "V",
      icon: "bi-lightning-charge-fill",
      description: "Coordenação e habilidade em equipe",
      lobbyCount: 3,
      theme: "valorant",
      lobbies: [
        { name: "Ranked", players: 6, capacity: 10, category: "Ranqueado", platform: "PC", participants: ["A", "M", "V"] },
        { name: "Casual / Diversão", players: 4, capacity: 10, category: "Casual", platform: "PC", participants: ["R", "S", "T"] },
        { name: "Treino e Evolução", players: 3, capacity: 10, category: "Treino", platform: "PC", participants: ["J", "D", "L"] }
      ]
    }
  ],
  onlinePlayers: [
    { name: "zNinja", initial: "Z", status: "Jogando CS2", avatarTheme: "cyan", gameIcon: "bi-crosshair" },
    { name: "Lukz", initial: "L", status: "No lobby - EA FC", avatarTheme: "purple", gameIcon: "bi-controller" },
    { name: "M4thz", initial: "M", status: "Jogando Valorant", avatarTheme: "red", gameIcon: "bi-lightning-charge-fill" },
    { name: "CarolFPS", initial: "C", status: "Online agora", avatarTheme: "green", gameIcon: "bi-person-plus-fill" },
    { name: "iTzGabs", initial: "G", status: "No lobby - CS2", avatarTheme: "orange", gameIcon: "bi-crosshair" }
  ]
};
