"use client";

import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { VIDEOS } from "@/lib/site-data";

export function Transicao() {
  const { t } = useIdioma();

  return (
    <section className="relative h-[150vh] border-t border-lilac/10">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <div className="h-full w-full max-w-[520px]">
            <ScrollVideo
              src={VIDEOS.transicao.arquivo || undefined}
              mode="scrub"
              blend
              slot={VIDEOS.transicao.slot}
              duration={VIDEOS.transicao.duracao}
            />
          </div>
        </div>

        <p className="reveal relative max-w-2xl px-6 text-center font-display text-giga font-bold text-paper">
          {t.transicao}
        </p>
      </div>
    </section>
  );
}
