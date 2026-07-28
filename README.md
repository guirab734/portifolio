# Portfólio

Projeto de portfólio pessoal. A stack ainda será definida.

## Ferramentas de IA configuradas

Este repositório vem com servidores MCP e skills configurados para auxiliar no
desenvolvimento da interface com o Claude Code.

### Servidores MCP (`.mcp.json`)

| Servidor | Pacote | Para que serve | Chave necessária |
|---|---|---|---|
| `shadcn-ui` | `@jpisnice/shadcn-ui-mcp-server` | Consulta componentes do shadcn/ui | `GITHUB_TOKEN` (opcional) |
| `magic` | `@21st-dev/magic` | Geração de componentes de UI | `TWENTY_FIRST_API_KEY` (obrigatória) |
| `chrome-devtools` | `chrome-devtools-mcp` | Inspeção e depuração no navegador | nenhuma |

Os servidores rodam via `npx` (o `bun` não está instalado nesta máquina).
As chaves são lidas de variáveis de ambiente — nenhum segredo fica no repositório.

### Skills (`.claude/skills/`)

- **`frontend-design`** — direção visual e tipografia, evitando a aparência
  genérica de interface gerada por IA. Fonte: `anthropics/claude-code`.
- **`web-design-guidelines`** — revisão de UI contra as Web Interface
  Guidelines (acessibilidade e boas práticas). Fonte: `vercel-labs/agent-skills`.

## Configuração

1. Copie `.env.example` para `.env` e preencha as chaves.
2. Defina as variáveis no ambiente para que o `.mcp.json` as encontre. No
   PowerShell, de forma persistente:

   ```powershell
   [Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'seu_token', 'User')
   [Environment]::SetEnvironmentVariable('TWENTY_FIRST_API_KEY', 'sua_chave', 'User')
   ```

3. Reinicie o Claude Code para que os servidores MCP sejam carregados.
