const filtros = document.querySelectorAll('.filtro');
filtros.forEach(botao => {
  botao.setAttribute('aria-pressed', String(botao.classList.contains('ativo')));
  botao.addEventListener('click', () => {
    filtros.forEach(item => {
      item.classList.toggle('ativo', item === botao);
      item.setAttribute('aria-pressed', String(item === botao));
    });
    document.querySelectorAll('.peca').forEach(peca => {
      peca.hidden = botao.dataset.filtro !== 'tudo' && peca.dataset.cat !== botao.dataset.filtro;
    });
  });
});
const parado = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-conta]").forEach((el) => {
  const destino = Number(el.dataset.conta);

  if (parado) {
    el.textContent = destino;
    return;
  }

  const observador = new IntersectionObserver(
    ([entrada]) => {
      if (!entrada.isIntersecting) return;
      observador.disconnect();

      const duracao = 1200;
      const inicio = performance.now();

      const passo = (agora) => {
        const t = Math.min((agora - inicio) / duracao, 1);
        el.textContent = Math.round(destino * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(passo);
      };

      requestAnimationFrame(passo);
    },
    { threshold: 0.6 },
  );

  observador.observe(el);
});


document.querySelector('[data-ano]').textContent = new Date().getFullYear();
