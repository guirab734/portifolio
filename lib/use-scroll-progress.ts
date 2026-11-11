"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Progresso de 0 a 1 do quanto uma seção já passou pela viewport. 0 quando o
 * topo dela encosta no alto da tela, 1 quando o fim dela chega lá.
 *
 * Com `prefers-reduced-motion` devolve 1 direto: quem pede menos movimento vê
 * o estado final, não a animação.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.min(Math.max(-rect.top / scrollable, 0), 1));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    frame = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return { ref, progress: reducedMotion ? 1 : progress };
}

/** Reescala um trecho de `progress` para 0..1, para encadear etapas. */
export function fatia(progress: number, inicio: number, fim: number) {
  return Math.min(Math.max((progress - inicio) / (fim - inicio), 0), 1);
}
