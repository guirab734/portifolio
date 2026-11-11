// Navigation-only controller. There is no API client, login, persistence,
// geolocation, real QR destination, generation, editing or export action.
import { PLACAS, VISITAS } from "./data.js";

const ui = { view: "lojas", filter: "all", print: "batch" };
const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");
let lastFocused;
const shapes = {
  layers: '<path d="m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  up: '<path d="M6 18 18 6M6 6h12v12"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Zm6-3v15m6-12v15"/>',
  print: '<path d="M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v7H6Z"/>',
  link: '<path d="m10 13 4-4m-6 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m4 8a4 4 0 0 1 0-6l4-4a4 4 0 0 1 6 6l-2 2"/>',
  qr: '<path d="M3 3h6v6H3Zm12 0h6v6h-6ZM3 15h6v6H3Zm12 0h3v3h3v3h-6Zm6-3h-3v3M3 12h6m3-9v6m0 6v6"/>',
  pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
const icon = (name, size = 18) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.layers}</svg>`;
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const label = (status) => ({active:"Ativa",paused:"Pausada",available:"Disponível"})[status];
const badge = (plate) => `<span class="status-badge ${plate.status}"><i></i>${label(plate.status)}</span>`;

function inventoryView() {
  const visible = PLACAS.filter((plate) => ui.filter === "all" || (ui.filter === "linked" ? plate.status !== "available" : plate.status === ui.filter));
  return `<section class="g-collection-heading"><div class="g-heading-copy"><span class="g-overline"><i></i>SEU ESPAÇO DE TRABALHO</span><h1>Seu estoque.<br/><span>Suas próximas lojas.</span></h1><p>Conheça a gestão de placas com uma coleção fictícia.</p></div><div class="g-stock-overview"><div class="g-stock-number"><strong>02</strong><span>placas prontas<br/>para vender</span>${icon("qr",35)}</div><div class="g-stock-track" role="img" aria-label="4 de 6 placas vinculadas a lojas"><span style="width:66.666%"></span></div><div class="g-stock-detail"><span><i></i>4 de 6 em lojas</span><span>320 acessos fictícios</span></div></div></section>
  <section class="g-inventory" aria-label="Coleção de placas"><div class="g-collection-bar"><div><span class="g-overline">COLEÇÃO</span><h2>Suas placas <span>6</span></h2></div><span class="demo-tag">Coleção de exemplo</span></div>
  <div class="g-library-tools"><div class="g-filters" role="group" aria-label="Filtrar placas">${[["all","Todas",6],["available","Disponíveis",2],["linked","Em lojas",4],["paused","Pausadas",1]].map(([id,name,count]) => `<button data-action="filter" data-value="${id}" aria-pressed="${ui.filter===id}" class="${ui.filter===id?"is-active":""}">${name}<span>${count}</span></button>`).join("")}</div><span class="demo-readonly">${icon("lock",14)}Somente consulta</span></div>
  <div class="g-ticket-grid">${visible.map((plate) => `<article class="g-ticket${plate.status!=="available"?" is-linked":""}"><div class="g-ticket-top"><span class="g-ticket-select">Placa ${plate.code.slice(1)}</span>${badge(plate)}</div><button class="g-ticket-identity" data-action="record" data-code="${plate.code}" aria-label="Abrir ficha de ${esc(plate.name)}, ${plate.code}"><span class="g-ticket-code">${plate.code}</span>${icon("up",22)}<span class="g-ticket-business">${esc(plate.name)}</span></button><div class="g-ticket-perforation"><i></i><span>QR CODE + NFC</span>${icon("link",13)}<i></i></div><div class="g-ticket-bottom"><div class="g-ticket-location"><span>${icon("pin",13)}${esc(plate.neighborhood||"Aguardando vínculo")}</span><small>${plate.scans} acessos · ${plate.reviews??"—"} avaliações</small></div><button class="g-icon-btn" data-action="record" data-code="${plate.code}" aria-label="Ver detalhes da placa ${plate.code}">${icon("arrow")}</button></div></article>`).join("")}</div>
  <div class="g-collection-footer"><span>${visible.length} de 6 placas</span><span>${icon("lock",12)}Dados demonstrativos fixos.</span></div></section>
  <button class="g-fieldwork-link" data-action="navigate" data-view="mapa"><span class="g-fieldwork-symbol">${icon("map",29)}</span><span><strong>A próxima conexão está lá fora.</strong><small>Conheça a apresentação das visitas e do território.</small></span><span class="g-fieldwork-link-label">Abrir território${icon("up",19)}</span></button>`;
}

function printView() {
  return `<div class="g-page-title"><div><span class="g-overline">DA TELA PARA O BALCÃO</span><h1>Bancada de impressão.</h1><p>Prévia fixa da arte e da composição dos arquivos.</p></div><span class="g-format-seal"><span>A4</span><small>12,4 × 14,4 cm<br/>por placa</small></span></div>
  <div class="g-print-mode" role="group" aria-label="Prévia de impressão">${[["batch","Lote de placas","Duas por folha"],["single","Uma placa","Arte individual"]].map(([id,name,detail]) => `<button data-action="print-preview" data-value="${id}" class="${ui.print===id?"is-active":""}" aria-pressed="${ui.print===id}">${icon(id==="batch"?"layers":"qr",17)}${name}<span>${detail}</span></button>`).join("")}</div>
  <div class="g-print-bench"><section class="g-print-canvas" aria-label="Prévia dos arquivos"><div class="g-canvas-caption"><span><i></i>${ui.print==="batch"?"PRÉVIA DA PRIMEIRA FOLHA":"PRÉVIA DA ARTE"}</span><span>EXEMPLO FIXO</span></div>${ui.print==="batch"?`<div class="g-a4-sheet"><div class="g-sheet-art"><img src="./plaque-demo.webp" alt="Prévia de placa demonstrativa, sem QR Code funcional"/></div><div class="g-sheet-art"><img src="./plaque-demo.webp" alt="Segunda placa demonstrativa, sem QR Code funcional"/></div></div><div class="g-sheet-identities"><span>Placa de exemplo<strong>D001</strong></span><span>Placa de exemplo<strong>D002</strong></span></div>`:`<div class="g-single-art"><img src="./plaque-demo.webp" alt="Arte original da placa com área de QR Code substituída por demonstração"/></div>`}<div class="g-canvas-bottom"><span>Arte do projeto original</span><span>Prévia demonstrativa</span></div></section><aside class="g-print-controls"><span class="g-overline">EXEMPLO DE COMPOSIÇÃO</span><h2>02<span> placas por folha</span></h2><p>1 folha A4 · composição em paisagem</p><div class="g-print-queue"><div><strong>D001</strong><span>Placa de exemplo</span></div><div><strong>D002</strong><span>Placa de exemplo</span></div></div><div class="demo-info"><strong>Somente visualização</strong><p>Geração de códigos, exportação e impressão ficam disponíveis no sistema original. Esta demonstração apresenta uma composição fixa.</p><p>O QR Code foi removido da arte e não redireciona para nenhum estabelecimento.</p></div></aside></div>`;
}

function mapView() {
  return `<div class="g-page-title"><div><span class="g-overline">CADA VISITA, UMA POSSIBILIDADE</span><h1>Seu território.</h1><p>Exemplo de acompanhamento de visitas. Mapa ilustrativo, sem endereços reais ou geolocalização.</p></div></div><div class="demo-territory"><section class="demo-map" aria-label="Mapa ilustrativo de território fictício"><div class="demo-map-water"></div><div class="demo-map-road road-a"></div><div class="demo-map-road road-b"></div><div class="demo-map-road road-c"></div><span class="demo-map-label">BAIRRO EXEMPLO A</span><span class="demo-map-label label-b">BAIRRO EXEMPLO B</span><span class="demo-map-label label-c">BAIRRO EXEMPLO C</span><div class="demo-map-area"></div>${PLACAS.slice(0,4).map((plate,index) => `<button class="demo-pin pin-${index}" data-action="record" data-code="${plate.code}" aria-label="Consultar ${esc(plate.name)} no mapa fictício">${icon("pin",24)}<span>${plate.code}</span></button>`).join("")}<span class="demo-map-caption">Mapa ilustrativo · sem coordenadas reais</span></section><aside class="demo-visits"><span class="g-overline">VISITAS DE EXEMPLO</span><h2>O caminho fica registrado.</h2>${VISITAS.map((visit) => `<details><summary><span>${esc(visit.title)}</span><small>${esc(visit.status)}</small></summary><p>${esc(visit.note)}</p></details>`).join("")}<p>As áreas e visitas são fixas nesta demonstração.</p></aside></div>`;
}

function connectionsView() {
  return `<div class="g-page-title"><div><span class="g-overline">DO FÍSICO AO DIGITAL</span><h1>Uma conexão permanente.</h1><p>Veja como o sistema conecta a placa ao estabelecimento.</p></div></div><section class="g-connection-workspace"><span class="g-overline">COMO FUNCIONA NO PROJETO</span><h2>Uma placa. Muitas conexões.</h2><p>No sistema original, cada placa possui um endereço permanente. O painel permite gerenciar o estabelecimento vinculado a ele.</p><div class="g-connection-route"><div><span>${icon("qr",32)}</span><strong>QR Code + NFC</strong><small>Acesso pela placa</small></div>${icon("arrow")}<div><span>${icon("link",32)}</span><strong>Link permanente</strong><small>Identificação da placa</small></div>${icon("arrow")}<div><span>${icon("check",32)}</span><strong>Avaliação da loja</strong><small>Destino do estabelecimento</small></div></div><div class="demo-info"><strong>Esta versão é somente consulta</strong><p>Não há links de avaliação reais, credenciais, configurações de domínio ou redirecionamentos nesta demonstração.</p></div></section><section class="g-access-panel"><span class="g-access-icon">${icon("lock",24)}</span><div><h2>Acesso demonstrativo.</h2><p>Você navega como visitante, sem entrar em uma conta e sem acesso a dados pessoais.</p></div></section>`;
}

function render(focus = false) {
  const nav = [["lojas","Placas","layers"],["impressao","Impressão","print"],["mapa","Território","map"],["configuracao","Conexões","link"]];
  app.innerHTML = `<div class="g-app"><a class="skip-link" href="#main-content">Ir para o conteúdo</a><header class="g-header"><button class="g-wordmark demo-wordmark" data-action="navigate" data-view="lojas" aria-label="Guirab Placas — início"><svg viewBox="0 0 38 38" fill="none" aria-hidden="true"><path d="M10 28a13 13 0 0 1 0-18m8 18a13 13 0 0 0 0-18M26 10a13 13 0 0 1 0 18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="14" cy="19" r="3" fill="currentColor"/></svg><span>guirab<span class="g-wordmark-divider">/</span><small>placas</small></span></button><nav class="g-nav" aria-label="Navegação principal">${nav.map(([id,name,symbol]) => `<button data-action="navigate" data-view="${id}" class="${ui.view===id?"is-current":""}" ${ui.view===id?'aria-current="page"':""}>${icon(symbol,17)}<span>${name}</span></button>`).join("")}</nav><span class="demo-header-label">Portfólio · visitante</span></header><main class="g-main g-view-${ui.view}" id="main-content" tabindex="-1">${ui.view==="lojas"?inventoryView():ui.view==="impressao"?printView():ui.view==="mapa"?mapView():connectionsView()}<footer class="g-footer"><span>guirab<span>/</span>placas</span><span><i></i>Do balcão para novas conexões.</span><small>Demonstração · dados fictícios</small></footer></main></div>`;
  if (focus) document.getElementById("main-content").focus({preventScroll:true});
}
function closeRecord() {
  modalRoot.replaceChildren();
  app.inert = false;
  document.body.style.overflow = "";
  if(lastFocused?.isConnected) lastFocused.focus();
}
function openRecord(code) {
  const plate = PLACAS.find((p) => p.code === code);
  if(!plate) return;
  lastFocused = document.activeElement;
  app.inert = true;
  document.body.style.overflow = "hidden";
  modalRoot.innerHTML = `<div class="demo-record-overlay" data-overlay><section class="demo-record" role="dialog" aria-modal="true" aria-labelledby="record-title"><header><span class="g-overline">FICHA DO ESTABELECIMENTO</span><button data-action="close-record" aria-label="Fechar ficha">${icon("close",22)}</button></header><span class="demo-record-code">${plate.code}</span><h2 id="record-title">${esc(plate.name)}</h2>${badge(plate)}<p class="demo-record-note">Dados fictícios · somente consulta</p>${plate.status==="available"?`<div class="demo-info"><strong>Placa disponível</strong><p>No sistema original, esta placa pode ser vinculada a um estabelecimento. A configuração fica desativada nesta versão de portfólio.</p></div>`:`<div class="demo-record-metrics"><div><span>Avaliações iniciais</span><strong>${plate.initialReviews}</strong></div><div><span>Avaliações atuais</span><strong>${plate.reviews}</strong></div><div><span>Crescimento</span><strong>+${plate.reviews-plate.initialReviews}</strong></div></div><dl><div><dt>Contato</dt><dd>${esc(plate.owner)}</dd></div><div><dt>Localização</dt><dd>${esc(plate.neighborhood)} · Cidade Exemplo</dd></div><div><dt>Endereço</dt><dd>Endereço ilustrativo · sem localização real</dd></div><div><dt>Acessos à placa</dt><dd>${plate.scans} acessos fictícios</dd></div><div><dt>Destino</dt><dd>Avaliação de exemplo · sem link externo</dd></div></dl><details><summary>Histórico de acompanhamento</summary><p>Cadastro demonstrativo: ${plate.initialReviews} avaliações.</p><p>Atualização de exemplo: ${plate.reviews} avaliações.</p></details>`}<div class="demo-info"><strong>Explore sem alterar</strong><p>Cadastro, contatos, histórico e destino são fixos nesta demonstração.</p></div><button class="g-btn g-btn-main" data-action="close-record">Voltar à consulta</button></section></div>`;
  modalRoot.querySelector("button").focus();
}
document.addEventListener("click", (event) => {
  if(event.target.matches("[data-overlay]")) return closeRecord();
  const button = event.target.closest("button[data-action]");
  if(!button) return;
  const {action,view,value,code} = button.dataset;
  if(action==="close-record") return closeRecord();
  if(action==="record") return openRecord(code);
  if(action==="navigate" && ["lojas","impressao","mapa","configuracao"].includes(view)) ui.view=view;
  else if(action==="filter" && ["all","available","linked","paused"].includes(value)) ui.filter=value;
  else if(action==="print-preview" && ["batch","single"].includes(value)) ui.print=value;
  else return;
  render(action==="navigate");
  if(action==="navigate") window.scrollTo({top:0,behavior:"instant"});
});
document.addEventListener("keydown", (event) => {
  const dialog=modalRoot.querySelector('[role="dialog"]');
  if(!dialog) return;
  if(event.key==="Escape") {event.preventDefault();closeRecord();}
  if(event.key==="Tab") {
    const controls=[...dialog.querySelectorAll("button, summary")];
    if(document.activeElement===(event.shiftKey?controls[0]:controls.at(-1))) {event.preventDefault();(event.shiftKey?controls.at(-1):controls[0]).focus();}
  }
});
render();
