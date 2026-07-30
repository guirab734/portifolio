import { ScrollVideo } from "@/components/scroll-video";
import { VIDEOS } from "@/lib/site-data";

/**
 * Faixa curta entre Sobre e Projetos. O clipe vertical do feixe de luz é
 * estreito por natureza, então funciona melhor aqui, como respiro, do que
 * disputando espaço com o retrato.
 */
export function Transicao() {
  return (
    <section className="relative h-[150vh] border-t border-lilac/10">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <div className="h-full w-full max-w-[520px]">
            <ScrollVideo
              src={VIDEOS.transicao.arquivo || undefined}
              mode="scrub"
              blend
              slot={VIDEOS.transicao.slot}
              duration={VIDEOS.transicao.duracao}
            />
          </div>
        </div>

        <p className="reveal relative max-w-2xl px-6 text-center font-display text-giga font-bold text-paper">
          O que eu construí até agora.
        </p>
      </div>
    </section>
  );
}
