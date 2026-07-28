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
};

export function ScrollVideo({
  src,
  mode = "ambient",
  slot,
  duration,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const host = hostRef.current;
    if (!video || !host || mode !== "scrub") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;

      // 0 quando o topo encosta na viewport, 1 quando a seção termina
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
  }, [mode, ready]);

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

  return (
    <div ref={hostRef} className={`h-full w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        loop={mode === "ambient"}
        autoPlay={mode === "ambient"}
        onLoadedMetadata={() => setReady(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
