/**
 * Todo o conteúdo do site vive aqui. Editar este arquivo muda a página inteira,
 * sem mexer em componente nenhum.
 *
 * TODO: os campos marcados com PREENCHER são placeholders.
 */

export const PERFIL = {
  // PREENCHER: confirmar o nome completo.
  nome: "Guilherme",
  sobrenome: "Rabelo",
  papel: "Desenvolvedor Full-Stack",
  local: "Brasil",
  email: "guirab734@gmail.com",
  github: "https://github.com/guirab734",
  // PREENCHER: linkedin, se houver.
  linkedin: "",
  // Número no formato internacional, sem símbolos, como a API do WhatsApp exige.
  whatsapp: "5579999076521",
  whatsappMensagem: "Olá, Guilherme! Vi seu portfólio e queria conversar.",
};

/** Link da API oficial do WhatsApp, com a mensagem já preenchida. */
export const whatsappUrl = `https://wa.me/${PERFIL.whatsapp}?text=${encodeURIComponent(
  PERFIL.whatsappMensagem,
)}`;

export const SECTIONS = [
  { id: "inicio", label: "Início", timecode: "00:00" },
  { id: "sobre", label: "Sobre", timecode: "00:12" },
  { id: "projetos", label: "Projetos", timecode: "00:28" },
  { id: "stack", label: "Stack", timecode: "00:51" },
  { id: "contato", label: "Contato", timecode: "01:04" },
] as const;

/**
 * Cada vídeo gerado no Leonardo entra em /public/videos com o nome do campo
 * `arquivo`. Enquanto o arquivo não existir, o componente mostra o placeholder.
 */
export const VIDEOS = {
  hero: { arquivo: "/videos/hero.mp4", slot: "VÍDEO 01 — HERO", duracao: "10s · scrub" },
  transicao: { arquivo: "/videos/transicao.mp4", slot: "VÍDEO 02 — TRANSIÇÃO", duracao: "5s · scrub" },
  projetos: { arquivo: "/videos/projetos.mp4", slot: "VÍDEO 03 — AMBIENTE", duracao: "12s · loop" },
  stack: { arquivo: "/videos/stack.mp4", slot: "VÍDEO 04 — ESTRUTURA", duracao: "6s · loop" },
  fecho: { arquivo: "/videos/fecho.mp4", slot: "VÍDEO 05 — FECHO", duracao: "8s · scrub" },
};

export type Projeto = {
  titulo: string;
  resumo: string;
  papel: string;
  ano: string;
  stack: string[];
  repo?: string;
  demo?: string;
  imagem?: string;
};

// PREENCHER: trocar pelos projetos reais. Três é um bom número para começar —
// melhor três bem contados que oito pela metade.
export const PROJETOS: Projeto[] = [
  {
    titulo: "Projeto Um",
    resumo:
      "Uma frase sobre o problema que ele resolve e para quem. Não sobre a tecnologia — a stack aparece logo abaixo.",
    papel: "Concepção, front-end e deploy",
    ano: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repo: "",
    demo: "",
  },
  {
    titulo: "Projeto Dois",
    resumo:
      "O que ele faz e qual decisão de construção foi interessante. Recrutador lê isso em cinco segundos.",
    papel: "Full-stack",
    ano: "2025",
    stack: ["React", "Node.js", "PostgreSQL"],
    repo: "",
    demo: "",
  },
  {
    titulo: "Projeto Três",
    resumo:
      "Se for trabalho de faculdade ou pessoal, tudo bem dizer. Honestidade lê melhor que inflar.",
    papel: "Desenvolvimento",
    ano: "2025",
    stack: ["JavaScript", "API REST"],
    repo: "",
    demo: "",
  },
];

// PREENCHER: manter apenas o que você realmente usaria numa entrevista.
export const STACK = [
  { grupo: "Front-end", itens: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { grupo: "Back-end", itens: ["Node.js", "APIs REST", "PostgreSQL"] },
  { grupo: "Ferramentas", itens: ["Git", "Vercel", "Figma"] },
];
