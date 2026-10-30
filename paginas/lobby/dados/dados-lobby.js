// Conteúdo demonstrativo separado da estrutura dos componentes.
window.DADOS_LOBBY = {
  // Texto e destino comuns aos botões de todas as salas.
  acoes: {
    entrarNaSala: { link: "../em-breve/em-breve.html", texto: "Em breve" }
  },
  // Cada jogo agrupa os dados do cabeçalho e as salas do seu carrossel.
  jogos: [
    {
      identificador: "fc",
      nome: "EA SPORTS FC",
      sigla: "FC",
      icone: "bi-controller",
      descricao: "Monte seu time e entre em campo",
      quantidadeLobbies: 4,
      tema: "fc",
      salas: [
        { nome: "Rumo ao Elite", jogadores: 4, capacidade: 10, categoria: "Ranqueado", plataforma: "PC / Console", participantes: ["J", "M", "R"] },
        { nome: "Casual / Diversão", jogadores: 7, capacidade: 10, categoria: "Casual", plataforma: "PC / Console", participantes: ["A", "L", "C"] },
        { nome: "Pro Clubs", jogadores: 3, capacidade: 10, categoria: "Pro Clubs", plataforma: "Console", participantes: ["P", "G", "T"] },
        { nome: "Partida entre amigos", jogadores: 5, capacidade: 10, categoria: "Casual", plataforma: "Console", participantes: ["B", "D", "V"] }
      ]
    },
    {
      identificador: "cs",
      nome: "Counter-Strike 2",
      sigla: "CS2",
      icone: "bi-crosshair",
      descricao: "Tática, estratégia e muita ação",
      quantidadeLobbies: 3,
      tema: "cs",
      salas: [
        { nome: "Competitivo", jogadores: 5, capacidade: 10, categoria: "Ranqueado", plataforma: "PC", participantes: ["N", "F", "R"] },
        { nome: "Casual / Diversão", jogadores: 8, capacidade: 10, categoria: "Casual", plataforma: "PC", participantes: ["C", "V", "J"] },
        { nome: "Aula / Treino", jogadores: 4, capacidade: 10, categoria: "Treino", plataforma: "PC", participantes: ["G", "H", "M"] }
      ]
    },
    {
      identificador: "valorant",
      nome: "VALORANT",
      sigla: "V",
      icone: "bi-lightning-charge-fill",
      descricao: "Coordenação e habilidade em equipe",
      quantidadeLobbies: 3,
      tema: "valorant",
      salas: [
        { nome: "Ranked", jogadores: 6, capacidade: 10, categoria: "Ranqueado", plataforma: "PC", participantes: ["A", "M", "V"] },
        { nome: "Casual / Diversão", jogadores: 4, capacidade: 10, categoria: "Casual", plataforma: "PC", participantes: ["R", "S", "T"] },
        { nome: "Treino e Evolução", jogadores: 3, capacidade: 10, categoria: "Treino", plataforma: "PC", participantes: ["J", "D", "L"] }
      ]
    }
  ],
  // Campos usados para desenhar avatar, status e ícone de cada pessoa.
  jogadoresOnline: [
    { nome: "zNinja", inicial: "Z", status: "Jogando CS2", temaAvatar: "cyan", iconeJogo: "bi-crosshair" },
    { nome: "Lukz", inicial: "L", status: "No lobby - EA FC", temaAvatar: "purple", iconeJogo: "bi-controller" },
    { nome: "M4thz", inicial: "M", status: "Jogando Valorant", temaAvatar: "red", iconeJogo: "bi-lightning-charge-fill" },
    { nome: "CarolFPS", inicial: "C", status: "Online agora", temaAvatar: "green", iconeJogo: "bi-person-plus-fill" },
    { nome: "iTzGabs", inicial: "G", status: "No lobby - CS2", temaAvatar: "orange", iconeJogo: "bi-crosshair" }
  ]
};
