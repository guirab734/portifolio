"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { IDIOMAS, T, type Dicionario, type Idioma } from "@/lib/i18n";

type Contexto = { idioma: Idioma; t: Dicionario; trocar: (i: Idioma) => void };

const IdiomaContext = createContext<Contexto | null>(null);
const CHAVE = "guirab:idioma";

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>("pt");

  // A escolha só é lida depois da hidratação: no servidor não existe
  // localStorage, e divergir do HTML servido quebraria a árvore.
  useEffect(() => {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === "pt" || salvo === "en") {
      setIdioma(salvo);
      return;
    }
    if (!navigator.language.toLowerCase().startsWith("pt")) setIdioma("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = T[idioma].htmlLang;
  }, [idioma]);

  const trocar = useCallback((i: Idioma) => {
    setIdioma(i);
    localStorage.setItem(CHAVE, i);
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
