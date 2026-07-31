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
      "Construo interfaces que funcionam antes de impressionar — e que impressionam justamente por isso.",
    verProjetos: "Ver projetos",
    pularPara: "Pular para os projetos",

    secoes: {
      inicio: "Início",
      sobre: "Sobre",
      projetos: "Projetos",
      stack: "Stack",
      contato: "Contato",
    },

    sobre: {
      titulo: "Aprendi programando o que eu queria existir.",
      paragrafos: [
        "Comecei mexendo em coisas que já existiam para entender por que funcionavam. Hoje construo do zero — e a curiosidade continua sendo a mesma.",
        "Trabalho principalmente com React e Next.js, mas o que me interessa de verdade é a parte que o usuário sente: o tempo de resposta, o que acontece quando algo dá errado, o detalhe que ninguém nota até faltar.",
      ],
      retrato: "Retrato",
      numeros: ["anos de experiência", "projetos feitos", "clientes"],
    },

    projetos: {
      selecionados: (n: number) => `${n} selecionados`,
      verAoVivo: "Ver ao vivo",
      codigo: "Código",
      tipos: { landing: "Landing Pages", app: "Apps", programa: "Programas" },
      vazio: "Ainda não tem projeto nesta categoria.",
      itens: [
        {
          resumo:
            "Uma frase sobre o problema que ele resolve e para quem. Não sobre a tecnologia — a stack aparece logo abaixo.",
          papel: "Concepção, front-end e deploy",
        },
        {
          resumo:
            "Uma página de conversão: o que ela vende e qual resultado deu. Número convence mais que adjetivo.",
          papel: "Design e front-end",
        },
        {
          resumo:
            "O que o app faz e qual decisão de construção foi interessante. Recrutador lê isso em cinco segundos.",
          papel: "Full-stack",
        },
        {
          resumo:
            "Um app com login e dados de verdade. Diga onde ele está publicado e quantas pessoas usam.",
          papel: "Full-stack",
        },
        {
          resumo:
            "Um programa de desktop ou script que resolveu um problema seu. Vale contar o que te levou a escrever.",
          papel: "Desenvolvimento",
        },
        {
          resumo:
            "Se for trabalho de faculdade ou pessoal, tudo bem dizer. Honestidade lê melhor que inflar.",
          papel: "Desenvolvimento",
        },
      ],
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
      "I build interfaces that work before they impress — and that impress precisely because of it.",
    verProjetos: "View work",
    pularPara: "Skip to projects",

    secoes: {
      inicio: "Start",
      sobre: "About",
      projetos: "Work",
      stack: "Stack",
      contato: "Contact",
    },

    sobre: {
      titulo: "I learned to code by building what I wanted to exist.",
      paragrafos: [
        "I started by taking apart things that already worked, to understand why they did. Now I build from scratch — and the curiosity is still the same.",
        "I work mostly with React and Next.js, but what really interests me is the part the user feels: response time, what happens when something breaks, the detail nobody notices until it is missing.",
      ],
      retrato: "Portrait",
      numeros: ["years of experience", "projects built", "clients"],
    },

    projetos: {
      selecionados: (n: number) => `${n} selected`,
      verAoVivo: "Live site",
      codigo: "Source",
      tipos: { landing: "Landing Pages", app: "Apps", programa: "Software" },
      vazio: "No project in this category yet.",
      itens: [
        {
          resumo:
            "One sentence about the problem it solves and who for. Not about the technology — the stack shows up right below.",
          papel: "Concept, front-end and deploy",
        },
        {
          resumo:
            "A conversion page: what it sells and what result it got. A number convinces more than an adjective.",
          papel: "Design and front-end",
        },
        {
          resumo:
            "What the app does and which build decision was interesting. A recruiter reads this in five seconds.",
          papel: "Full-stack",
        },
        {
          resumo:
            "An app with real logins and data. Say where it is deployed and how many people use it.",
          papel: "Full-stack",
        },
        {
          resumo:
            "A desktop program or script that solved a problem of yours. Worth telling what led you to write it.",
          papel: "Development",
        },
        {
          resumo:
            "If it is coursework or a personal project, say so. Honesty reads better than padding.",
          papel: "Development",
        },
      ],
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
