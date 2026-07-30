"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "@/components/idioma";
import { SECTIONS } from "@/lib/site-data";

type SectionId = (typeof SECTIONS)[number]["id"];

/**
 * Navegação lateral em forma de timeline: o site é movido a vídeo, então a
 * régua de progresso usa o mesmo vocabulário. Os marcadores são âncoras reais.
 */
export function Timeline() {
  const { t } = useIdioma();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<SectionId>(SECTIONS[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      const linha = window.innerHeight / 3;
      let atual: SectionId = SECTIONS[0].id;
      for (const secao of SECTIONS) {
        const el = document.getElementById(secao.id);
        if (el && el.getBoundingClientRect().top <= linha) atual = secao.id;
      }
      setActive(atual);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label={t.secoes.inicio}
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
    >
      <ol className="relative flex flex-col gap-7 border-l border-lilac/15 pl-5">
        <span
          aria-hidden
          className="absolute -left-px h-10 w-[2px] bg-magenta transition-[top] duration-150 ease-out"
          style={{ top: `calc(${progress * 100}% - 20px)` }}
        />
        {SECTIONS.map((secao) => {
          const atual = active === secao.id;
          return (
            <li key={secao.id}>
              <a
                href={`#${secao.id}`}
                aria-current={atual ? "true" : undefined}
                className="group flex items-baseline gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase"
              >
                <span
                  className={
                    atual ? "text-magenta" : "text-lilac/40 transition-colors group-hover:text-lilac"
                  }
                >
                  {secao.timecode}
                </span>
                <span
                  className={
                    atual ? "text-paper" : "text-lilac/40 transition-colors group-hover:text-lilac"
                  }
                >
                  {t.secoes[secao.id]}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
