"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "scrub" | "ambient";

type Props = {
  /** Caminho do arquivo em /public/videos. Sem isso, renderiza o placeholder. */
  src?: string;
  /** "scrub": o scroll controla o tempo do vídeo. "ambient": loop contínuo. */
  mode?: Mode;
  /** Identificação mostrada no placeholder enquanto o vídeo não existe. */
  slot: string;
  duration: string;
  className?: string;
  /**
   * Funde o vídeo ao fundo em vez de exibi-lo como um retângulo. O modo
   * "lighten" descarta tudo que for mais escuro que a página, então o preto do
   * clipe some e sobra apenas o objeto iluminado; a máscara radial dissolve as
   * quatro bordas. Só faz sentido em clipes de fundo preto com assunto claro.
   */
  blend?: boolean;
  /** Baixa o arquivo inteiro já na carga. Reservar para o que abre a página. */
  prioridade?: boolean;
};

export function ScrollVideo({
  src,
  mode = "ambient",
  slot,
  duration,
  className = "",
  blend = false,
  prioridade = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const host = hostRef.current;
    if (!video || !host || !src || mode !== "scrub") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // O percurso é dado pela seção inteira, não pelo contêiner do vídeo — este
    // vive dentro do sticky e por isso mede apenas uma viewport.
    const track = host.closest("section") ?? host;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;

      // 0 quando o topo da seção encosta na viewport, 1 quando ela termina
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const target = progress * video.duration;

      // Evita reposicionar o decoder por diferenças imperceptíveis
      if (Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target;
      }
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
  }, [mode, ready, src]);

  if (!src) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-surface ${className}`}
      >
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_50%_40%,var(--color-ultraviolet)_0%,transparent_62%)] opacity-25" />
        <div className="relative z-10 text-center font-mono text-[0.7rem] tracking-[0.28em] text-lilac/70 uppercase">
          <div className="mb-2 text-lilac">{slot}</div>
          <div>{duration}</div>
        </div>
        <div className="absolute inset-4 border border-dashed border-lilac/20" />
      </div>
    );
  }

  // Opaca no miolo para preservar o assunto, dissolvendo só nas quinas — é lá
  // que sobram reflexos de lente do material bruto.
  const mascara =
    "radial-gradient(ellipse 78% 78% at 50% 50%, #000 52%, transparent 82%)";

  return (
    <div ref={hostRef} className={`h-full w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload={prioridade ? "auto" : "metadata"}
        loop={mode === "ambient"}
        autoPlay={mode === "ambient"}
        onLoadedMetadata={() => setReady(true)}
        className="h-full w-full object-cover"
        style={
          blend
            ? {
                mixBlendMode: "lighten",
                maskImage: mascara,
                WebkitMaskImage: mascara,
              }
            : undefined
        }
      />
    </div>
  );
}
