import { ScrollVideo } from "@/components/scroll-video";
import { PERFIL, VIDEOS } from "@/lib/site-data";

export function Contato() {
  return (
    <section id="contato" className="relative h-[180vh] border-t border-lilac/10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <ScrollVideo
            src={VIDEOS.fecho.arquivo || undefined}
            mode="scrub"
            slot={VIDEOS.fecho.slot}
            duration={VIDEOS.fecho.duracao}
          />
        </div>
        <div className="absolute inset-0 bg-void/75" />

        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12">
          <p className="font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
            Contato
          </p>

          <a
            href={`mailto:${PERFIL.email}`}
            className="mt-8 block font-display text-giga font-bold break-all text-paper transition-colors hover:text-ultraviolet"
          >
            {PERFIL.email}
          </a>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-lilac/15 pt-8 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            <a
              href={PERFIL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lilac transition-colors hover:text-paper"
            >
              GitHub
            </a>
            {PERFIL.linkedin && (
              <a
                href={PERFIL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lilac transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            )}
            <span className="ml-auto text-lilac/40">
              © {new Date().getFullYear()} guirab.com.br
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
