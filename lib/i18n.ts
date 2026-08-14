export type Idioma = "pt" | "en";

export const IDIOMAS: { codigo: Idioma; rotulo: string }[] = [
  { codigo: "pt", rotulo: "PT" },
  { codigo: "en", rotulo: "EN" },
];

export const T = {
  pt: {
    htmlLang: "pt-BR",
    papel: "Desenvolvedor Full-Stack",
    local: "Brasil",
    roleParaEntrar: "Role para entrar",
    heroFrase:
      "Construo interfaces que funcionam antes de impressionar, e que impressionam justamente por isso.",
    verProjetos: "Ver projetos",
    pularPara: "Pular para os projetos",

    secoes: {
      inicio: "Início",
      sobre: "Sobre",
      projetos: "Projetos",
      stack: "Stacks",
      contato: "Contato",
    },

    sobre: {
      titulo: "Aprendi programando o que eu queria existir.",
      paragrafos: [
        "Comecei mexendo em coisas que já existiam para entender por que funcionavam. Hoje construo do zero, e a curiosidade continua sendo a mesma.",
        "Trabalho principalmente com React e Next.js, mas o que me interessa de verdade é a parte que o usuário sente: o tempo de resposta, o que acontece quando algo dá errado, o detalhe que ninguém nota até faltar.",
      ],
      retrato: "Retrato",
      numeros: ["anos de experiência", "projetos feitos", "clientes"],
    },

    projetos: {
      selecionados: (n: number) => `${n} selecionados`,
      verMais: "Ver mais",
      verAoVivo: "Ver ao vivo",
      baixarAndroid: "Baixar para Android",
      codigo: "Código",
      emBreve: "Publicação em breve",
      tipos: { landing: "Landing Pages", app: "Apps", programa: "Programas" },
      vazio: "Ainda não tem projeto nesta categoria.",
      itens: {
        radar: {
          resumo:
            "Funciona como bússola e acompanha a localização em tempo real, mas o que ele faz de diferente é detectar impactos (quedas, pancadas, colisões) pelo acelerômetro do aparelho, registrando cada ocorrência num backend.",
          papel: "Mobile e integração",
        },
        cantinho: {
          resumo:
            "Gestão de comandas para restaurantes: o pedido sai do salão e chega à cozinha na hora, com cada função enxergando só a sua tela. Garçom e cozinha ficam sincronizados sem ninguém precisar gritar pedido.",
          papel: "Projeto em equipe",
        },
        estoque: {
          resumo:
            "Controle de estoque de peças de hardware: placas de vídeo, memórias, componentes. Cadastra, edita e remove itens, com um painel que mostra as métricas do estoque em tempo real.",
          papel: "Projeto em equipe",
        },
        ggames: {
          resumo:
            "Sistema de mesa para uma locadora de setups gamer. Controla o aluguel dos equipamentos, as devoluções e os upgrades de hardware. Começou como um CRUD em memória e virou um programa de verdade.",
          papel: "Desenvolvimento",
        },
        velora: {
          resumo:
            "Site de uma plataforma de recebimento por Pix, escrito para quem não é da área: explica o que um meio de pagamento faz sem jargão e deixa o visitante testar. Ele digita um valor, vê o QR Code nascer e acompanha a confirmação até o comprovante, tudo simulado no próprio navegador. Junto vem o Velora Sandbox, um app que instala pelo navegador, sem loja.",
          papel: "Front-end e identidade",
        },
        brownies: {
          resumo:
            "Cardápio digital de uma confeitaria de brownies, feito na base do HTML e CSS. Trabalho de curso, e é justamente por isso que ele mostra o começo do caminho.",
          papel: "Front-end",
        },
      },
    },

    stack: {
      titulo: "Ferramentas",
      grupos: ["Linguagens", "Front-end", "Back-end e dados", "Ferramentas"],
    },

    contato: {
      whatsapp: "Chamar no WhatsApp",
      mensagem: "Olá, Guilherme! Vi seu portfólio e queria conversar.",
    },

    trocarIdioma: "Mudar idioma para inglês",
  },

  en: {
    htmlLang: "en",
    papel: "Full-Stack Developer",
    local: "Brazil",
    roleParaEntrar: "Scroll to enter",
    heroFrase:
      "I build interfaces that work before they impress, and that impress precisely because of it.",
    verProjetos: "View work",
    pularPara: "Skip to projects",

    secoes: {
      inicio: "Start",
      sobre: "About",
      projetos: "Work",
      stack: "Stacks",
      contato: "Contact",
    },

    sobre: {
      titulo: "I learned to code by building what I wanted to exist.",
      paragrafos: [
        "I started by taking apart things that already worked, to understand why they did. Now I build from scratch, and the curiosity is still the same.",
        "I work mostly with React and Next.js, but what really interests me is the part the user feels: response time, what happens when something breaks, the detail nobody notices until it is missing.",
      ],
      retrato: "Portrait",
      numeros: ["years of experience", "projects built", "clients"],
    },

    projetos: {
      selecionados: (n: number) => `${n} selected`,
      verMais: "See more",
      verAoVivo: "Live site",
      baixarAndroid: "Download for Android",
      codigo: "Source",
      emBreve: "Publishing soon",
      tipos: { landing: "Landing Pages", app: "Apps", programa: "Software" },
      vazio: "No project in this category yet.",
      itens: {
        radar: {
          resumo:
            "It works as a compass and tracks location in real time, but what sets it apart is detecting impacts (falls, knocks, collisions) through the device accelerometer, logging every event to a backend.",
          papel: "Mobile and integration",
        },
        cantinho: {
          resumo:
            "Order management for restaurants: the order leaves the floor and reaches the kitchen right away, with each role seeing only its own screen. Waiter and kitchen stay in sync without anyone shouting an order.",
          papel: "Team project",
        },
        estoque: {
          resumo:
            "Inventory control for hardware parts: graphics cards, memory, components. Create, edit and remove items, with a panel showing stock metrics in real time.",
          papel: "Team project",
        },
        ggames: {
          resumo:
            "Desktop system for a gaming setup rental shop. It handles equipment rentals, returns and hardware upgrades. It started as an in-memory CRUD and grew into a real program.",
          papel: "Development",
        },
        velora: {
          resumo:
            "Site for a platform that takes payments over Pix, Brazil's instant payment system, written for people outside the field: it explains what a payment method does without jargon and lets the visitor try it. They type an amount, watch the QR code appear and follow the confirmation through to the receipt, all simulated in the browser. It ships with Velora Sandbox, an app that installs straight from the browser, no app store.",
          papel: "Front-end and identity",
        },
        brownies: {
          resumo:
            "Digital menu for a brownie shop, built on plain HTML and CSS. Coursework, and that is exactly why it shows where the path started.",
          papel: "Front-end",
        },
      },
    },

    stack: {
      titulo: "Tools",
      grupos: ["Languages", "Front-end", "Back-end & data", "Tooling"],
    },

    contato: {
      whatsapp: "Message on WhatsApp",
      mensagem: "Hi Guilherme! I saw your portfolio and would like to talk.",
    },

    trocarIdioma: "Switch language to Portuguese",
  },
} as const;

export type Dicionario = (typeof T)[Idioma];
