"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Conta de zero até o valor quando o número entra na tela. Dispara uma vez só —
 * repetir a cada passagem viraria distração.
 */
export function NumeroAnimado({ valor }: { valor: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAtual(valor);
      return;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observer.disconnect();

        const duracao = 1100;
        const inicio = performance.now();

        const passo = (agora: number) => {
          const t = Math.min((agora - inicio) / duracao, 1);
          // desacelera no fim, para o número assentar em vez de estancar
          setAtual(Math.round(valor * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(passo);
        };

        frame = requestAnimationFrame(passo);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [valor]);

  return (
    <span ref={ref} className="tabular-nums">
      {atual}
    </span>
  );
}
