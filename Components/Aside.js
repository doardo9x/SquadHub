const asideRoot = new URL("../", document.currentScript.src);
const asideLink = (path) => new URL(path, asideRoot).href;

const sidebarLinks = `
  <span class="sidebar-label">NAVEGAÇÃO</span>
  <a class="nav-link" data-page="inicio" href="${asideLink("pages/Inicio/inicio.html")}">
    <i class="bi bi-house-door" aria-hidden="true"></i>Início
  </a>
  <a class="nav-link" data-page="lobby" href="${asideLink("pages/Lobby/lobby.html")}">
    <i class="bi bi-controller" aria-hidden="true"></i>Lobby
  </a>
  <a class="nav-link" href="${asideLink("pages/EmBreve/EmBreve.html")}">
    <i class="bi bi-people align-self-start mt-1" aria-hidden="true"></i>
    <span class="d-flex flex-column">Grupos<small class="text-white-50">Em breve</small></span>
  </a>
  <a class="nav-link" href="${asideLink("pages/EmBreve/EmBreve.html")}">
    <i class="bi bi-search align-self-start mt-1" aria-hidden="true"></i>
    <span class="d-flex flex-column">Buscar jogadores<small class="text-white-50">Em breve</small></span>
  </a>
  <a class="nav-link" href="${asideLink("pages/EmBreve/EmBreve.html")}">
    <i class="bi bi-gear align-self-start mt-1" aria-hidden="true"></i>
    <span class="d-flex flex-column">Configurações<small class="text-white-50">Em breve</small></span>
  </a>
  <span class="sidebar-label mt-4">SOBRE O SQUADHUB</span>
  <a class="nav-link" data-page="content" href="${asideLink("pages/ConteudoAdicional/ConteudoAdicional.html")}">
    <i class="bi bi-journal-text" aria-hidden="true"></i>Conteúdo adicional
  </a>
  <a class="nav-link" data-page="technical" href="${asideLink("pages/InformacoesTecnicas/InformacoesTecnicas.html")}">
    <i class="bi bi-info-circle" aria-hidden="true"></i>Informações técnicas
  </a>
`;

const sharedAside = `
  <div class="offcanvas offcanvas-start shared-aside" tabindex="-1" id="asideMenu" aria-labelledby="asideMenuLabel">
    <div class="offcanvas-header border-bottom border-secondary">
      <a class="brand d-flex flex-column align-items-center text-decoration-none" href="${asideLink("index.html")}">
        <img class="brand-logo p-2" src="${asideLink("img/SquadHub Logo.png")}" alt="SquadHub">
        <span class="brand-caption">Encontre players para jogar</span>
      </a>
      <h2 class="visually-hidden" id="asideMenuLabel">Menu do SquadHub</h2>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Fechar menu"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <nav class="nav nav-pills flex-column gap-2" aria-label="Navegação principal">
        ${sidebarLinks}
      </nav>
    </div>
  </div>
`;

const fixedSidebar = `
  <aside class="sidebar d-none d-xl-flex flex-column p-2">
    <a class="brand d-flex flex-column align-items-center text-decoration-none mb-4" href="${asideLink("index.html")}">
      <img class="brand-logo p-2" src="${asideLink("img/SquadHub Logo.png")}" alt="SquadHub">
      <span class="brand-caption">Encontre players para jogar</span>
    </a>
    <nav class="nav nav-pills flex-column gap-2" aria-label="Navegação principal">
      ${sidebarLinks}
    </nav>
  </aside>
`;

const asideToggle = `
  <button class="btn btn-dark position-fixed top-0 start-0 m-3 z-3" type="button" data-aside-toggle
    data-bs-toggle="offcanvas" data-bs-target="#asideMenu" aria-controls="asideMenu" aria-label="Abrir menu">
    <i class="bi bi-list" aria-hidden="true"></i>
  </button>
`;

const asideContainer = document.querySelector("#aside-compartilhado");

if (asideContainer) {
  const path = window.location.pathname.toLowerCase();
  const isLobbyPage = path.includes("/pages/lobby/");
  const toggleAlreadyExists = Boolean(document.querySelector("[data-aside-toggle]"));
  asideContainer.innerHTML = `${isLobbyPage ? fixedSidebar : ""}${toggleAlreadyExists ? "" : asideToggle}${sharedAside}`;

  document.body.classList.toggle("has-fixed-aside", isLobbyPage);
  const activePage = path.includes("/pages/inicio/") ? "inicio"
    : path.includes("/pages/lobby/") ? "lobby"
    : path.includes("/pages/conteudoadicional/") ? "content"
    : path.includes("/pages/informacoestecnicas/") ? "technical"
    : "";

  if (activePage) {
    asideContainer.querySelectorAll(`[data-page="${activePage}"]`).forEach((link) => {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    });
  }
}
