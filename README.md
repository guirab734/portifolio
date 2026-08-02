# guirab.com.br

Portfólio pessoal. Next.js 16, React 19, TypeScript e Tailwind 4.

```bash
npm run dev
```

Publicado na Vercel a cada push na `main`.

## Como o site é organizado

Uma página, cinco seções, navegação lateral fixa com marca de progresso.

| Seção | Vídeo de fundo | Modo |
|---|---|---|
| Início | 01 — Hero, 10s | scrub |
| Sobre | — | — |
| Projetos | 03 — Ambiente, 12s | loop |
| Stacks | 04 — Estrutura, 6s | loop |
| Contato | 05 — Fecho, 8s | scrub |

**scrub** é o scroll controlando o tempo do vídeo quadro a quadro; **loop** é
reprodução contínua ao fundo.

A abertura entra pela tela de um monitor: o recorte da tela se expande até virar
a viewport, sem trocar de elemento. Como `object-cover` corta a foto para
preencher a tela, os cantos medidos na imagem são convertidos para coordenadas
da viewport em tempo real — sem isso o vídeo encaixa torto em telas de proporção
diferente.

O clipe 02 não é usado hoje; o arquivo segue em `public/videos` para
reaproveitamento.

## Onde mexer

Conteúdo e dados em [`lib/site-data.ts`](lib/site-data.ts): projetos, stack,
números e contato. Textos nos dois idiomas em [`lib/i18n.ts`](lib/i18n.ts).

Os prompts dos vídeos estão em [`docs/videos.md`](docs/videos.md), com o
diagnóstico do que deu errado em cada geração.

Ao trocar imagens, apague `.next/cache/images` — o Next serve a versão anterior
até o cache expirar.

## Vídeo e scroll

Os clipes em modo scrub têm keyframe a cada quatro quadros. Com keyframes
esparsos o navegador precisa decodificar centenas de quadros a cada movimento do
scroll, e a reprodução engasga; assim a busca fica em poucos milissegundos, ao
custo de metade do peso de marcar todos os quadros.

Fora o hero, os vídeos não baixam por inteiro na carga inicial.

A rolagem é interpolada com Lenis. As âncoras passam pela biblioteca, senão o
salto ignoraria a interpolação.

## Design

| Token | Valor | Uso |
|---|---|---|
| `void` | `#09070F` | fundo, preto com viés violeta |
| `surface` | `#14101F` | superfícies elevadas |
| `ultraviolet` | `#7B2BF9` | destaque principal |
| `magenta` | `#E11D9C` | acento, usado com parcimônia |
| `lilac` | `#C9BEE8` | texto secundário |
| `paper` | `#F4F1FA` | texto principal |

Bricolage Grotesque nos títulos, Inter Tight no corpo, JetBrains Mono nas
etiquetas.

As entradas por scroll usam `animation-timeline` nativo, sem biblioteca de
animação. Navegadores sem suporte mostram o conteúdo direto, e
`prefers-reduced-motion` desliga tudo — inclusive a rolagem interpolada.

Clipes com fundo escuro usam `mix-blend-mode: lighten` mais máscara radial para
se fundirem à página. Isso só funciona com preto absoluto no arquivo: qualquer
cinza acima do fundo do site aparece como um retângulo recortado.

## Idiomas

Português e inglês, com botão no canto superior direito. O primeiro acesso segue
o idioma do navegador e a escolha fica salva. Todo texto sai de `lib/i18n.ts`.

## Medição

Web Analytics e Speed Insights da Vercel estão no layout. Em desenvolvimento
rodam em modo de depuração e não registram nada.
