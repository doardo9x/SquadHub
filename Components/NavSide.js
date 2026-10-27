const pastaDoProjeto = new URL("../", document.currentScript.src);
const endereco = (caminho) => new URL(caminho, pastaDoProjeto).href;

const Header = `
    <header class="container-fluid py-3">
        <nav class="navbar navbar-dark" aria-label="Navega&ccedil;&atilde;o do site">
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#menuLateral" aria-controls="menuLateral" aria-label="Abrir menu">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <div class="offcanvas offcanvas-end squad-menu" tabindex="-1" id="menuLateral" aria-labelledby="menuLateralLabel">
            <div class="offcanvas-header p-4">
                <img src="${endereco("img/squadhublogo.png")}" alt="SquadHub" class="menu-logo">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Fechar menu"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column px-4 pt-2 pb-4">
                <p class="text-uppercase text-secondary fw-bold small mb-3">NAVEGUE</p>
                <nav class="d-grid gap-2" aria-label="Navega&ccedil;&atilde;o principal">
                    <a class="btn menu-nav-link d-flex align-items-center text-start p-3" href="${endereco("index.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
                        <span><strong class="d-block">Home</strong><small class="d-block text-secondary">Página inicial</small></span>
                    </a>
                    <a class="btn menu-nav-link d-flex align-items-center text-start p-3" href="${endereco("pages/InformacoesTecnicas/InformacoesTecnicas.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-8h.01" /></svg>
                        <span><strong class="d-block">Sobre o SquadHub</strong><small class="d-block text-secondary">Conheça o SquadHub</small></span>
                    </a>
                    <a class="btn menu-nav-link d-flex align-items-center text-start p-3" href="${endereco("pages/ConteudoAdicional/ConteudoAdicional.html")}">
                        <svg class="menu-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zM4 5.5v13" /><path d="M8 7h8m-8 4h8" /></svg>
                        <span><strong class="d-block">Conteúdo adicional</strong><small class="d-block text-secondary">Mais sobre o SquadHub</small></span>
                    </a>
                </nav>
                <div class="mt-auto pt-4 border-top border-secondary">
                    <p class="text-secondary small mb-3">Junte-se ao seu próximo squad</p>
                    <a class="btn btn-purple d-flex align-items-center justify-content-center mb-2 p-3" href="${endereco("pages/Cadastro/cadastro.html")}">Criar usuário</a>
                    <a class="btn menu-login-link d-flex align-items-center justify-content-center p-3" href="${endereco("pages/Login/Login.html")}">Entrar / Login</a>
                </div>
                <div class="pt-3 text-secondary small">Encontre sua squad. Jogue junto.</div>
            </div>
        </div>
    </header>
`;

document.querySelector("#header-compartilhado").innerHTML = Header;
