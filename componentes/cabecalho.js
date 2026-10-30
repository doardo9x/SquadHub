// Cabeçalho compartilhado: reúne a navegação principal e os acessos de conta.
const raizProjetoCabecalho = new URL("../", document.currentScript.src);

function criarLinkCabecalho(caminho) {
  return new URL(caminho, raizProjetoCabecalho).href;
}

const htmlCabecalho = `
  <header class="barra-superior d-flex align-items-center justify-content-between gap-2 px-3 px-md-4">
    <div class="d-flex align-items-center gap-2">
      <a class="marca-movel d-xl-none text-decoration-none" href="${criarLinkCabecalho("index.html")}">SquadHub</a>
      <span class="rotulo-caminho-navegacao d-none d-xl-inline">Encontre seu próximo squad</span>
    </div>
    <nav class="d-flex align-items-center gap-3" aria-label="Acesso a conta">
      <a class="btn btn-sm botao-roxo d-inline-flex align-items-center justify-content-center gap-2 px-3"
        href="${criarLinkCabecalho("paginas/login/login.html")}">
        <i class="bi bi-box-arrow-in-right" aria-hidden="true"></i><span>Entrar</span>
      </a>
      <a class="link-texto text-nowrap" href="${criarLinkCabecalho("paginas/cadastro/cadastro.html")}">Criar conta</a>
    </nav>
  </header>
`;

const pontoMontagemCabecalho = document.querySelector("#ponto-cabecalho");

if (pontoMontagemCabecalho) {
  pontoMontagemCabecalho.innerHTML = htmlCabecalho;
}
