// Builds a read-only portfolio copy from the original static site.
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const source = process.argv[2];
if (!source || !path.isAbsolute(source)) throw new Error("Informe o caminho absoluto do site original.");
const target = path.resolve("public/demos/brownies");
await mkdir(target, { recursive: true });
let html = await readFile(path.join(source, "index.html"), "utf8");
html = html.replace('<title>Brownies da Soso — cortado na hora</title>', '<title>Brownies da Soso · Demonstração</title>');
html = html.replace('<meta name="theme-color"', `<meta name="robots" content="noindex,nofollow" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'none'; base-uri 'none'; form-action 'none'; object-src 'none'" />
    <meta name="referrer" content="no-referrer" />
    <meta name="theme-color"`);
html = html.replace('<link rel="stylesheet" href="estilo.css" />', '<link rel="stylesheet" href="estilo.css" /><link rel="stylesheet" href="demo.css" />');
html = html.replace('<body>', '<body><div class="demo-notice"><div><strong>Demonstração</strong><span>Cardápio e pedido ilustrativos · somente consulta</span></div><a href="/#projetos">← Voltar ao portfólio</a></div>');
html = html.replace(/<button class="add"[\s\S]*?<\/button>/g, '<a class="add" href="#encomenda">Ver pedido de exemplo</a>');
const order = `<div class="formulario demo-order">
              <p class="etiqueta">pedido de exemplo</p>
              <h3>Uma caixa para conhecer.</h3>
              <p>Veja ao lado como o site apresenta os itens e o total de um pedido.</p>
              <p>Esta demonstração usa uma seleção fixa. Não coleta nome, telefone ou endereço e não envia encomendas.</p>
              <a class="botao" href="#cardapio">Voltar ao cardápio</a>
            </div>`;
html = html.replace(/<form class="formulario"[\s\S]*?<\/form>/, order);
html = html.replace('<h2>Monte o pedido.</h2>', '<h2>Veja um pedido.</h2>');
html = html.replace(/Escolha no cardápio acima e conte o resto aqui\. Respondemos com o\s+valor fechado e a data\./, 'Uma seleção ilustrativa para conhecer a apresentação de uma encomenda.');
html = html.replace('<b data-qtd>vazia</b>', '<b>2 itens</b>');
html = html.replace('<li class="caixa-vazia">Nada escolhido ainda.</li>', '<li><span>1× Brownie Simples</span><span>R$ 7,00</span></li><li><span>1× Brookie</span><span>R$ 10,00</span></li>');
html = html.replace('<strong data-total>R$ 0,00</strong>', '<strong>R$ 17,00</strong>');
html = html.replace('Valor confirmado na resposta do pedido.', 'Valores ilustrativos. Nenhum pedido será enviado.');
if (/<form\b|<input\b|<textarea\b/.test(html)) throw new Error("A cópia de demonstração ainda contém campos de dados pessoais.");
await writeFile(path.join(target, "index.html"), html);
await copyFile(path.join(source, "estilo.css"), path.join(target, "estilo.css"));
const script = await readFile(path.join(source, "script.js"), "utf8");
const counters = script.slice(script.indexOf('const parado ='), script.indexOf('/* ---------------- formulário'));
await writeFile(path.join(target, "script.js"), `const filtros = document.querySelectorAll('.filtro');
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
${counters}
document.querySelector('[data-ano]').textContent = new Date().getFullYear();
`);
console.log("Demonstração do Brownies preparada sem formulários, armazenamento ou envio de pedidos.");
