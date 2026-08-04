# Desafio — Transformação Digital na Indústria 4.0

Organização das ideias do desafio do SENAI. O enunciado original está resumido
na primeira seção; o resto é proposta de execução.

## 1. O que o desafio pede

São **três entregas**, e o enunciado avalia justamente a costura entre elas
("destacando a integração e sinergia entre as diferentes partes do projeto").

| # | Entrega | Conteúdo obrigatório |
|---|---|---|
| 1 | **Site da empresa** | Logo · Missão, visão e valores · Objetivos · Organograma · Inovação e capacidade de se reinventar · Seção de feedback dos clientes |
| 2 | **Cadastro no OlaClick** | Produtos fictícios com nome, descrição, preço, imagens e características |
| 3 | **Protótipo de Indústria 4.0** | Escolha da ferramenta · Protótipo prático · Benefícios esperados · Acompanhamento e monitoramento |
| 4 | **Apresentação** | Site + protótipo, na próxima aula |

Funcionalidades interativas exigidas no site: **formulário de contato** e
**sistema de avaliação**.

### Critérios de avaliação (do enunciado, literais)

Do site:
- Design atrativo e alinhado com a identidade da empresa
- Navegação fácil e intuitiva
- Conteúdo claro e informativo em todas as seções
- Funcionalidades interativas (formulário de contato e sistema de avaliação)

Do conjunto:
- Originalidade e coesão do design do site
- Eficiência na escolha da ferramenta da Indústria 4.0
- Demonstração prática e clareza na apresentação do protótipo
- Identificação clara dos benefícios esperados

## 2. As três decisões que travam o resto

Tudo depende destas escolhas. Abaixo está o que assumi — troque qualquer uma e
o restante do documento se ajusta.

| Decisão | Assumido | Por quê |
|---|---|---|
| Segmento da empresa | Torrefação de café artesanal com produção monitorada | O OlaClick é uma plataforma de cardápio/pedidos, feita para negócios de alimentação. Uma empresa de produto físico consumível cadastra bem lá; uma consultoria ou software house não. Café ainda é *indústria* de verdade — tem linha de produção, lote, curva de temperatura — então a Indústria 4.0 entra sem forçar. |
| Onde construir o site | Next.js, neste repositório | O enunciado deixa a plataforma livre. Você já tem base rodando aqui (Next 16, Tailwind 4, i18n, design system). "Originalidade e coesão do design" é critério de nota, e é exatamente onde template de Wix perde. |
| Ferramenta da Indústria 4.0 | Internet das Coisas (IoT) | É a única das oito que fecha ciclo completo com as ferramentas que o próprio enunciado sugere: Tinkercad simula o circuito, Thunkable mostra o painel. Também é a que rende resposta forte em "acompanhamento e monitoramento", que as outras deixam vago. |

**Se o trabalho for em grupo**, o enunciado fala em "cada grupo" — vale dividir
por entrega (site / OlaClick / protótipo / apresentação) e não por seção, para
ninguém ficar bloqueado esperando o outro.

## 3. A empresa: Ponto de Torra

**Ponto de Torra** — torrefação de café artesanal que controla cada lote por
sensores e devolve esse dado ao cliente.

O nome é o termo técnico real do setor: o *ponto de torra* é o instante exato em
que o grão atinge o perfil desejado. Errar esse ponto por trinta segundos perde o
lote. É literalmente o problema que o protótipo de IoT resolve — o nome já conta a
história do trabalho.

### Logo (briefing para desenhar no Canva ou Figma)

- **Símbolo:** um grão de café visto de cima, onde a fenda central — que todo grão
  tem — é substituída por uma linha de gráfico com um pico. A curva de torra.
- **Leitura:** de longe é um grão; de perto é um dado. Resume a empresa inteira.
- **Tipografia:** sem serifa geométrica, peso médio, espaçamento largo em
  "PONTO DE TORRA".
- **Cores:** marrom torra escuro (`#3B2317`), âmbar do grão (`#C87A3F`), e um
  verde-sensor (`#3FBF7F`) só na linha do gráfico — o toque de tecnologia dentro
  de uma paleta de café.
- **Versões:** completa (símbolo + nome), reduzida (só o grão, para favicon e app).

