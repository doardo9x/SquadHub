// Canvas e estado das estrelas.
const canvas = document.querySelector("#ceu-estrelado");
const contexto = canvas.getContext("2d");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
let largura = 0;
let altura = 0;
let estrelas = [];
let quadro = null;

// Atualiza as estrelas e redesenha o céu.
function animarEstrelas() {
  quadro = null;
  contexto.clearRect(0, 0, largura, altura);

  estrelas.forEach((estrela) => {
    if (!movimentoReduzido.matches) {
      estrela.x += estrela.velocidadeX;
      estrela.y += estrela.velocidadeY;
      if (estrela.x < 0) estrela.x = largura;
      if (estrela.x > largura) estrela.x = 0;
      if (estrela.y < 0) estrela.y = altura;
      if (estrela.y > altura) estrela.y = 0;

      estrela.brilho += estrela.variacao * estrela.sentido;
      if (estrela.brilho > 0.9 || estrela.brilho < 0.2) estrela.sentido *= -1;
    }

    contexto.beginPath();
    contexto.arc(estrela.x, estrela.y, estrela.tamanho, 0, Math.PI * 2);
    contexto.fillStyle = `rgba(255, 255, 255, ${estrela.brilho})`;
    contexto.fill();
  });

  if (!document.hidden && !movimentoReduzido.matches) {
    quadro = window.requestAnimationFrame(animarEstrelas);
  }
}

// Ajusta a resolução e a quantidade de estrelas ao tamanho da tela.
function redimensionarCanvas() {
  const escala = Math.min(window.devicePixelRatio || 1, 2);
  largura = window.innerWidth;
  altura = window.innerHeight;
  canvas.width = largura * escala;
  canvas.height = altura * escala;
  contexto.setTransform(escala, 0, 0, escala, 0, 0);

  const quantidade = largura < 480 ? 60 : largura < 768 ? 100 : 180;
  estrelas = Array.from({ length: quantidade }, () => ({
    x: Math.random() * largura,
    y: Math.random() * altura,
    tamanho: Math.random() * 1.1 + 0.4,
    velocidadeX: (Math.random() - 0.5) * 0.25,
    velocidadeY: (Math.random() - 0.5) * 0.25,
    brilho: Math.random() * 0.55 + 0.3,
    variacao: Math.random() * 0.004 + 0.001,
    sentido: Math.random() < 0.5 ? 1 : -1
  }));

  if (quadro !== null) window.cancelAnimationFrame(quadro);
  animarEstrelas();
}

// Pausa quando a página está oculta ou o sistema pede menos movimento.
window.addEventListener("resize", redimensionarCanvas);
document.addEventListener("visibilitychange", () => {
  if (document.hidden && quadro !== null) window.cancelAnimationFrame(quadro);
  quadro = null;
  if (!document.hidden) animarEstrelas();
});
movimentoReduzido.addEventListener("change", () => {
  if (quadro !== null) window.cancelAnimationFrame(quadro);
  quadro = null;
  animarEstrelas();
});

redimensionarCanvas();
