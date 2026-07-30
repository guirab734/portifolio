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
  { id: "inicio", timecode: "00:00" },
  { id: "sobre", timecode: "00:12" },
  { id: "projetos", timecode: "00:28" },
  { id: "stack", timecode: "00:51" },
  { id: "contato", timecode: "01:04" },
] as const;

export const VIDEOS = {
  hero: { arquivo: "/videos/hero.mp4", slot: "VÍDEO 01 — HERO", duracao: "10s · scrub" },
  projetos: { arquivo: "/videos/projetos.mp4", slot: "VÍDEO 03 — AMBIENTE", duracao: "12s · loop" },
  stack: { arquivo: "/videos/stack.mp4", slot: "VÍDEO 04 — ESTRUTURA", duracao: "6s · loop" },
  fecho: { arquivo: "/videos/fecho.mp4", slot: "VÍDEO 05 — FECHO", duracao: "8s · scrub" },
};

export const TIPOS = ["landing", "app", "programa"] as const;
export type Tipo = (typeof TIPOS)[number];

// Texto de resumo e papel vem do dicionário, na mesma ordem desta lista
export const PROJETOS: {
  titulo: string;
  tipo: Tipo;
  ano: string;
  stack: string[];
  repo?: string;
  demo?: string;
}[] = [
  { titulo: "Landing Um", tipo: "landing", ano: "2026", stack: ["Next.js", "Tailwind"], repo: "", demo: "" },
  { titulo: "Landing Dois", tipo: "landing", ano: "2025", stack: ["Astro", "Tailwind"], repo: "", demo: "" },
  { titulo: "App Um", tipo: "app", ano: "2026", stack: ["React", "Node.js", "PostgreSQL"], repo: "", demo: "" },
  { titulo: "App Dois", tipo: "app", ano: "2025", stack: ["React Native", "Expo"], repo: "", demo: "" },
  { titulo: "Programa Um", tipo: "programa", ano: "2025", stack: ["Python", "SQLite"], repo: "", demo: "" },
  { titulo: "Programa Dois", tipo: "programa", ano: "2025", stack: ["JavaScript", "API REST"], repo: "", demo: "" },
];

export const STACK = [
  ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  ["Node.js", "APIs REST", "PostgreSQL"],
  ["Git", "Vercel", "Figma"],
];
