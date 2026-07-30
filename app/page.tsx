"use client";

import { BotaoIdioma, useIdioma } from "@/components/idioma";
import { ScrollSuave } from "@/components/scroll-suave";
import { Timeline } from "@/components/timeline";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Projetos } from "@/components/sections/projetos";
import { Stack } from "@/components/sections/stack";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  const { t } = useIdioma();

  return (
    <>
      <ScrollSuave />
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-surface focus:px-4 focus:py-2 focus:text-paper"
      >
        {t.pularPara}
      </a>
      <BotaoIdioma />
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
