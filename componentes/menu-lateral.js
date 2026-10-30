// Navegação: os mesmos itens aparecem no menu móvel e na barra lateral do Lobby.
const raizProjetoMenu = new URL("../", document.currentScript.src);
const pontoMontagemMenu = document.querySelector("#ponto-menu-lateral");
const paginaLobby = Boolean(window.CONFIGURACAO_MENU_LOBBY);

function criarCaminhoProjeto(caminho) {
  return new URL(caminho, raizProjetoMenu).href;
}

const gruposNavegacao = [
  {
    titulo: "NAVEGAÇÃO",
    itens: [
      { icone: "bi-house-door", texto: "Início", caminho: "paginas/inicio/inicio.html" },
      { icone: "bi-controller", texto: "Lobby", caminho: "paginas/lobby/lobby.html" },
      { icone: "bi-people", texto: "Grupos", complemento: "Em breve", caminho: "paginas/em-breve/em-breve.html" },
      { icone: "bi-search", texto: "Buscar jogadores", complemento: "Em breve", caminho: "paginas/em-breve/em-breve.html" },
      { icone: "bi-gear", texto: "Configurações", complemento: "Em breve", caminho: "paginas/em-breve/em-breve.html" }
    ]
  },
  {
    titulo: "SOBRE O SQUADHUB",
    itens: [
      { icone: "bi-journal-text", texto: "Conteúdo adicional", caminho: "paginas/conteudo-adicional/conteudo-adicional.html" },
      { icone: "bi-info-circle", texto: "Informações técnicas", caminho: "paginas/informacoes-tecnicas/informacoes-tecnicas.html" }
    ]
  }
];

function criarLinksNavegacao() {
  return gruposNavegacao.map((grupo, indice) => `
    <span class="rotulo-menu${indice ? " mt-4" : " mt-2"}">${grupo.titulo}</span>
    ${grupo.itens.map((item) => `
      <a class="nav-link" href="${criarCaminhoProjeto(item.caminho)}">
        <i class="bi ${item.icone}" aria-hidden="true"></i>
        ${item.complemento
          ? `<span class="d-flex flex-column">${item.texto}<small class="text-white-50">${item.complemento}</small></span>`
          : item.texto}
      </a>`).join("")}`).join("");
}

function criarMarca() {
  return `
    <a class="marca d-flex flex-column align-items-center text-decoration-none" href="${criarCaminhoProjeto("index.html")}">
      <img class="logo-marca p-2" src="${criarCaminhoProjeto("imagens/logo-squadhub.png")}" alt="SquadHub">
    </a>`;
}

// Acesso à conta: os mesmos links ficam no rodapé de cada versão do menu.
function criarAreaAutenticacao() {
  return `
    <div class="area-autenticacao flex-shrink-0">
      <p class="rotulo-menu mb-2">CADASTRO</p>
      <a class="btn botao-autenticacao-principal d-flex align-items-center justify-content-center gap-2 px-3 py-2 mb-2"
        href="${criarCaminhoProjeto("paginas/cadastro/cadastro.html")}">
        <i class="bi bi-person-plus" aria-hidden="true"></i>
        <span>Criar conta</span>
      </a>
      <a class="btn botao-autenticacao-secundario d-flex align-items-center justify-content-center gap-2 px-3 py-2"
        href="${criarCaminhoProjeto("paginas/login/login.html")}">
        <i class="bi bi-box-arrow-in-right" aria-hidden="true"></i>
        <span>Entrar</span>
      </a>
    </div>`;
}

function criarAreaNavegacao() {
  return `
    <div class="menu-navegacao flex-grow-1">
      <nav class="nav nav-pills flex-column gap-2" aria-label="Navegação principal">
        ${criarLinksNavegacao()}
      </nav>
    </div>`;
}

// Montagem: inclui o menu fixo apenas na página Lobby e preserva o menu móvel nas demais.
if (pontoMontagemMenu) {
  if (paginaLobby) document.body.classList.add("menu-lateral-fixo");

  pontoMontagemMenu.innerHTML = `
    ${paginaLobby ? `
      <aside class="menu-lateral-lobby d-none d-xl-flex flex-column p-2">
        ${criarMarca()}
        ${criarAreaNavegacao()}
        ${criarAreaAutenticacao()}
      </aside>` : ""}

    <button class="btn btn-dark position-fixed top-0 start-0 m-3 z-3 ${paginaLobby ? "d-xl-none" : ""}" type="button"
      data-bs-toggle="offcanvas" data-bs-target="#menu-lateral"
      aria-controls="menu-lateral" aria-label="Abrir menu">
      <i class="bi bi-list" aria-hidden="true"></i>
    </button>

    <div class="offcanvas offcanvas-start menu-lateral-compartilhado" tabindex="-1"
      id="menu-lateral" aria-labelledby="rotulo-menu-lateral">
      <div class="offcanvas-header border-bottom border-secondary">
        ${criarMarca()}
        <h2 class="visually-hidden" id="rotulo-menu-lateral">Menu do SquadHub</h2>
        <button type="button" class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas" aria-label="Fechar menu"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column px-4 pt-2 pb-4">
        ${criarAreaNavegacao()}
        ${criarAreaAutenticacao()}
      </div>
    </div>`;

  // Destaca a página atual; destinos compartilhados de "Em breve" não recebem destaque.
  const linksMenu = pontoMontagemMenu.querySelectorAll(".nav-link");
  const paginaEmBreve = window.location.pathname.toLowerCase().includes("/paginas/em-breve/");

  linksMenu.forEach(function (link) {
    if (!paginaEmBreve && new URL(link.href).pathname === window.location.pathname) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}