### Missão, visão e valores

**Missão** — Entregar café de origem rastreada com torra controlada por dados,
para que nenhum lote saia fora do ponto.

**Visão** — Ser, até 2031, a primeira torrefação do país com 100% da produção
rastreável do produtor à xícara, com o cliente enxergando a curva de torra do
café que está bebendo.

**Valores**
- **Rastreabilidade** — todo lote tem origem, data, curva e responsável.
- **Precisão** — o ponto de torra é medido, não estimado.
- **Origem justa** — preço acordado direto com o produtor, publicado no site.
- **Transparência** — dado de produção e avaliação de cliente são públicos.
- **Melhoria contínua** — cada nota recebida volta para a próxima torra.

### Objetivos (mensuráveis, como o enunciado pede)

| Prazo | Meta | Indicador |
|---|---|---|
| Curto (6 meses) | Reduzir perda por lote fora do ponto de 8% para 3% | % de lotes refugados |
| Curto | Sensores instalados em 100% dos torradores | 2 de 2 equipamentos |
| Curto | Catálogo completo publicado online | nº de SKUs cadastrados |
| Médio (2 anos) | 500 assinaturas mensais ativas | nº de assinantes |
| Médio | 100% dos fornecedores com origem documentada | % de sacas rastreadas |
| Médio | Reduzir consumo de energia por kg torrado em 15% | kWh/kg |
| Longo (5 anos) | Três unidades e primeira exportação | nº de unidades, kg exportados |
| Longo | Torra carbono neutro | tCO₂e compensado |

### Organograma

```
                    Direção Geral
                          │
    ┌─────────────┬───────┴───────┬──────────────────┐
 Produção      Tecnologia      Comercial        Qualidade e
 e Torra        e Dados        e Marketing     Sustentabilidade
    │              │                │                 │
 Mestre de     Manutenção      Vendas e         Controle de
   torra       de sensores     atendimento       qualidade
    │              │                │                 │
 Operadores    Análise de       Conteúdo e      Relação com
 de torrador      dados           mídias         produtores
```

Quatro áreas, e a de **Tecnologia e Dados** existir como área própria — e não
pendurada em Produção — é o que caracteriza a empresa como Indústria 4.0. Vale
dizer isso em voz alta na apresentação; é ponto de avaliação.

### Inovação e capacidade de se reinventar

Quatro mecanismos concretos (evite frase genérica de "somos inovadores", isso não
pontua):

1. **Lotes experimentais** — 5% da produção mensal é reservada para perfis de
   torra novos, avaliados pelos clientes antes de virarem catálogo.
2. **Comitê de melhoria trimestral** — reúne as quatro áreas para revisar os
   indicadores e as notas dos clientes; toda mudança de perfil sai daí.
3. **Dado interno aberto** — qualquer funcionário enxerga a curva e a nota de
   qualquer lote. Sem isso o mestre de torra vira gargalo de conhecimento.
4. **Parceria com produtores** — duas visitas anuais à origem, com ajuste
   conjunto de colheita e secagem a partir do que os sensores mostraram.

### Feedback coletivo — a peça que costura o trabalho

Esta é a ideia que integra as três entregas, e é o que eu defenderia na
apresentação:

> Cada pacote sai da fábrica com um **QR code do lote**. O cliente escaneia,
> vê a curva de torra daquele café específico — data, origem, temperatura, tempo
> — e dá sua nota. A avaliação **volta ligada ao lote**, não à loja.

Com isso a empresa descobre qual *curva* agrada, não só qual produto vende. Se os
lotes com pico de 205 °C tiram nota média maior, o parâmetro muda na próxima
torra. O feedback do cliente vira entrada do processo industrial — que é
exatamente a definição de Indústria 4.0 que a UC está ensinando.

No site isso aparece como: média geral em destaque, avaliações recentes com nota
e comentário, e o formulário aberto para novas.

## 4. Arquitetura do site

Seis seções. Sugiro **página única com navegação âncora** — o enunciado pede
"navegação fácil e intuitiva", e rolagem contínua com menu fixo entrega isso
melhor que seis páginas separadas.

