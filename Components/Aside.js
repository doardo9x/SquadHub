// Encontra a pasta principal do projeto para montar os caminhos do menu.
const pastaPrincipal = new URL("../", document.currentScript.src);

function caminhoDoProjeto(caminho) {
  return new URL(caminho, pastaPrincipal).href;
}

const menu = `
  <button class="btn btn-dark position-fixed top-0 start-0 m-3 z-3" type="button"
    data-bs-toggle="offcanvas" data-bs-target="#asideMenu"
    aria-controls="asideMenu" aria-label="Abrir menu">
    <i class="bi bi-list" aria-hidden="true"></i>
  </button>

  <div class="offcanvas offcanvas-start shared-aside" tabindex="-1"
    id="asideMenu" aria-labelledby="asideMenuLabel">
    <div class="offcanvas-header border-bottom border-secondary">
      <a class="brand d-flex flex-column align-items-center text-decoration-none"
        href="${caminhoDoProjeto("index.html")}">
        <img class="brand-logo p-2" src="${caminhoDoProjeto("img/SquadHub Logo.png")}" alt="SquadHub">
        <span class="brand-caption">Encontre players para jogar</span>
      </a>
      <h2 class="visually-hidden" id="asideMenuLabel">Menu do SquadHub</h2>
      <button type="button" class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas" aria-label="Fechar menu"></button>
    </div>

    <div class="offcanvas-body">
      <nav class="nav nav-pills flex-column gap-2" aria-label="Navegação principal">
        <span class="sidebar-label">NAVEGAÇÃO</span>
        <a class="nav-link" href="${caminhoDoProjeto("pages/Inicio/inicio.html")}">
          <i class="bi bi-house-door" aria-hidden="true"></i>Início
        </a>
        <a class="nav-link" href="${caminhoDoProjeto("pages/Lobby/lobby.html")}">
          <i class="bi bi-controller" aria-hidden="true"></i>Lobby
        </a>
        <a class="nav-link" href="${caminhoDoProjeto("pages/EmBreve/EmBreve.html")}">
          <i class="bi bi-people" aria-hidden="true"></i>
          <span class="d-flex flex-column">Grupos<small class="text-white-50">Em breve</small></span>
        </a>
        <a class="nav-link" href="${caminhoDoProjeto("pages/EmBreve/EmBreve.html")}">
          <i class="bi bi-search" aria-hidden="true"></i>
          <span class="d-flex flex-column">Buscar jogadores<small class="text-white-50">Em breve</small></span>
        </a>
        <a class="nav-link" href="${caminhoDoProjeto("pages/EmBreve/EmBreve.html")}">
          <i class="bi bi-gear" aria-hidden="true"></i>
          <span class="d-flex flex-column">Configurações<small class="text-white-50">Em breve</small></span>
        </a>

        <span class="sidebar-label mt-4">SOBRE O SQUADHUB</span>
        <a class="nav-link" href="${caminhoDoProjeto("pages/ConteudoAdicional/ConteudoAdicional.html")}">
          <i class="bi bi-journal-text" aria-hidden="true"></i>Conteúdo adicional
        </a>
        <a class="nav-link" href="${caminhoDoProjeto("pages/InformacoesTecnicas/InformacoesTecnicas.html")}">
          <i class="bi bi-info-circle" aria-hidden="true"></i>Informações técnicas
        </a>
      </nav>
    </div>
  </div>
`;

const localDoMenu = document.querySelector("#aside-compartilhado");

if (localDoMenu) {
  localDoMenu.innerHTML = menu;

  // Destaca o link da página que está aberta.
  const linksDoMenu = localDoMenu.querySelectorAll(".nav-link");
  const estaNaPaginaEmBreve = window.location.pathname.toLowerCase().includes("/pages/embreve/");

  linksDoMenu.forEach(function (link) {
    if (!estaNaPaginaEmBreve && new URL(link.href).pathname === window.location.pathname) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}
