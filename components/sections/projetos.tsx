import { ScrollVideo } from "@/components/scroll-video";
import { PROJETOS, VIDEOS } from "@/lib/site-data";

export function Projetos() {
  return (
    <section id="projetos" className="relative border-t border-lilac/10">
      {/* Vídeo de ambiente ao fundo, bem apagado: dá textura sem competir
          com o conteúdo, que é o que importa nesta seção. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="parallax h-[112%] w-full opacity-[0.18]">
          <ScrollVideo
            src={VIDEOS.projetos.arquivo || undefined}
            mode="ambient"
            slot={VIDEOS.projetos.slot}
            duration={VIDEOS.projetos.duracao}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
        <header className="reveal mb-20 flex items-baseline justify-between gap-6">
          <h2 className="font-display text-giga font-bold text-paper">
            Projetos
          </h2>
          <span className="font-mono text-[0.7rem] tracking-[0.22em] text-lilac/60 uppercase">
            {PROJETOS.length} selecionados
          </span>
        </header>

        <ul className="border-t border-lilac/10">
          {PROJETOS.map((projeto) => (
            <li key={projeto.titulo} className="reveal group border-b border-lilac/10">
              <article className="grid gap-6 py-10 md:grid-cols-[1fr_2fr] md:gap-12 md:py-14">
                <div className="flex flex-col gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-lilac/60 uppercase">
                  <span className="text-magenta">{projeto.ano}</span>
                  <span>{projeto.papel}</span>
                </div>

                <div>
                  <h3 className="reveal-clip font-display text-3xl font-bold text-paper transition-colors group-hover:text-ultraviolet md:text-5xl">
                    {projeto.titulo}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-lilac">
                    {projeto.resumo}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {projeto.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-lilac/20 px-3 py-1 font-mono text-[0.65rem] tracking-[0.15em] text-lilac uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(projeto.repo || projeto.demo) && (
                    <div className="mt-8 flex gap-8">
                      {projeto.demo && (
                        <a
                          href={projeto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.7rem] tracking-[0.2em] text-paper uppercase underline decoration-magenta decoration-2 underline-offset-8 transition-colors hover:text-magenta"
                        >
                          Ver ao vivo
                        </a>
                      )}
                      {projeto.repo && (
                        <a
                          href={projeto.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.7rem] tracking-[0.2em] text-lilac uppercase transition-colors hover:text-paper"
                        >
                          Código
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
