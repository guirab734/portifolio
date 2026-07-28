# guirab.com.br

Portfólio pessoal. Next.js 16, React 19, TypeScript e Tailwind 4.

```bash
npm run dev
```

## Como o site é organizado

Uma página só, cinco seções, navegação em forma de timeline lateral — o site é
movido a vídeo, então a régua de progresso usa o mesmo vocabulário.

| Seção | Vídeo | Modo |
|---|---|---|
| Início | 01 — Hero, 10s | scrub |
| Sobre | 02 — Transição, 5s | scrub |
| Projetos | 03 — Ambiente, 12s | loop |
| Stack | 04 — Estrutura, 6s | loop |
| Contato | 05 — Fecho, 8s | scrub |

**scrub** significa que o scroll controla o tempo do vídeo, quadro a quadro.
**loop** é reprodução contínua ao fundo.

## Onde mexer

Todo o conteúdo está em [`lib/site-data.ts`](lib/site-data.ts) — projetos,
stack, dados de contato e os caminhos dos vídeos. Editar esse arquivo muda a
página inteira sem tocar em componente nenhum. Os campos marcados com
`PREENCHER` ainda são placeholder.

Os prompts dos cinco vídeos estão em [`docs/videos.md`](docs/videos.md), junto
com as instruções de instalação e o que ajustar se o resultado não vier bom.

## Design

| Token | Valor | Uso |
|---|---|---|
| `void` | `#09070F` | fundo, preto com viés violeta |
| `surface` | `#14101F` | superfícies elevadas |
| `ultraviolet` | `#7B2BF9` | destaque principal |
| `magenta` | `#E11D9C` | acento, usado com parcimônia |
| `lilac` | `#C9BEE8` | texto secundário |
| `paper` | `#F4F1FA` | texto principal |

Bricolage Grotesque nos títulos, Inter Tight no corpo, JetBrains Mono nos
timecodes e etiquetas.

As animações de entrada usam `animation-timeline: view()`, nativo do CSS, sem
biblioteca de scroll. Navegadores sem suporte mostram o conteúdo direto, e
`prefers-reduced-motion` desliga tudo.

## Ferramentas de IA

Servidores MCP em [`.mcp.json`](.mcp.json): `shadcn-ui` para componentes e
`chrome-devtools` para inspeção no navegador. As skills `frontend-design` e
`web-design-guidelines` ficam em `.claude/skills/`.

A única chave é o `GITHUB_TOKEN`, opcional — evita o limite de 60 requisições
por hora do `shadcn-ui`. Modelo em [`.env.example`](.env.example).
