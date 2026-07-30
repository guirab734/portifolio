"use client";

import Image from "next/image";
import { useIdioma } from "@/components/idioma";
import { PERFIL } from "@/lib/site-data";

export function Sobre() {
  const { t } = useIdioma();

  return (
    <section id="sobre" className="relative border-t border-lilac/10 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="reveal">
            <p className="font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
              {t.secoes.sobre}
            </p>

            {/* Entra dessaturado com uma camada ultravioleta para conversar com
                a paleta, e recupera a cor no hover. */}
            <figure className="group relative mt-8 aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src={PERFIL.foto}
                alt={`${PERFIL.nome} ${PERFIL.sobrenome}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale-[0.5] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-ultraviolet/25 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </figure>
          </div>

          <div className="reveal">
            <p className="font-display text-giga font-bold text-paper">
              {t.sobre.titulo}
            </p>
            <div className="mt-10 space-y-6 text-lede text-lilac">
              {t.sobre.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
