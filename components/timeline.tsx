"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/site-data";

/**
 * Navegação lateral em forma de timeline: o site é movido a vídeo, então a
 * régua de progresso usa o mesmo vocabulário. Os marcadores são âncoras reais,
 * não enfeite — cada um leva à sua seção.
 */
type SectionId = (typeof SECTIONS)[number]["id"];

export function Timeline() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<SectionId>(SECTIONS[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      // A seção ativa é a última cujo topo já passou de um terço da tela
      const line = window.innerHeight / 3;
      let current: SectionId = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
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
      aria-label="Seções da página"
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
    >
      <ol className="relative flex flex-col gap-7 border-l border-lilac/15 pl-5">
        {/* playhead */}
        <span
          aria-hidden
          className="absolute -left-px h-10 w-[2px] bg-magenta transition-[top] duration-150 ease-out"
          style={{ top: `calc(${progress * 100}% - 20px)` }}
        />
        {SECTIONS.map((section) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className="group flex items-baseline gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase"
              >
                <span
                  className={
                    current
                      ? "text-magenta"
                      : "text-lilac/40 transition-colors group-hover:text-lilac"
                  }
                >
                  {section.timecode}
                </span>
                <span
                  className={
                    current
                      ? "text-paper"
                      : "text-lilac/40 transition-colors group-hover:text-lilac"
                  }
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
