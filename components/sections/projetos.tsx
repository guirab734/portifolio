"use client";

import { useState } from "react";
import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { PROJETOS, TIPOS, VIDEOS, type Tipo } from "@/lib/site-data";

export function Projetos() {
  const { t } = useIdioma();
  const [tipo, setTipo] = useState<Tipo>("landing");

  // O texto vem do dicionário pelo índice da lista completa, então o índice
  // original tem de sobreviver ao filtro.
  const lista = PROJETOS.map((p, i) => ({ ...p, i })).filter((p) => p.tipo === tipo);

  return (
    <section id="projetos" className="relative border-t border-lilac/10">
      {/* Ambiente ao fundo, bem apagado: dá textura sem disputar com a leitura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="parallax h-[112%] w-full opacity-[0.34]">
          <ScrollVideo
            src={VIDEOS.projetos.arquivo || undefined}
            mode="ambient"
            slot={VIDEOS.projetos.slot}
            duration={VIDEOS.projetos.duracao}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
        <header className="reveal flex items-baseline justify-between gap-6">
          <h2 className="font-display text-giga font-bold text-paper">
            {t.secoes.projetos}
          </h2>
          <span className="font-mono text-[0.7rem] tracking-[0.22em] text-lilac/60 uppercase">
            {t.projetos.selecionados(lista.length)}
          </span>
        </header>

        <div
          role="group"
          aria-label={t.secoes.projetos}
          className="reveal mt-12 flex flex-wrap gap-px border-b border-lilac/15"
        >
          {TIPOS.map((valor) => {
            const ativo = tipo === valor;
            return (
              <button
                key={valor}
                type="button"
                onClick={() => setTipo(valor)}
                aria-pressed={ativo}
                className={`-mb-px border-b-2 px-5 py-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${
                  ativo
                    ? "border-magenta text-paper"
                    : "border-transparent text-lilac/50 hover:text-lilac"
                }`}
              >
                {t.projetos.tipos[valor]}
              </button>
            );
          })}
        </div>

        {lista.length === 0 ? (
          <p className="py-20 text-lede text-lilac/60">{t.projetos.vazio}</p>
        ) : (
          <ul>
            {lista.map((projeto) => {
              const texto = t.projetos.itens[projeto.i];
              return (
                <li key={projeto.titulo} className="group border-b border-lilac/10">
                  <article className="grid gap-6 py-10 md:grid-cols-[1fr_2fr] md:gap-12 md:py-14">
                    <div className="flex flex-col gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-lilac/60 uppercase">
                      <span className="text-magenta">{projeto.ano}</span>
                      <span>{texto?.papel}</span>
                    </div>

                    <div>
                      <h3 className="font-display text-3xl font-bold text-paper transition-colors group-hover:text-ultraviolet md:text-5xl">
                        {projeto.titulo}
                      </h3>
                      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-lilac">
                        {texto?.resumo}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {projeto.stack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-lilac/20 px-3 py-1 font-mono text-[0.65rem] tracking-[0.15em] text-lilac uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(projeto.repo || projeto.demo) && (
                        <div className="mt-8 flex gap-8">
                          {projeto.demo && (
                            <a
                              href={projeto.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[0.7rem] tracking-[0.2em] text-paper uppercase underline decoration-magenta decoration-2 underline-offset-8 transition-colors hover:text-magenta"
                            >
                              {t.projetos.verAoVivo}
                            </a>
                          )}
                          {projeto.repo && (
                            <a
                              href={projeto.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[0.7rem] tracking-[0.2em] text-lilac uppercase transition-colors hover:text-paper"
                            >
                              {t.projetos.codigo}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