| Seção | Conteúdo | Cobre qual exigência |
|---|---|---|
| **Início** | Logo, frase de posicionamento, três números (lotes torrados, % dentro do ponto, nota média) | Design e identidade |
| **A Empresa** | Missão, visão, valores, objetivos por prazo, organograma | Missão/visão/valores, objetivos, organograma |
| **Produtos** | Catálogo com foto, descrição e preço; botão para o cardápio OlaClick | Cadastro de produtos |
| **Tecnologia** | Como o sistema IoT funciona, o protótipo, rastreio de lote por código | Parte 2 e inovação |
| **Avaliações** | Média, avaliações exibidas, formulário de nota + comentário | Feedback coletivo, funcionalidade interativa |
| **Contato** | Formulário (nome, e-mail, mensagem), endereço, redes | Funcionalidade interativa |

**Consulta de lote** é a funcionalidade extra que eu incluiria: um campo onde se
digita o código do lote e aparecem origem, data, curva e nota. É o site provando
a tese da empresa, não só descrevendo. Para o trabalho, dados fictícios em um
arquivo local resolvem — não precisa de banco.

### Identidade visual do site

Diferente do portfólio que já existe neste repositório (violeta escuro). A
proposta aqui é: fundo creme claro (`#F5EFE6`), texto marrom torra (`#3B2317`),
âmbar como destaque (`#C87A3F`), verde-sensor (`#3FBF7F`) só em dado e gráfico.
O contraste entre a paleta artesanal e o elemento de dado é a assinatura visual —
o mesmo conceito do logo, repetido no site inteiro.

## 5. Parte 2 — Protótipo IoT

### O problema que resolve

Hoje o mestre de torra acompanha o lote por termômetro analógico e ouvido (o
"primeiro crack"). Depende da pessoa, não se registra, e não dá para repetir.

### O protótipo, em duas partes

**a) Circuito no Tinkercad** — simula a sonda dentro do tambor do torrador:

- Arduino Uno
- Sensor de temperatura (TMP36 ou termistor) — a sonda
- Display LCD 16×2 — temperatura atual e tempo do lote
- LED verde / amarelo / vermelho — abaixo do ponto, no ponto, passou do ponto
- Buzzer — alerta no instante exato de descarregar

A lógica é simples e cabe em uma tela de código: lê a temperatura, compara com a
faixa-alvo do perfil, acende o LED correspondente e dispara o buzzer ao entrar na
faixa. Roda inteiro dentro do Tinkercad, sem hardware físico — o que resolve a
ressalva do enunciado sobre "limitações técnicas ou de acesso às ferramentas".

**b) Aplicativo no Thunkable** — o painel que a fábrica e o cliente enxergam:

- *Tela 1 — Lote ao vivo:* temperatura, tempo decorrido, faixa-alvo, alerta.
- *Tela 2 — Histórico:* lotes anteriores com curva e resultado.
- *Tela 3 — Avaliação:* leitura do QR do pacote, ficha do lote e envio da nota.

A tela 3 é o que liga o protótipo à seção de feedback do site. Vale montar essa
por último, mas não cortar — é ela que faz a apresentação parecer um projeto só.

### Benefícios esperados

| Benefício | Como aparece no número |
|---|---|
| Menos perda por lote errado | refugo de 8% → 3% |
| Padronização entre operadores | desvio médio da curva em relação ao perfil-alvo |
| Rastreabilidade por lote | 100% dos lotes com curva registrada |
| Manutenção preditiva | desvio de aquecimento indica resistência gasta antes da quebra |
| Argumento de marketing | a curva vira conteúdo no site e no pacote |
| Conhecimento retido na empresa | perfil deixa de morar só na cabeça do mestre de torra |

### Acompanhamento e monitoramento

O enunciado pede isso explicitamente e é onde a maioria dos trabalhos passa
batido. Resposta concreta:

- **Indicadores semanais:** % de lotes dentro da faixa · desvio médio da curva ·
  kg refugados · kWh por kg · nota média dos lotes do período.
- **Painel:** o próprio app do Thunkable, tela de histórico.
- **Ritual:** revisão semanal do mestre de torra com a área de Dados; revisão
  mensal no comitê de melhoria, onde o perfil-alvo pode ser alterado.
- **Gatilho de ação:** dois lotes seguidos fora da faixa param a produção para
  conferência de sensor e resistência.

