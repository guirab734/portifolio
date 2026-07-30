"use client";

import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { STACK, VIDEOS } from "@/lib/site-data";

export function Stack() {
  const { t } = useIdioma();

  return (
    <section id="stack" className="relative border-t border-lilac/10 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-24">
          <div>
            <h2 className="reveal font-display text-giga font-bold text-paper">
              {t.stack.titulo}
            </h2>

            <dl className="mt-16 space-y-12">
              {STACK.map((itens, i) => (
                <div key={i} className="reveal border-t border-lilac/10 pt-6">
                  <dt className="font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
                    {t.stack.grupos[i]}
                  </dt>
                  <dd className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    {itens.map((item) => (
                      <span key={item} className="text-xl text-paper md:text-2xl">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="parallax aspect-square">
            <ScrollVideo
              src={VIDEOS.stack.arquivo || undefined}
              mode="ambient"
              blend
              slot={VIDEOS.stack.slot}
              duration={VIDEOS.stack.duracao}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
