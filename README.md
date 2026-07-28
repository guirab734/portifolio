# Portfólio

Projeto de portfólio pessoal. A stack ainda será definida.

## Ferramentas de IA

O repositório carrega servidores MCP e skills usados no desenvolvimento da
interface com o Claude Code.

### Servidores MCP (`.mcp.json`)

| Servidor | Pacote | Função | Chave |
|---|---|---|---|
| `shadcn-ui` | `@jpisnice/shadcn-ui-mcp-server` | Código-fonte dos componentes e blocks do shadcn/ui v4 | `GITHUB_TOKEN` (opcional) |
| `chrome-devtools` | `chrome-devtools-mcp` | Performance, Lighthouse, console e rede no Chrome | — |

Os servidores rodam via `npx`, já que o `bun` não está instalado na máquina.
As chaves vêm de variáveis de ambiente, então nenhum segredo entra no repositório.

### Skills (`.claude/skills/`)

- **`frontend-design`** — direção visual e tipografia, evitando a aparência
  genérica de interface gerada por IA. Origem: `anthropics/claude-code`.
- **`web-design-guidelines`** — revisão de UI contra as Web Interface
  Guidelines, cobrindo acessibilidade e boas práticas. Origem:
  `vercel-labs/agent-skills`.

Ambas têm escopo de projeto: valem neste repositório e não aparecem no painel
de habilidades, que lista apenas o que foi instalado pelo gerenciador de plugins.

O fluxo entre as quatro: `frontend-design` define a estética, `shadcn-ui`
fornece os componentes base, `chrome-devtools` verifica o resultado no
navegador e `web-design-guidelines` audita no fim.

## Ambiente

A chave fica em variável de ambiente do usuário, de onde o `.mcp.json` a lê:

```powershell
[Environment]::SetEnvironmentVariable('GITHUB_TOKEN', '<token>', 'User')
```

Os servidores MCP são carregados na inicialização do Claude Code.
