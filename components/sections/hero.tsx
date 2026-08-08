"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { PERFIL, VIDEOS } from "@/lib/site-data";
import { fatia, useScrollProgress } from "@/lib/use-scroll-progress";

const IMG = { w: 2752, h: 1536 };

// Cantos da tela dentro de monitor.webp, em porcentagem da imagem. O monitor
// está levemente girado, então o lado direito começa mais abaixo que o esquerdo.
const TELA = [
  [37.4, 29.6],
  [63.2, 31.4],
  [63.2, 57.8],
  [37.4, 60.5],
] as const;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function Hero() {
  const { t } = useIdioma();
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const [vp, setVp] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const medir = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  const zoom = fatia(progress, 0, 0.6);
  const abertura = fatia(progress, 0.42, 0.72);
  const titulo = fatia(progress, 0.66, 0.86);

  // A foto já enquadra o monitor de longe, então a sequência só amplia: começa
  // no tamanho natural dela e vai até a tela dominar a viewport.
  const escala = 1 + Math.pow(zoom, 2) * 3.1;

  /**
   * `object-cover` recorta a foto para preencher a viewport, então uma
   * porcentagem medida na imagem não cai no mesmo ponto da tela. Aqui refazemos
   * a conta do cover para converter os cantos da tela em coordenadas da
   * viewport. Sem isso o vídeo encaixa torto em telas de proporção diferente.
   */
  const paraViewport = ([x, y]: readonly [number, number]) => {
    if (!vp.w || !vp.h) return [x, y] as const;
    const cover = Math.max(vp.w / IMG.w, vp.h / IMG.h);
    const larguraReal = IMG.w * cover;
    const alturaReal = IMG.h * cover;
    const sobraX = (larguraReal - vp.w) / 2;
    const sobraY = (alturaReal - vp.h) / 2;
    return [
      ((x / 100) * larguraReal - sobraX) / vp.w * 100,
      ((y / 100) * alturaReal - sobraY) / vp.h * 100,
    ] as const;
  };

  // A tela abre até virar a viewport inteira, sem trocar de elemento
  const recorte = TELA.map((canto, i) => {
    const [x, y] = paraViewport(canto);
    const destino = [
      [0, 0],
      [100, 0],
      [100, 100],
      [0, 100],
    ][i];
    return `${lerp(x, destino[0], abertura).toFixed(2)}% ${lerp(y, destino[1], abertura).toFixed(2)}%`;
  }).join(", ");

  return (
    <section ref={ref} id="inicio" className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="relative h-full w-full will-change-transform"
            style={{ transform: `scale(${escala})` }}
          >
            <Image
              src="/monitor.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ opacity: 1 - abertura }}
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `polygon(${recorte})` }}
            >
              <ScrollVideo
                src={VIDEOS.hero.arquivo || undefined}
                mode="scrub"
                prioridade
                slot={VIDEOS.hero.slot}
                duration={VIDEOS.hero.duracao}
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/20"
          style={{ opacity: titulo }}
        />

        <div
          className="relative flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-10"
          style={{ opacity: titulo }}
        >
          <header className="flex items-start justify-between font-mono text-[0.7rem] tracking-[0.22em] text-lilac/70 uppercase">
            <span>guirab.com.br</span>
            <span className="hidden sm:block">{t.local}</span>
          </header>

          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
              {t.papel}
            </p>
            <h1 className="font-display text-mega font-extrabold text-paper">
              {PERFIL.nome}
              <br />
              <span className="text-ultraviolet">{PERFIL.sobrenome}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lede text-lilac">{t.heroFrase}</p>
          </div>

          <footer>
            <a
              href="#projetos"
              className="group flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.22em] text-lilac uppercase transition-colors hover:text-paper"
            >
              <span className="inline-block h-8 w-px bg-lilac/40 transition-colors group-hover:bg-magenta" />
              {t.verProjetos}
            </a>
          </footer>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] tracking-[0.3em] text-lilac/70 uppercase"
          style={{ opacity: 1 - fatia(progress, 0, 0.12) }}
        >
          {t.roleParaEntrar}
        </div>
      </div>
    </section>
  );
}
