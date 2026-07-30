"use client";

import { useEffect, useState } from "react";

type Ponto = { p: number; x: number; y: number; rot: number; esc: number };

/**
 * Trajetória em zigue-zague: entra à direita do nome, desliza para a esquerda
 * do retrato e segue alternando os lados até o fim. Os valores de p seguem onde
 * cada seção realmente cai no documento — o hero sozinho ocupa a primeira
 * metade, por ter 420vh. x e y são porcentagem da viewport.
 */
const ROTA: Ponto[] = [
  { p: 0.0, x: 74, y: 44, rot: -8, esc: 1 },
  { p: 0.42, x: 72, y: 60, rot: -5, esc: 0.95 },
  { p: 0.5, x: 50, y: 70, rot: 0, esc: 0.88 }, // travessia na virada do Hero
  { p: 0.55, x: 13, y: 44, rot: 7, esc: 1.04 },
  { p: 0.62, x: 13, y: 52, rot: 6, esc: 1.04 }, // parado à esquerda no Sobre
  { p: 0.66, x: 50, y: 62, rot: 0, esc: 0.88 },
  { p: 0.7, x: 81, y: 46, rot: -9, esc: 0.94 },
  { p: 0.78, x: 81, y: 56, rot: -8, esc: 0.94 }, // parado à direita nos Projetos
  { p: 0.82, x: 50, y: 64, rot: 0, esc: 0.88 },
  { p: 0.85, x: 12, y: 44, rot: 8, esc: 1.05 },
  { p: 0.9, x: 12, y: 50, rot: 7, esc: 1.05 }, // parado à esquerda na Stack
  { p: 0.94, x: 50, y: 60, rot: 0, esc: 0.88 },
  { p: 1.0, x: 78, y: 42, rot: -6, esc: 0.96 },
];

const suave = (t: number) => t * t * (3 - 2 * t);

function naRota(p: number) {
  const fim = ROTA.findIndex((ponto) => ponto.p >= p);
  if (fim <= 0) return ROTA[0];
  const a = ROTA[fim - 1];
  const b = ROTA[fim];
  const t = suave((p - a.p) / (b.p - a.p));
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    rot: a.rot + (b.rot - a.rot) * t,
    esc: a.esc + (b.esc - a.esc) * t,
  };
}

export function ComputadorFlutuante() {
  const [progresso, setProgresso] = useState(0);
  const [parado, setParado] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setParado(true);
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const { x, y, rot, esc } = parado ? ROTA[0] : naRota(progresso);

  // Some ao cruzar o miolo da tela, que é onde o texto vive
  const distanciaDoCentro = Math.abs(x - 50) / 50;
  const opacidade = 0.12 + distanciaDoCentro * 0.62;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-40 hidden lg:block"
      style={{
        transform: `translate(calc(${x}vw - 50%), calc(${y}vh - 50%)) rotate(${rot}deg) scale(${esc})`,
        opacity: opacidade,
        willChange: "transform, opacity",
      }}
    >
      <Janela />
    </div>
  );
}

function Janela() {
  // Larguras das linhas de código, em porcentagem, com a cor de cada trecho
  const linhas = [
    [
      ["18%", "var(--color-magenta)"],
      ["30%", "var(--color-lilac)"],
    ],
    [
      ["8%", "var(--color-lilac)"],
      ["44%", "var(--color-ultraviolet)"],
    ],
    [
      ["14%", "var(--color-ultraviolet)"],
      ["22%", "var(--color-lilac)"],
      ["16%", "var(--color-magenta)"],
    ],
    [["26%", "var(--color-lilac)"]],
    [
      ["12%", "var(--color-magenta)"],
      ["34%", "var(--color-lilac)"],
    ],
    [
      ["20%", "var(--color-ultraviolet)"],
      ["18%", "var(--color-lilac)"],
    ],
    [["10%", "var(--color-magenta)"]],
  ];

  return (
    <div className="w-[210px] drop-shadow-[0_18px_40px_rgba(123,43,249,0.28)]">
      <div className="overflow-hidden rounded-[6px] border border-lilac/25 bg-surface/90 backdrop-blur-[2px]">
        <div className="flex items-center gap-1.5 border-b border-lilac/15 px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-magenta/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-lilac/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-ultraviolet/70" />
        </div>

        <div className="flex flex-col gap-[5px] px-3 py-3">
          {linhas.map((linha, i) => (
            <div key={i} className="flex items-center gap-1.5" style={{ paddingLeft: i > 1 && i < 6 ? 10 : 0 }}>
              {linha.map(([largura, cor], j) => (
                <span
                  key={j}
                  className="h-[3px] rounded-full"
                  style={{ width: largura, backgroundColor: cor, opacity: 0.85 }}
                />
              ))}
              {i === linhas.length - 1 && (
                <span className="cursor-pisca h-[8px] w-[2px] bg-paper" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* pé do monitor */}
      <div className="mx-auto h-3 w-8 bg-gradient-to-b from-lilac/25 to-transparent" />
      <div className="mx-auto h-[2px] w-14 rounded-full bg-lilac/20" />
    </div>
  );
}
