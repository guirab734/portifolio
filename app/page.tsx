import { Timeline } from "@/components/timeline";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Projetos } from "@/components/sections/projetos";
import { Stack } from "@/components/sections/stack";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-surface focus:px-4 focus:py-2 focus:text-paper"
      >
        Pular para os projetos
      </a>
      <Timeline />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Stack />
        <Contato />
      </main>
    </>
  );
}
