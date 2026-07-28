import { ScrollVideo } from "@/components/scroll-video";
import { PERFIL, VIDEOS } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="inicio" className="relative h-[260vh]">
      {/* O vídeo faz scrub durante toda a altura da seção; o conteúdo fica preso
          na viewport enquanto isso. */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ScrollVideo
            src={VIDEOS.hero.arquivo || undefined}
            mode="scrub"
            slot={VIDEOS.hero.slot}
            duration={VIDEOS.hero.duracao}
          />
        </div>

        {/* Véu que garante contraste do texto sobre qualquer quadro do vídeo */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />

        <div className="relative flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-10">
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
            <span className="font-mono text-[0.7rem] tracking-[0.22em] text-lilac/50 uppercase">
              Role
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
