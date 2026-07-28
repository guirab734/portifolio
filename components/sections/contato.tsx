import { ScrollVideo } from "@/components/scroll-video";
import { PERFIL, VIDEOS, whatsappUrl } from "@/lib/site-data";

function IconeWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.3 1.28.5 1.71.64.72.22 1.37.2 1.89.12.58-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.93.96-3.48-.23-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.76 6.65c0 5.18-4.22 9.4-9.4 9.43zM20.5 3.49A11.72 11.72 0 0 0 12.04 0C5.57 0 .3 5.26.3 11.73c0 2.07.54 4.09 1.57 5.87L.2 24l6.55-1.72a11.7 11.7 0 0 0 5.29 1.35h.01c6.46 0 11.73-5.26 11.73-11.73 0-3.13-1.22-6.08-3.44-8.3z" />
    </svg>
  );
}

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

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-ultraviolet bg-ultraviolet/10 px-7 py-4 font-mono text-[0.72rem] tracking-[0.2em] text-paper uppercase transition-colors hover:bg-ultraviolet"
          >
            <IconeWhatsapp />
            Chamar no WhatsApp
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
