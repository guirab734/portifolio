"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { PROJETOS, TIPOS, VIDEOS, type Projeto, type Tipo } from "@/lib/site-data";

export function Projetos() {
  const { t } = useIdioma();
  const [tipo, setTipo] = useState<Tipo>("app");

  const lista = PROJETOS.filter((p) => p.tipo === tipo);

  return (
    <section id="projetos" className="relative border-t border-lilac/10">
      {/* Ambiente ao fundo, apagado: dá textura sem disputar com a leitura */}
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
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {lista.map((projeto) => (
              <Card key={projeto.id} projeto={projeto} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Card({ projeto }: { projeto: Projeto }) {
  const { t } = useIdioma();
  const [aberto, setAberto] = useState(false);
  const texto = t.projetos.itens[projeto.id as keyof typeof t.projetos.itens];

  // O destino do "ver mais" muda com o tipo: app baixa, web abre, resto vai ao código
  const principal = projeto.android
    ? { href: projeto.android, rotulo: t.projetos.baixarAndroid }
    : projeto.demo
      ? { href: projeto.demo, rotulo: t.projetos.verAoVivo }
      : null;

  return (
    <li className="group overflow-hidden border border-lilac/15 bg-surface/40 transition-colors hover:border-ultraviolet/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-void">
        {projeto.imagem ? (
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,var(--color-ultraviolet)_0%,transparent_65%)] opacity-20" />
            <span className="relative font-display text-3xl font-bold text-lilac/25">
              {projeto.titulo}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-paper">
          {projeto.titulo}
        </h3>
        <p className="mt-1 font-mono text-[0.65rem] tracking-[0.2em] text-magenta uppercase">
          {texto?.papel} · {projeto.ano}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {projeto.stack.map((tech) => (
            <span
              key={tech}
              className="border border-lilac/20 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.12em] text-lilac uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {aberto && (
          <p className="mt-5 text-[0.95rem] leading-relaxed text-lilac">
            {texto?.resumo}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            className="border border-ultraviolet/60 px-4 py-2 font-mono text-[0.65rem] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-ultraviolet"
          >
            {t.projetos.verMais}
          </button>

          {principal ? (
            <a
              href={principal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.18em] text-paper uppercase underline decoration-magenta decoration-2 underline-offset-8 transition-colors hover:text-magenta"
            >
              {principal.rotulo}
            </a>
          ) : (
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-lilac/40 uppercase">
              {t.projetos.emBreve}
            </span>
          )}

          <a
            href={projeto.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-mono text-[0.65rem] tracking-[0.18em] text-lilac uppercase transition-colors hover:text-paper"
          >
            {t.projetos.codigo}
          </a>
        </div>
      </div>
    </li>
  );
}