## 6. OlaClick — o que cadastrar

Seis a oito produtos bastam para demonstrar. Cada um com nome, descrição, preço,
imagem e características, como o enunciado pede.

| Produto | Descrição curta | Preço sugerido |
|---|---|---|
| Torra Clara — Cerrado Mineiro | Notas cítricas, corpo leve. Torra 198 °C. | R$ 42 / 250 g |
| Torra Média — Sul de Minas | Chocolate e castanha, equilibrado. Torra 205 °C. | R$ 38 / 250 g |
| Torra Escura — Blend Casa | Encorpado, para coado forte e espresso. Torra 218 °C. | R$ 35 / 250 g |
| Descafeinado — Processo Água | Sem solvente químico, corpo médio. | R$ 48 / 250 g |
| Lote Experimental do Mês | Perfil novo, tiragem limitada, avaliado pelos clientes. | R$ 52 / 250 g |
| Assinatura Mensal | 500 g por mês, perfil à escolha, frete incluso. | R$ 89 / mês |
| Kit Degustação | Três torras de 100 g com ficha de curva de cada lote. | R$ 68 |
| Café em grão — 1 kg | Para cafeterias, moagem no destino. | R$ 120 |

**Características a preencher em cada um:** origem, altitude, processo
(natural/lavado), ponto de torra em °C, moagem disponível, validade.

Detalhe que vale nota: colocar o **ponto de torra em °C** na descrição de cada
produto. É gratuito e amarra o catálogo ao protótipo.

## 7. Roteiro da apresentação (~10 min)

1. **O problema** (1 min) — trinta segundos a mais e o lote vira prejuízo.
2. **A empresa** (2 min) — logo, missão/visão/valores, objetivos, organograma.
   Rápido; é contexto, não é o ponto alto.
3. **O site** (2 min) — navegar ao vivo, parando em Produtos e Avaliações.
4. **O protótipo** (3 min) — rodar o circuito no Tinkercad até o buzzer disparar,
   depois mostrar o app.
5. **A costura** (1 min) — o QR do pacote → nota do cliente → ajuste da curva →
   próxima torra. Aqui é onde o trabalho se diferencia.
6. **Benefícios e monitoramento** (1 min) — a tabela de indicadores.

## 8. Ordem de execução

Do que trava mais coisa para o que trava menos:

1. **Fechar as decisões da seção 2** — segmento, plataforma, ferramenta.
2. **Logo** — o site inteiro depende da paleta e do símbolo.
3. **Textos** — missão, visão, valores, objetivos, organograma já estão
   rascunhados aqui; é revisar e aprovar.
4. **OlaClick** — cadastro dos produtos, porque as imagens dos produtos são
   reaproveitadas no site.
5. **Site** — estrutura, depois conteúdo, depois formulários.
6. **Tinkercad** — circuito e código.
7. **Thunkable** — três telas.
8. **Apresentação** — por último, quando já existe o que mostrar.

Os itens 4 e 6 são independentes entre si e podem correr em paralelo se o
trabalho for em grupo.

## 9. Conferência final contra os critérios

| Critério do enunciado | Onde é atendido |
|---|---|
| Design atrativo e alinhado à identidade | Paleta café + dado, repetida do logo ao site |
| Navegação fácil e intuitiva | Página única, seis âncoras, menu fixo |
| Conteúdo claro em todas as seções | Seções 3 e 4 deste documento |
| Formulário de contato | Seção Contato |
| Sistema de avaliação | Seção Avaliações + tela 3 do app |
| Originalidade e coesão do design | Nome, logo e paleta saem todos do mesmo conceito |
| Eficiência na escolha da ferramenta | IoT resolve o problema central do negócio, não é enfeite |
| Demonstração prática e clareza | Circuito rodando ao vivo no Tinkercad |
| Benefícios claros | Tabela da seção 5, com indicador para cada um |

## 10. Pendências

- [ ] Confirmar as três decisões da seção 2
- [ ] Confirmar se o trabalho é individual ou em grupo
- [ ] Desenhar o logo
- [ ] Definir se o site fica neste repositório ou em um novo
- [ ] Conferir a data da entrega ("nossa próxima aula")
