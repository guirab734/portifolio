import Image from "next/image";
import { PERFIL } from "@/lib/site-data";

export function Sobre() {
  return (
    <section id="sobre" className="relative border-t border-lilac/10 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="reveal">
            <p className="font-mono text-[0.7rem] tracking-[0.3em] text-magenta uppercase">
              Sobre
            </p>

            {/* O retrato entra dessaturado com uma camada ultravioleta, para
                conversar com o resto da página, e recupera a cor no hover. */}
            <figure className="group relative mt-8 aspect-[4/5] overflow-hidden bg-surface">
              {PERFIL.foto ? (
                <>
                  <Image
                    src={PERFIL.foto}
                    alt={`${PERFIL.nome} ${PERFIL.sobrenome}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover grayscale-[0.55] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ultraviolet/25 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="absolute inset-4 border border-dashed border-lilac/20" />
                  <p className="relative px-6 text-center font-mono text-[0.7rem] leading-relaxed tracking-[0.22em] text-lilac/70 uppercase">
                    Retrato
                    <br />
                    <span className="text-lilac/40">4:5 vertical</span>
                  </p>
                </div>
              )}
            </figure>
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
