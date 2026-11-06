# Demonstrações do portfólio

Os projetos novos aparecem na categoria **Sites**, em português e inglês.

| Projeto | Destino | Situação |
| --- | --- | --- |
| Guirab Placas | `/demos/placas/index.html` | Demonstração isolada, com estabelecimentos e métricas fictícios |
| Recursos da Tia Cris | Loja pública em recursosdatiacris.com.br | Site real, identificado como “Ver ao vivo” |
| Ritmo | `/demos/ritmo/index.html` | Demonstração isolada, com dados fictícios e somente consulta |

## Ritmo

A demonstração reaproveita as funções de apresentação, os estilos e as
ilustrações do projeto original. O controlador da demonstração oferece apenas
navegação: semana, movimentos, imagens ampliadas, exemplos de histórico e
prévias fixas das etapas de uma sessão. Os botões indicam a tela que será vista.
Não executa nem registra um treino.

A ficha demonstrativa foi inventada para mostrar a interface: cinco dias,
dois movimentos por dia e valores fixos. Não é a ficha pessoal do autor nem
uma recomendação de treino. O histórico também é fictício.

O controlador original, a ficha pessoal, versões anteriores, documentos de
auditoria, configurações, importação/exportação de backup e credenciais não são
distribuídos. A demo não acessa localStorage, sessionStorage, IndexedDB ou cookies
e não consulta APIs do site original. Recarregar volta ao estado inicial.
É um documento estático separado da página React do portfólio e não carrega
os componentes de analytics do layout. As fontes vêm do Google Fonts; as
ilustrações são locais. A política de conteúdo restringe scripts e conexões
à própria origem e bloqueia formulários.

### Atualizar as telas importadas

Na raiz do portfólio, execute:

```powershell
node scripts/import-ritmo-demo.mjs '<caminho absoluto para dist do Ritmo>'
node --test scripts/demo-privacy.test.mjs
npm run build
```

O importador seleciona funções de apresentação e campos do catálogo por uma
lista explícita; não copia a pasta inteira. Os arquivos `demo.js`, `demo.css`
e `index.html` são próprios do portfólio. A importação não altera o projeto
original. As imagens PNG selecionadas são convertidas em WebP.

Depois de importar, conferir semana, ficha, cinco dias, imagens, série,
descanso, conclusão, histórico, navegação por teclado e celular. A demo não
deve exibir campos de edição nem produzir leituras ou gravações de dados.

## Placas

O card abre uma versão separada do painel pessoal. Ela reaproveita os estilos,
fontes e arte do repositório original `placas-guirab`, com um controlador próprio
que oferece apenas navegação por uma coleção fixa. Não inclui o controlador,
rotas de API, login, banco ou redirecionamentos do sistema original.

São seis placas demonstrativas: três ativas, uma pausada e duas disponíveis.
O visitante pode filtrar a coleção, consultar fichas e históricos fictícios,
alternar prévias fixas de impressão e consultar um território ilustrativo.
Não pode cadastrar, editar, gerar, vincular, pausar, imprimir ou exportar placas.
A tela Conexões explica o fluxo do projeto e não oferece configurações.

Nomes, contatos, endereços, visitas e métricas são fictícios. Não há números
de telefone, coordenadas geográficas, destinos de avaliação ou links permanentes
reais. A área de QR Code da arte é substituída antes da rasterização: a imagem
distribuída não contém o QR original nem caminhos vetoriais ocultos. O mapa é
um desenho local identificado como ilustrativo, sem serviço de mapas ou GPS.

A demo não faz requisições de dados e usa somente fontes e imagens locais.
Não lê nem grava armazenamento do navegador. Sua política de conteúdo bloqueia
conexões e formulários. O documento estático não carrega analytics do portfólio.

Para atualizar os estilos e a arte a partir de uma cópia local do repositório:

```powershell
node scripts/import-placas-demo.mjs '<caminho absoluto para o repositório de placas>'
node --test scripts/demo-privacy.test.mjs
```

O importador não altera o projeto original. Conferir visualmente a remoção
integral do QR Code após qualquer mudança na arte ou em suas dimensões.

## Publicação

Estas mudanças são locais. O repositório já publica na Vercel a cada push
na branch `main`; não foi criada uma hospedagem paralela no Sites.
