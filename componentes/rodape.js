// Rodapé compartilhado: apresenta a identificação e a mensagem do projeto.
const htmlRodape = `
  <footer class="container-fluid py-5 px-5">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <div class="text-center text-md-start">
        <strong>SquadHub</strong>
        <p class="mb-0 text-secondary">Encontre sua squad. Jogue junto.</p>
      </div>
      <p class="mb-0 text-secondary">Projeto FIAP · 2026</p>
    </div>
  </footer>
`;

const pontoMontagemRodape = document.querySelector("#ponto-rodape");

if (pontoMontagemRodape) {
  pontoMontagemRodape.innerHTML = htmlRodape;
}
