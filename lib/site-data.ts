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

export const TIPOS = ["web", "app", "landing", "programa"] as const;
export type Tipo = (typeof TIPOS)[number];

export type Projeto = {
  id: string;
  titulo: string;
  tipo: Tipo;
  ano: string;
  stack: string[];
  repo?: string;
  /** Site publicado. Aparece como "Ver ao vivo". */
  demo?: string;
  /** Demonstração isolada, com dados fictícios e somente consulta. */
  demonstracao?: boolean;
  /** APK ou link da loja. Aparece como "Baixar para Android". */
  android?: string;
  /** Captura em public/projetos. Sem ela o card mostra o espaço reservado. */
  imagem?: string;
  /** Ilustração conceitual, em vez de captura da interface. */
  imagemIlustrativa?: boolean;
  codigoPrivado?: boolean;
};

// Texto de resumo e papel vem do dicionário, na mesma ordem desta lista
export const PROJETOS: Projeto[] = [
  {
    id: "placas",
    titulo: "Guirab Placas",
    tipo: "web",
    ano: "2026",
    stack: ["React", "TypeScript", "QR Code", "NFC"],
    demo: "/demos/placas/index.html",
    demonstracao: true,
    imagem: "/projetos/placas.webp",
  },
  {
    id: "tiacris",
    titulo: "Recursos da Tia Cris",
    tipo: "web",
    ano: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "E-commerce"],
    demo: "https://www.recursosdatiacris.com.br",
    imagem: "/projetos/tiacris.webp",
  },
  {
    id: "ritmo",
    titulo: "Ritmo",
    tipo: "web",
    ano: "2026",
    stack: ["JavaScript", "CSS", "ES Modules"],
    demo: "/demos/ritmo/index.html",
    demonstracao: true,
    imagem: "/projetos/ritmo-v2.webp",
  },
  {
    id: "radar",
    titulo: "Radar de Impacto",
    tipo: "app",
    ano: "2026",
    stack: ["React Native", "Expo", "Acelerômetro", "GPS", "Node.js"],
    codigoPrivado: true,
    imagem: "/projetos/radar.webp",
    imagemIlustrativa: true,
    android: "",
  },
  {
    id: "cantinho",
    titulo: "Cantinho Pedidos",
    tipo: "app",
    ano: "2026",
    stack: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "JWT"],
    repo: "https://github.com/BrendoBarbosa25/Cantinho-Pedidos",
    imagem: "/projetos/cantinho.webp",
    imagemIlustrativa: true,
    android: "",
  },
  {
    id: "estoque",
    titulo: "Estoque de Hardware",
    tipo: "app",
    ano: "2026",
    stack: ["JavaScript", "Full-stack", "CRUD", "Dashboard"],
    repo: "https://github.com/bellatrixishere/Projeto-Final",
    imagem: "/projetos/estoque.webp",
    demo: "",
  },
  {
    id: "filazero",
    titulo: "Provisionamento de Unidades",
    tipo: "programa",
    ano: "2026",
    stack: ["Node.js", "JavaScript", "CLI", "ViaCEP", "Testes"],
    codigoPrivado: true,
    imagem: "/projetos/filazero.webp",
    imagemIlustrativa: true,
  },
  {
    id: "ggames",
    titulo: "GGAMES",
    tipo: "programa",
    ano: "2026",
    stack: ["C#", ".NET", "Desktop", "POO"],
    codigoPrivado: true,
    imagem: "/projetos/ggames.webp",
    imagemIlustrativa: true,
  },
  {
    id: "jovemtech",
    titulo: "Jovem Tech",
    tipo: "landing",
    ano: "2026",
    stack: ["HTML", "CSS", "JavaScript"],
    codigoPrivado: true,
    imagem: "/projetos/jovemtech.webp",
    demo: "https://jovemtech.guirab.com.br",
  },
  {
    id: "velora",
    titulo: "Velora",
    tipo: "landing",
    ano: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    codigoPrivado: true,
    imagem: "/projetos/velora.webp",
    demo: "https://industry-ten-psi.vercel.app",
  },
  {
    id: "brownies",
    titulo: "Brownies da Soso",
    tipo: "landing",
    ano: "2026",
    stack: ["HTML", "CSS"],
    codigoPrivado: true,
    imagem: "/projetos/brownies.webp",
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
