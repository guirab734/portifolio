import { ScrollVideo } from "@/components/scroll-video";
import { VIDEOS } from "@/lib/site-data";

export function Sobre() {
  return (
    <section id="sobre" className="relative border-t border-lilac/10 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
          <div className="reveal">
            <p className="font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
              Sobre
            </p>
            <div className="mt-8 aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <ScrollVideo
                src={VIDEOS.transicao.arquivo || undefined}
                mode="scrub"
                slot={VIDEOS.transicao.slot}
                duration={VIDEOS.transicao.duracao}
              />
            </div>
          </div>

          <div className="reveal">
            {/* PREENCHER: trocar por um texto seu. Isto é um rascunho de tom. */}
            <p className="font-display text-giga font-bold text-paper">
              Aprendi programando o que eu queria existir.
            </p>
            <div className="mt-10 space-y-6 text-lede text-lilac">
              <p>
                Comecei mexendo em coisas que já existiam para entender por que
                funcionavam. Hoje construo do zero — e a curiosidade continua
                sendo a mesma.
              </p>
              <p>
                Trabalho principalmente com React e Next.js, mas o que me
                interessa de verdade é a parte que o usuário sente: o tempo de
                resposta, o que acontece quando algo dá errado, o detalhe que
                ninguém nota até faltar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
