const raizHeader = new URL("../", document.currentScript.src);
const linkHeader = (caminho) => new URL(caminho, raizHeader).href;

const cabecalho = `
  <header class="topbar d-flex align-items-center justify-content-between gap-2 px-3 px-md-4">
    <div class="d-flex align-items-center gap-2">
      <a class="mobile-brand d-xl-none text-decoration-none" href="${linkHeader("index.html")}">SquadHub</a>
      <span class="breadcrumb-label d-none d-xl-inline">Encontre seu próximo squad</span>
    </div>
    <nav class="d-flex align-items-center gap-3" aria-label="Acesso a conta">
      <a class="btn btn-sm btn-purple d-inline-flex align-items-center justify-content-center gap-2 px-3"
        href="${linkHeader("pages/Login/Login.html")}">
        <i class="bi bi-box-arrow-in-right" aria-hidden="true"></i><span>Entrar</span>
      </a>
      <a class="text-link text-nowrap" href="${linkHeader("pages/Cadastro/cadastro.html")}">Criar conta</a>
    </nav>
  </header>
`;

const cabecalhoContainer = document.querySelector("#header-compartilhado");

if (cabecalhoContainer) {
  cabecalhoContainer.innerHTML = cabecalho;
}
