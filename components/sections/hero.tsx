"use client";

import Image from "next/image";
import { ScrollVideo } from "@/components/scroll-video";
import { useIdioma } from "@/components/idioma";
import { PERFIL, VIDEOS } from "@/lib/site-data";
import { fatia, useScrollProgress } from "@/lib/use-scroll-progress";

// Cantos da tela dentro de monitor.webp, medidos na imagem. O monitor está
// levemente girado, então o lado direito começa mais abaixo que o esquerdo.
const TELA = [
  [21.9, 8.2],
  [77.4, 12.4],
  [77.4, 67.2],
  [21.9, 70.0],
] as const;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const MASCARA_MONITOR =
  "radial-gradient(ellipse 74% 80% at 50% 48%, #000 58%, transparent 94%)";

export function Hero() {
  const { t } = useIdioma();
  const { ref, progress } = useScrollProgress<HTMLElement>();

  const zoom = fatia(progress, 0, 0.6);
  const abertura = fatia(progress, 0.42, 0.72);
  const ambiente = 1 - fatia(progress, 0.1, 0.5);
  const titulo = fatia(progress, 0.66, 0.86);

  const escala = 0.34 + Math.pow(zoom, 2) * 2.5;

  // A tela abre até virar a viewport inteira, sem trocar de elemento
  const recorte = TELA.map(([x, y], i) => {
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
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,#141024_0%,#09070f_60%)]"
          style={{ opacity: ambiente }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative aspect-[2752/1536] w-[72vw] max-w-[1240px] will-change-transform"
            style={{ transform: `scale(${escala})` }}
          >
            <Image
              src="/monitor.webp"
              alt=""
              fill
              priority
              sizes="72vw"
              className="object-contain"
              style={{
                opacity: 1 - abertura,
                // O preto da foto não é o preto da página: sem dissolver as
                // bordas, o retângulo da imagem fica visível sobre o fundo.
                maskImage: MASCARA_MONITOR,
                WebkitMaskImage: MASCARA_MONITOR,
              }}
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `polygon(${recorte})` }}
            >
              <ScrollVideo
                src={VIDEOS.hero.arquivo || undefined}
                mode="scrub"
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
