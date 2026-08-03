<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Interface é sempre com as skills e os MCPs deste repo

Configurei estas quatro ferramentas de propósito. Sempre que o trabalho envolver
construir ou alterar interface — site, landing page, componente, tela, qualquer
coisa que alguém vá olhar — use as quatro. Não é opcional e não depende de eu
pedir na hora.

| Ferramenta | Quando | Para quê |
|---|---|---|
| skill `frontend-design` | **antes** de escrever código | Definir paleta, tipografia, layout e o elemento de assinatura. Nada de partir direto pro CSS. |
| MCP `shadcn-ui` | ao montar a estrutura | Consultar blocos e componentes antes de escrever do zero. Se não servir para o caso, me diga o motivo — não pule calado. |
| MCP `chrome-devtools` | durante a construção | Ver o que foi feito. Screenshot em desktop e mobile a cada etapa, não só no fim. |
| skill `web-design-guidelines` | **antes** de dizer que terminou | Revisar acessibilidade, contraste, foco de teclado e responsividade. |

A ordem importa: desenhar → montar → **olhar** → revisar. O passo que eu mais
sinto falta é o de olhar. Interface que nunca foi vista em tela sai torta,
mesmo com o build passando.

Se alguma dessas ferramentas não estiver disponível na sessão, me avise em vez
de seguir sem ela.
