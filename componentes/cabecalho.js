// Cabeçalho compartilhado: identifica a página e mantém um atalho para o início.
const raizProjetoCabecalho = new URL("../", document.currentScript.src);

function criarLinkCabecalho(caminho) {
  return new URL(caminho, raizProjetoCabecalho).href;
}

const htmlCabecalho = `
  <header class="barra-superior d-flex align-items-center justify-content-between gap-2 px-3 px-md-4">
    <div class="d-flex align-items-center gap-2">
      <a class="marca-movel d-xl-none text-decoration-none" href="${criarLinkCabecalho("index.html")}">SquadHub</a>
      <span class="rotulo-caminho-navegacao d-none d-xl-inline">Olá, visitante!</span>
    </div>
  </header>
`;

const pontoMontagemCabecalho = document.querySelector("#ponto-cabecalho");

if (pontoMontagemCabecalho) {
  pontoMontagemCabecalho.innerHTML = htmlCabecalho;
}
