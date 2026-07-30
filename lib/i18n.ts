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
    },

    transicao: "O que eu construí até agora.",

    projetos: {
      selecionados: (n: number) => `${n} selecionados`,
      verAoVivo: "Ver ao vivo",
      codigo: "Código",
      itens: [
        {
          resumo:
            "Uma frase sobre o problema que ele resolve e para quem. Não sobre a tecnologia — a stack aparece logo abaixo.",
          papel: "Concepção, front-end e deploy",
        },
        {
          resumo:
            "O que ele faz e qual decisão de construção foi interessante. Recrutador lê isso em cinco segundos.",
          papel: "Full-stack",
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
      grupos: ["Front-end", "Back-end", "Ferramentas"],
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
    },

    transicao: "What I have built so far.",

    projetos: {
      selecionados: (n: number) => `${n} selected`,
      verAoVivo: "Live site",
      codigo: "Source",
      itens: [
        {
          resumo:
            "One sentence about the problem it solves and who for. Not about the technology — the stack shows up right below.",
          papel: "Concept, front-end and deploy",
        },
        {
          resumo:
            "What it does and which build decision was interesting. A recruiter reads this in five seconds.",
          papel: "Full-stack",
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
      grupos: ["Front-end", "Back-end", "Tooling"],
    },

    contato: {
      whatsapp: "Message on WhatsApp",
      mensagem: "Hi Guilherme! I saw your portfolio and would like to talk.",
    },

    trocarIdioma: "Switch language to Portuguese",
  },
} as const;

export type Dicionario = (typeof T)[Idioma];
