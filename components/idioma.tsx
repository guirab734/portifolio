"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { IDIOMAS, T, type Dicionario, type Idioma } from "@/lib/i18n";

type Contexto = { idioma: Idioma; t: Dicionario; trocar: (i: Idioma) => void };

const IdiomaContext = createContext<Contexto | null>(null);
const CHAVE = "guirab:idioma";
let escolhaLocal: Idioma | null = null;

function lerIdioma(): Idioma {
  let salvo: string | null = escolhaLocal;
  try { salvo = localStorage.getItem(CHAVE) ?? escolhaLocal; } catch {}
  if (salvo === "pt" || salvo === "en") return salvo;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function acompanharIdioma(onChange: () => void) {
  const eventos = ["storage", "languagechange", CHAVE];
  eventos.forEach((evento) => window.addEventListener(evento, onChange));
  return () => eventos.forEach((evento) => window.removeEventListener(evento, onChange));
}

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const idioma = useSyncExternalStore(acompanharIdioma, lerIdioma, () => "pt" as Idioma);

  useEffect(() => {
    document.documentElement.lang = T[idioma].htmlLang;
  }, [idioma]);

  const trocar = useCallback((i: Idioma) => {
    escolhaLocal = i;
    try { localStorage.setItem(CHAVE, i); } catch {}
    window.dispatchEvent(new Event(CHAVE));
  }, []);

  return (
    <IdiomaContext.Provider value={{ idioma, t: T[idioma], trocar }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdioma() {
  const ctx = useContext(IdiomaContext);
  if (!ctx) throw new Error("useIdioma precisa do IdiomaProvider acima na árvore");
  return ctx;
}

export function BotaoIdioma() {
  const { idioma, trocar } = useIdioma();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="fixed top-5 right-5 z-[65] flex items-center gap-px border border-lilac/20 bg-void/70 backdrop-blur-sm"
    >
      {IDIOMAS.map(({ codigo, rotulo }) => {
        const ativo = idioma === codigo;
        return (
          <button
            key={codigo}
            type="button"
            onClick={() => trocar(codigo)}
            aria-pressed={ativo}
            className={`px-3 py-2 font-mono text-[0.65rem] tracking-[0.18em] transition-colors ${
              ativo
                ? "bg-ultraviolet text-paper"
                : "text-lilac/60 hover:text-paper"
            }`}
          >
            {rotulo}
          </button>
        );
      })}
    </div>
  );
}
