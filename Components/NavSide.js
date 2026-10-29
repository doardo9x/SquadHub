const pastaDoProjeto = new URL("../", document.currentScript.src);
const endereco = (caminho) => new URL(caminho, pastaDoProjeto).href;

const Header = `
    <header class="container-fluid py-3">
        <nav class="navbar navbar-dark" aria-label="Navegação do site">
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#menuLateral" aria-controls="menuLateral" aria-label="Abrir menu">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <div class="offcanvas offcanvas-end squad-menu" tabindex="-1" id="menuLateral" aria-labelledby="menuLateralLabel">
            <div class="offcanvas-header menu-header px-4 py-3">
                <div class="menu-brand d-flex align-items-center gap-2">
                    <img src="${endereco("img/squadhublogo.png")}" alt="SquadHub" class="menu-brand-logo">
                    <h2 class="visually-hidden" id="menuLateralLabel">Menu principal</h2>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Fechar menu"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column px-3 pt-3 pb-3">
                <p class="menu-intro">O que você procura?</p>
                <p class="menu-heading">NAVEGAÇÃO</p>
                <nav class="d-grid gap-2" aria-label="Navegação principal">
                    <a class="btn menu-nav-link d-flex align-items-center p-2" data-page="home" href="${endereco("index.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
                        <span>Home</span>
                    </a>
                    <a class="btn menu-nav-link d-flex align-items-center p-2" data-page="lobby" href="${endereco("pages/Lobby/lobby.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 8.5h11a4 4 0 0 1 3.8 5.2l-.8 2.6a2 2 0 0 1-3.2 1l-2.2-1.8h-6l-2.2 1.8a2 2 0 0 1-3.2-1l-.8-2.6a4 4 0 0 1 3.6-5.2Z"/><path d="M8 11v4m-2-2h4m7-1h.01M18 14h.01"/></svg>
                        <span>Lobby</span>
                    </a>
                </nav>

                <p class="menu-heading menu-heading-secondary">SOBRE O SQUADHUB</p>
                <nav class="d-grid gap-2" aria-label="Informações do SquadHub">
                    <a class="btn menu-nav-link d-flex align-items-center p-2" data-page="about" href="${endereco("pages/InformacoesTecnicas/InformacoesTecnicas.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg>
                        <span>Informações técnicas</span>
                    </a>
                    <a class="btn menu-nav-link d-flex align-items-center p-2" data-page="content" href="${endereco("pages/ConteudoAdicional/ConteudoAdicional.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zM4 5.5v13"/><path d="M8 7h8m-8 4h8"/></svg>
                        <span>Conteúdo adicional</span>
                    </a>
                </nav>

                <div class="menu-account mt-auto pt-3">
                    <a class="btn btn-purple w-100 mb-2" href="${endereco("pages/Cadastro/cadastro.html")}">Criar usuário</a>
                    <a class="btn menu-login-link w-100" href="${endereco("pages/Login/Login.html")}">Entrar / Login</a>
                </div>
            </div>
        </div>
    </header>
`;

document.querySelector("#header-compartilhado").innerHTML = Header;

const caminhoAtual = window.location.pathname.toLowerCase();
const paginaAtual = caminhoAtual.endsWith("index.html") || caminhoAtual.endsWith("/")
    ? "home"
    : caminhoAtual.includes("/lobby/") ? "lobby"
    : caminhoAtual.includes("/informacoestecnicas/") ? "about"
    : caminhoAtual.includes("/conteudoadicional/") ? "content" : "";

if (paginaAtual) {
    const linkAtual = document.querySelector(`[data-page="${paginaAtual}"]`);
    linkAtual?.classList.add("active");
    linkAtual?.setAttribute("aria-current", "page");
}

const indicadorCarregamento = document.createElement("div");
indicadorCarregamento.className = "menu-page-loader";
indicadorCarregamento.setAttribute("aria-hidden", "true");
indicadorCarregamento.innerHTML = '<div class="menu-page-loader-status" role="status"><span class="menu-page-loader-spinner" aria-hidden="true"></span><span>Carregando...</span></div>';
document.body.append(indicadorCarregamento);

document.addEventListener("click", (event) => {
    const link = event.target.closest(".squad-menu a[href]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const destino = new URL(link.href, window.location.href);
    if (destino.origin !== window.location.origin) return;

    event.preventDefault();
    indicadorCarregamento.classList.add("is-visible");
    indicadorCarregamento.setAttribute("aria-hidden", "false");
    window.setTimeout(() => window.location.assign(destino.href), 140);
});

window.addEventListener("pageshow", () => {
    indicadorCarregamento.classList.remove("is-visible");
    indicadorCarregamento.setAttribute("aria-hidden", "true");
});
