import { T, type Idioma } from "@/lib/i18n";

export const PERFIL = {
  nome: "Guilherme",
  sobrenome: "Rabelo",
  foto: "/foto.webp",
  email: "guirab734@gmail.com",
  github: "https://github.com/guirab734",
  linkedin: "https://www.linkedin.com/in/guirab/",
  whatsapp: "5579999076521",
};

export function whatsappUrl(idioma: Idioma) {
  return `https://wa.me/${PERFIL.whatsapp}?text=${encodeURIComponent(
    T[idioma].contato.mensagem,
  )}`;
}

export const SECTIONS = [
  { id: "inicio" },
  { id: "sobre" },
  { id: "projetos" },
  { id: "stack" },
  { id: "contato" },
] as const;

export const VIDEOS = {
  hero: { arquivo: "/videos/hero.mp4", slot: "VÍDEO 01 · HERO", duracao: "10s · scrub" },
  projetos: { arquivo: "/videos/projetos.mp4", slot: "VÍDEO 03 · AMBIENTE", duracao: "12s · loop" },
  stack: { arquivo: "/videos/stack.mp4", slot: "VÍDEO 04 · ESTRUTURA", duracao: "6s · loop" },
  fecho: { arquivo: "/videos/fecho.mp4", slot: "VÍDEO 05 · FECHO", duracao: "8s · scrub" },
};

export const TIPOS = ["landing", "app", "programa"] as const;
export type Tipo = (typeof TIPOS)[number];

export type Projeto = {
  id: string;
  titulo: string;
  tipo: Tipo;
  ano: string;
  stack: string[];
  repo: string;
  /** Site publicado. Aparece como "Ver ao vivo". */
  demo?: string;
  /** APK ou link da loja. Aparece como "Baixar para Android". */
  android?: string;
  /** Captura em public/projetos. Sem ela o card mostra o espaço reservado. */
  imagem?: string;
};

// Texto de resumo e papel vem do dicionário, na mesma ordem desta lista
export const PROJETOS: Projeto[] = [
  {
    id: "radar",
    titulo: "Radar de Impacto",
    tipo: "app",
    ano: "2026",
    stack: ["React Native", "Expo", "Acelerômetro", "GPS", "Node.js"],
    repo: "https://github.com/guirab734/react-nation-bussola",
    android: "",
  },
  {
    id: "cantinho",
    titulo: "Cantinho Pedidos",
    tipo: "app",
    ano: "2026",
    stack: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "JWT"],
    repo: "https://github.com/BrendoBarbosa25/Cantinho-Pedidos",
    android: "",
  },
  {
    id: "estoque",
    titulo: "Estoque de Hardware",
    tipo: "app",
    ano: "2026",
    stack: ["JavaScript", "Full-stack", "CRUD", "Dashboard"],
    repo: "https://github.com/bellatrixishere/Projeto-Final",
    demo: "",
  },
  {
    id: "ggames",
    titulo: "GGAMES",
    tipo: "programa",
    ano: "2026",
    stack: ["C#", ".NET", "Desktop", "POO"],
    repo: "https://github.com/guirab734/projeto-c",
  },
  {
    id: "brownies",
    titulo: "Brownies da Soso",
    tipo: "landing",
    ano: "2026",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/guirab734/Brownies-da-soso-card-pio",
    demo: "",
  },
];

export const STACK = [
  ["TypeScript", "JavaScript", "C#", "C++", "Python"],
  ["React", "React Native", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  ["Node.js", "Express", "APIs REST", "Supabase", "PostgreSQL", "MySQL", "MongoDB"],
  ["Git", "Vercel", "Docker", "Expo", "Figma"],
];

export const NUMEROS = [{ valor: "6" }, { valor: "15" }, { valor: "12" }];
