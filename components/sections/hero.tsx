"use client";

import { ScrollVideo } from "@/components/scroll-video";
import { PERFIL, VIDEOS } from "@/lib/site-data";
import { fatia, useScrollProgress } from "@/lib/use-scroll-progress";

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLElement>();

  // A abertura acontece em etapas encadeadas: o monitor cresce até a tela
  // ocupar tudo, a moldura se dissolve e só então o nome entra.
  const zoom = fatia(progress, 0, 0.62);
  const moldura = 1 - fatia(progress, 0.4, 0.6);
  const ambiente = 1 - fatia(progress, 0.1, 0.5);
  const titulo = fatia(progress, 0.62, 0.82);

  // Curva de aceleração: começa lento, acelera na entrada da tela
  const escala = 0.32 + Math.pow(zoom, 2.1) * 2.3;

  return (
    <section ref={ref} id="inicio" className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Sala escura em volta do monitor. Some conforme a câmera avança. */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_46%,#17122a_0%,#09070f_58%)]"
          style={{ opacity: ambiente }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative w-[62vw] max-w-[1100px] will-change-transform"
            style={{ transform: `scale(${escala})` }}
          >
            {/* Moldura e pé do monitor: existem só no começo da sequência */}
            <div
              className="absolute -inset-[1.6%] rounded-[1.1%] bg-gradient-to-b from-[#2a2536] to-[#0e0b16] shadow-[0_40px_120px_-20px_rgba(123,43,249,0.35)]"
              style={{ opacity: moldura }}
            />
            <div
              className="absolute top-[101%] left-1/2 h-[7%] w-[14%] -translate-x-1/2 bg-gradient-to-b from-[#252030] to-[#12101a]"
              style={{ opacity: moldura }}
            />
            <div
              className="absolute top-[107%] left-1/2 h-[1.4%] w-[26%] -translate-x-1/2 rounded-full bg-[#1b1826]"
              style={{ opacity: moldura }}
            />

            {/* A tela: é dentro dela que a página vive */}
            <div className="relative aspect-video overflow-hidden bg-void">
              <ScrollVideo
                src={VIDEOS.hero.arquivo || undefined}
                mode="scrub"
                slot={VIDEOS.hero.slot}
                duration={VIDEOS.hero.duracao}
              />
              {/* Reflexo no vidro, apenas enquanto a moldura existe */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"
                style={{ opacity: moldura }}
              />
            </div>
          </div>
        </div>

        {/* Véu que garante contraste do texto sobre qualquer quadro do vídeo */}
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
            <span className="hidden sm:block">{PERFIL.local}</span>
          </header>

          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
              {PERFIL.papel}
            </p>
            <h1 className="font-display text-mega font-extrabold text-paper">
              {PERFIL.nome}
              <br />
              <span className="text-ultraviolet">{PERFIL.sobrenome}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lede text-lilac">
              Construo interfaces que funcionam antes de impressionar — e que
              impressionam justamente por isso.
            </p>
          </div>

          <footer className="flex items-end justify-between">
            <a
              href="#projetos"
              className="group flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.22em] text-lilac uppercase transition-colors hover:text-paper"
            >
              <span className="inline-block h-8 w-px bg-lilac/40 transition-colors group-hover:bg-magenta" />
              Ver projetos
            </a>
          </footer>
        </div>

        {/* Convite a rolar, só no primeiro quadro da sequência */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] tracking-[0.3em] text-lilac/70 uppercase"
          style={{ opacity: 1 - fatia(progress, 0, 0.12) }}
        >
          Role para entrar
        </div>
      </div>
    </section>
  );
}
