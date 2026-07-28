# Vídeos do site

Cinco vídeos, um por seção. Todos gerados no Leonardo AI e salvos em
`public/videos/`. Enquanto o arquivo não existir, o site mostra um placeholder
tracejado no lugar exato — nada quebra.

## Antes de gerar: o que estes vídeos são e não são

O Leonardo não consegue renderizar os seus projetos reais. Ele gera imagem a
partir de descrição, então não existe prompt que produza um print do seu
dashboard funcionando.

Por isso os cinco vídeos são **atmosfera, não conteúdo**. Eles criam o ambiente
— textura, cor, movimento — e os projetos entram por cima como screenshots
reais, na seção Projetos. Vídeo de IA tentando imitar interface sempre sai com
texto derretido e botões tortos; é o jeito mais rápido de um portfólio parecer
amador.

Os cinco compartilham a mesma paleta e a mesma gramática visual (câmera estática,
movimento lento, preto absoluto) para o site parecer uma peça só.

## Como instalar um vídeo depois de gerar

1. Salve o arquivo em `public/videos/` como `.mp4`
2. Abra `lib/site-data.ts` e preencha o campo `arquivo`:

```ts
hero: { arquivo: "/videos/hero.mp4", slot: "VÍDEO 01 — HERO", duracao: "10s · scrub" },
```

O placeholder some sozinho e o vídeo assume.

---

## VÍDEO 01 — HERO

**Duração:** 10 segundos · **Formato:** 16:9 horizontal · **Modo:** scrub (o scroll controla o tempo)

Fica atrás do seu nome, ocupando a tela inteira. O lado esquerdo precisa ficar
escuro e vazio, porque é onde o texto aparece.

```
Extreme macro cinematography of luminous ultraviolet ink blooming slowly into perfectly black water. Dense violet pigment unfurls in soft billowing tendrils from the right side of frame, its thinning edges shifting toward hot magenta where the density drops. The ink moves with heavy viscous inertia, slow and deliberate, never chaotic or explosive. Background is absolute void black with no visible container, no glass walls, no water surface, no horizon line. Lighting is a single hard rim light from the upper right, making the pigment appear self-illuminated, glowing from within rather than lit from outside. Shallow depth of field: the leading edge of the bloom is razor sharp while trailing wisps fall into soft bokeh. Fine 35mm film grain over the entire frame. Camera is locked off on a tripod, absolutely static, no pan, no tilt, no zoom, no handheld shake, only the ink moves. Movement speed is very slow and hypnotic, roughly one third of real time. Color grade is high contrast with crushed blacks, deep saturated violet midtones, and controlled specular highlights that never blow out to white. Composition keeps the entire left half of the frame empty, dark and uncluttered. Mood is patient, expensive, restrained, cinematic. Dark laboratory aesthetic.

Negative: no text, no letters, no numbers, no watermark, no logo, no people, no hands, no faces, no objects, no glitter, no sparkles, no lens flare, no rainbow colors, no green, no orange, no blue, no white background, no fast motion, no strobing, no camera movement, no cuts.
```

---

## VÍDEO 02 — TRANSIÇÃO

**Duração:** 5 segundos · **Formato:** 3:4 vertical · **Modo:** scrub

Fica ao lado do texto da seção Sobre, em formato retrato. É o mais curto —
serve de respiro entre o hero e os projetos.

```
Vertical portrait format. A single narrow shaft of ultraviolet light cuts diagonally through a volume of suspended dust particles in a pitch black empty room. Thousands of fine dust motes drift slowly through the beam, catching the violet light and flickering as they cross it, then vanishing into darkness. The beam has soft volumetric falloff, brightest at its source in the upper left and dissolving into nothing by the lower right. Faint magenta chromatic fringing along the beam edges. Absolute black everywhere the light does not reach, with no visible walls, floor, ceiling, window, or architecture of any kind. Camera is completely locked off and static, no pan, no zoom, no drift, only the dust particles move. Particle motion is slow, weightless and random, like dust in still air, never swirling or blowing. Heavy film grain and subtle gate weave for an analog feel. High contrast grade with pure crushed blacks and a narrow violet to magenta color range only. Mood is quiet, contemplative, cinematic, patient.

Negative: no text, no letters, no numbers, no watermark, no people, no silhouettes, no hands, no furniture, no windows, no walls, no architecture, no smoke machine haze, no fog, no god rays through clouds, no sun, no green, no orange, no yellow, no white light, no fast motion, no camera movement, no cuts, no strobing.
```

---

## VÍDEO 03 — AMBIENTE

**Duração:** 12 segundos · **Formato:** 16:9 horizontal · **Modo:** loop contínuo

Fica atrás da lista de projetos, com **18% de opacidade**. É o mais discreto de
todos — se chamar atenção, atrapalha a leitura. Precisa emendar o fim no começo
sem corte visível.

