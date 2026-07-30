"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Interpola a rolagem para ela chegar com inércia em vez de aos saltos da roda
 * do mouse. Fica fora quando o sistema pede menos movimento — aí a rolagem
 * nativa é a resposta certa.
 */
export function ScrollSuave() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      // desacelera no fim, sem repique
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    let frame = requestAnimationFrame(function loop(tempo) {
      lenis.raf(tempo);
      frame = requestAnimationFrame(loop);
    });

    // Âncoras precisam passar pelo Lenis, senão o salto ignora a interpolação
    const onClick = (evento: MouseEvent) => {
      const alvo = (evento.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const id = alvo?.getAttribute("href");
      if (!id || id === "#") return;
      const destino = document.querySelector(id);
      if (!destino) return;
      evento.preventDefault();
      lenis.scrollTo(destino as HTMLElement);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
