# Vídeos do site

Cinco vídeos, um por seção, gerados no Leonardo AI e salvos em `public/videos/`.
Enquanto o arquivo não existir, o site mostra um placeholder tracejado no lugar
exato, e nada quebra.

## Status

| # | Seção | Duração | Formato | Situação |
|---|---|---|---|---|
| 01 | Hero | 10s | 16:9 | **aprovado**, instalado como `hero.mp4` |
| 02 | Transição | 5s | 9:16 | **regerar**, claro demais e sem partículas |
| 03 | Ambiente | 12s | 16:9 | **regerar**, o roxo saiu cinza |
| 04 | Estrutura | 6s | 1:1 | **aprovado**, instalado como `stack.mp4` |
| 05 | Fecho | 8s | 16:9 | **regerar**, a tinta saiu vermelha |

## O que estes vídeos são e não são

O Leonardo não renderiza os seus projetos reais. Por isso os cinco são
**atmosfera, não conteúdo**: criam o ambiente, e os projetos entram por cima
como screenshots na seção Projetos.

Os cinco compartilham a mesma gramática (câmera estática, movimento lento,
preto absoluto) para o site parecer uma peça só.

## Como instalar um vídeo depois de gerar

1. Salve em `public/videos/` como `.mp4`
2. Preencha o campo `arquivo` em `lib/site-data.ts`:

```ts
transicao: { arquivo: "/videos/transicao.mp4", slot: "VÍDEO 02 · TRANSIÇÃO", duracao: "5s · scrub" },
```

Vale recodificar antes de instalar: 4K num vídeo de fundo é desperdício. O hero
caiu de 14,5 MB para 1,0 MB em 1080p sem diferença visível.

---

## VÍDEO 02 · TRANSIÇÃO (regerar)

**5 segundos · 9:16 vertical · scrub**

O que saiu errado: o feixe ocupou metade do quadro num lilás pastel quase
branco, as partículas de poeira não apareceram e o clipe ficou praticamente
estático. O prompt abaixo corrige os três: feixe estreito, quadro muito mais
escuro e as partículas como assunto principal, não como detalhe.

```
Vertical 9:16 format. Extreme low key shot: a pitch black empty void where roughly ninety percent of the frame is pure black. A single very narrow shaft of deep violet light, no wider than one tenth of the frame, cuts diagonally from the upper left corner toward the lower right. The beam is thin, sharp edged and dim, not a wide glow and not a spotlight. The true subject of the shot is dust: thousands of tiny individual dust motes drift slowly through the beam, each one catching the violet light as a distinct bright speck, twinkling in and out as they cross the shaft and disappearing completely into black outside it. The particles are clearly visible, sharp and countable, drifting with slow weightless random motion like dust in still air. Deep magenta chromatic fringing along the beam edge. Absolutely nothing else is lit: no walls, no floor, no ceiling, no window, no architecture, no surfaces. Camera is locked off and completely static, no pan, no zoom, no drift. Underexposed, crushed blacks, very high contrast, saturated violet, cinematic anamorphic look with heavy 35mm grain.

Negative: no bright light, no white light, no washed out areas, no pastel colors, no lilac, no wide glow, no large light source, no haze filling the frame, no fog banks, no smoke, no text, no letters, no numbers, no watermark, no people, no silhouettes, no hands, no walls, no windows, no architecture, no furniture, no god rays, no sun, no green, no orange, no yellow, no blue, no static image, no frozen motion, no camera movement, no cuts.
```

---

## VÍDEO 03 · AMBIENTE (regerar)

**12 segundos · 16:9 · loop contínuo**

O que saiu errado: a névoa veio completamente dessaturada, cinza prateada, sem
nenhum roxo. Como este vídeo roda a 18% de opacidade atrás dos projetos, ele
precisa carregar cor, senão vira uma mancha cinza. O prompt abaixo insiste na
saturação e troca "fog" por fumaça colorida, que puxa menos para o cinza.

```
Slowly drifting clouds of deeply saturated violet and purple colored smoke in total darkness. The smoke is richly colored, an intense electric purple with magenta cores where it is densest, never gray and never white. It moves laterally from left to right at an extremely slow constant speed with gentle internal churn, no fast turbulence and no explosive billowing. Density is low and layered: large parts of the frame stay pure black, with the colored smoke forming soft luminous bands that recede into depth. The smoke appears self illuminated, glowing from within with its own violet light rather than being lit by an external white source. No visible light source in frame, no beam, no hotspot, no lens flare. Overall exposure is dark and moody but the color remains vivid and unmistakably purple. Fine film grain. Camera absolutely static and locked off. Motion is continuous and uniform so the clip loops seamlessly with the last frame matching the first. Ambient background texture, quiet, nothing that reads as a subject.

Negative: no gray, no grey smoke, no white smoke, no silver, no desaturated colors, no monochrome, no black and white, no washed out tones, no fog, no mist, no clouds in sky, no text, no letters, no numbers, no watermark, no people, no objects, no creatures, no landscape, no horizon, no ground, no stars, no bright highlights, no green, no orange, no blue, no fast motion, no camera movement, no cuts, no focal subject.
```

---

## VÍDEO 05 · FECHO (regerar)

**8 segundos · 16:9 · scrub**

O que saiu errado: duas coisas. A tinta que descia virou vermelho coral, cor que
não existe na paleta do site, e a borda do aquário apareceu como uma faixa
horizontal no topo. O prompt abaixo proíbe explicitamente o vermelho e insiste
que nenhuma borda de recipiente apareça.

```
Extreme macro cinematography of violet ink settling and dissipating in perfectly black water, filmed so close that the liquid fills the entire frame edge to edge. This is the calm final phase after a bloom: thin exhausted tendrils of pigment sink slowly downward and outward, spreading thinner and fainter as they descend. The motion decelerates continuously across the clip, beginning with faint residual drift and ending almost completely still. The pigment is strictly violet and purple, shifting only toward deep magenta and pink in its thinnest dispersing edges, never toward red, never toward coral, never toward orange. Absolute void black background. Critically, no part of any container is visible: no tank edge, no glass wall, no rim, no horizontal water surface line across the top of frame, no reflections of a container, no bubbles clinging to glass. The liquid extends beyond every edge of the frame with no boundary of any kind. Lighting is a single soft rim light from above, dim and diffuse, letting most of the frame fall into darkness. Shallow depth of field with heavy bokeh on trailing wisps. Fine 35mm grain. Camera locked off and absolutely static. Composition keeps the right half of the frame open and dark for text overlay. Mood is resolved, quiet, closing.

Negative: no red, no coral, no crimson, no scarlet, no orange, no warm colors, no glass, no tank, no aquarium, no container edge, no rim, no horizontal line, no water surface, no waterline, no bubbles, no reflections, no text, no letters, no numbers, no watermark, no people, no hands, no objects, no sparkles, no lens flare, no green, no blue, no white background, no fast motion, no turbulence, no camera movement, no cuts.
```

---

## Ajustes gerais

- **Claro ou lavado demais:** comece o prompt com `underexposed, low key, crushed blacks`
- **Rápido demais:** acrescente `quarter speed, extreme slow motion`
- **Cor dessaturada:** use `deeply saturated, vivid, intense color` e proíba `gray, desaturated` no negativo
- **Aparecendo objetos:** reforce `abstract only, no subject` no negativo
- **Borda de aquário:** proíba `tank, glass, rim, waterline`, ou corte no ffmpeg depois, como foi feito no hero
- **Loop com corte visível:** peça `seamless loop, first frame identical to last frame`