```
Slow drifting volumetric fog in near total darkness, lit from behind by a distant weak ultraviolet source. The fog is thin and wispy, moving laterally from left to right at an extremely slow constant speed, with no turbulence, no billowing and no swirling. Density is low: most of the frame stays almost completely black, with only faint violet luminance gradients suggesting depth and layers receding into the distance. No visible light source in frame, no defined beam, no hotspot. The overall image is very dark and very low contrast, deliberately understated, like an underexposed night shot. Extremely subtle magenta tint in the densest fog areas. Fine film grain throughout. Camera is absolutely static and locked off, no movement whatsoever. Motion is continuous, even and uniform so the clip loops seamlessly with no visible cut. Mood is ambient, atmospheric, background texture, quiet and unobtrusive. Nothing in the frame should draw the eye or read as a subject.

Negative: no text, no letters, no numbers, no watermark, no logo, no people, no objects, no shapes, no creatures, no landscape, no horizon, no ground, no sky, no stars, no particles, no sparkles, no bright highlights, no high contrast, no green, no orange, no blue, no white, no fast motion, no camera movement, no cuts, no strobing, no focal subject.
```

---

## VÍDEO 04 — ESTRUTURA

**Duração:** 6 segundos · **Formato:** 1:1 quadrado · **Modo:** loop contínuo

Fica ao lado da lista de ferramentas. É o único mais geométrico do conjunto —
a ideia é sugerir construção sem cair no clichê de código na tela.

```
Square format. A cluster of translucent crystalline geometric structures rotating extremely slowly in absolute black space. The forms are angular and faceted, like cleaved obsidian or cut amethyst, with sharp precise edges and flat internal planes. They are deep violet and semi transparent, refracting light through their interior so inner facets glow with magenta highlights where the light concentrates. Rotation is a single continuous slow axis turn, roughly one full degree per frame, smooth and mechanical with no wobble and no acceleration. The structures float without support, no ground, no shadow beneath, no surface, no reflection plane. Lighting is a single cool key light from the upper left plus faint violet ambient fill. Background is pure black with nothing in it. Shallow depth of field with the nearest facet sharp and the rear forms softly defocused. Fine film grain. Camera is completely locked off and static, no orbit, no push in, no pan, only the objects rotate. Motion loops seamlessly. Mood is precise, engineered, cold, deliberate.

Negative: no text, no letters, no numbers, no watermark, no logo, no people, no hands, no code, no screens, no user interface, no circuit boards, no wireframes, no grids, no ground plane, no shadows, no reflections, no green, no orange, no gold, no rainbow refraction, no fast rotation, no camera movement, no cuts, no strobing.
```

---

## VÍDEO 05 — FECHO

**Duração:** 8 segundos · **Formato:** 16:9 horizontal · **Modo:** scrub

Fecha o site atrás do seu email. É o vídeo 01 ao contrário: lá a tinta floresce,
aqui ela assenta. Isso amarra o começo e o fim numa coisa só.

```
Extreme macro cinematography of violet ink settling and dissipating into perfectly black water, the final calm phase after a bloom. Thin exhausted tendrils of ultraviolet pigment sink slowly downward and outward, spreading thinner and fainter as they descend, gradually surrendering to the darkness. The motion decelerates continuously across the clip, beginning with faint residual drift and ending almost completely still. Color fades from saturated violet at the top toward deep desaturated magenta in the dispersing lower edges. Background is absolute void black with no container, no glass, no surface, no horizon. Lighting is a single soft rim light from above, dimmer and more diffuse than a hero shot, letting most of the frame fall into darkness. Shallow depth of field with heavy bokeh on the trailing wisps. Fine 35mm film grain. Camera is locked off, absolutely static, no pan, no zoom, no shake. Composition keeps the center of the frame open and dark for text overlay. Mood is resolved, quiet, closing, cinematic, the visual equivalent of an exhale.

Negative: no text, no letters, no numbers, no watermark, no logo, no people, no hands, no faces, no objects, no glitter, no sparkles, no lens flare, no bright colors, no green, no orange, no blue, no white background, no fast motion, no turbulence, no camera movement, no cuts, no strobing.
```

---

## Ajustes se o resultado não vier bom

- **Muito claro ou lavado:** acrescente `underexposed, deep shadows, low key lighting` no começo
- **Movimento rápido demais:** acrescente `time lapse in reverse, quarter speed, slow motion`
- **Aparecendo objetos ou pessoas:** reforce o negativo repetindo `no subject, abstract only`
- **Roxo saindo azulado:** troque `ultraviolet` por `deep purple magenta` no corpo do prompt
- **Loop com corte visível (vídeos 03 e 04):** peça `seamless loop, first frame identical to last frame`
