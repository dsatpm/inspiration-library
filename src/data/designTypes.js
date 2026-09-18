/**
 * Design types — the genre labels the archive groups by.
 *
 * `summary` answers "what is this"; `vocabulary` lists the terms you need to
 * brief or critique work in this mode. Types with no captures yet are still
 * listed so the vocabulary exists before an example arrives.
 */
export const designTypes = [
  {
    id: 'vast-quiet-cinematic',
    name: 'VAST QUIET CINEMATIC',
    tags: ['cinematic', 'editorial', 'grain'],
    summary:
      'Landscape footage or photography at full bleed, with almost nothing on top of it. The restraint is the luxury signal: one headline, a three-anchor nav, a small button. Scale comes from the subject, never from the interface.',
    vocabulary: [
      'full bleed — media runs edge to edge, no container or margin',
      'staggered rag — headline lines indented progressively so the ragged edge follows a line in the photograph',
      'quiet CTA — deliberately understated button; a loud one would contradict the positioning',
      'no-scrim placement — text sits over the flattest region of the image instead of adding a gradient overlay',
      'tonal colour — type coloured from the environment in the photography rather than black',
    ],
  },
  {
    id: 'print-tech-paper',
    name: 'PRINT-TECH PAPER',
    tags: ['print', 'grain', 'engraving', 'editorial'],
    summary:
      'Screen design borrowing the apparatus of print production and technical drafting — registration marks, paper grain, dimension lines, monospace annotation. The page presents itself as a printed artefact or an engineering drawing rather than a website.',
    vocabulary: [
      'registration marks — the crosshair "+" glyphs printers use to align colour plates, here placed at page corners',
      'paper grain — a fine noise texture over a flat ground so it does not read as unfinished',
      'monospace annotation — small tracked uppercase mono used for every label, like a spec sheet',
      'dimension lines — drafting rules with end ticks, implying measurement',
      'indexed rows — content set as a numbered table with hairline rules instead of cards',
      'foxing — the brown age-spotting on old paper, simulated as a ground texture',
    ],
  },
  {
    id: 'dither-mono',
    name: 'DITHER MONO',
    tags: ['dither', 'print', 'dark', 'data noir'],
    summary:
      'Everything set in monospace, including display sizes, on a dot-matrix or dithered ground. The fixed character advance becomes the grid. Works only when the commitment is total — mono headlines over proportional body is what makes monospace look accidental.',
    vocabulary: [
      'fixed advance — every glyph occupies identical width, so columns align without a grid system',
      'dot matrix — a regular dot field background tuned to the same rhythm as the type',
      '1-bit dither — two-tone stippling used to fake gradient, borrowed from early bitmap displays',
      'bracket label — section eyebrows wrapped as [ LIKE THIS ], a mono-native convention',
      'floating pill nav — nav detached from the viewport edge so the ground stays continuous behind it',
      'scroll percentage readout — a numeric position indicator rather than a progress bar',
    ],
  },
  {
    id: 'data-as-texture',
    name: 'DATA-AS-TEXTURE',
    tags: ['data-art', 'WebGL', 'dark', 'DNA'],
    summary:
      'An image reconstructed from thousands of discrete points — a portrait, a globe, a form — so that data density becomes the surface material. The subject stays recognisable while dissolving into its own particles, which means it needs no frame or container.',
    vocabulary: [
      'particle field — the subject rendered as discrete points rather than continuous pixels',
      'dissolve edge — the subject fading into the ground at its boundary, removing the need for a crop or frame',
      'point cloud — a 3D form described only by vertices, typically driven in WebGL',
      'wireframe globe — the connected-world motif, kept monochrome so one accent can dominate',
      'density as value — darker regions are simply more points, not a different colour',
    ],
  },
  {
    id: 'classical-remix',
    name: 'CLASSICAL REMIX',
    tags: ['classical', 'illustrated', 'editorial'],
    summary:
      'Historical painting, sculpture or engraving recomposed for a contemporary commercial page. The source imagery stays high fidelity and reverent; the modernity comes from typography, cropping and layout rather than from altering the artwork.',
    vocabulary: [
      'neoclassical source — draped figures, marble, oil-painting light',
      'motif evolution — one illustrated subject carried through the page in different states instead of a new image per section',
      'transitional serif — the type class that sits comfortably beside classical imagery without costume-drama pastiche',
      'flat saturated ground — a single modern colour field the historical image is composited onto',
    ],
  },
  {
    id: 'glitched-antiquity',
    name: 'GLITCHED ANTIQUITY',
    tags: ['glitch', 'classical', 'dither', 'illustrated'],
    summary:
      'Classical Remix with exactly one digital intruder. A neoclassical scene is left intact except for a deliberate machine artefact — dithered clouds, a chromatic smear, a pixel staircase. The technique depends on restraint: one intruder reads as authored, three read as noise.',
    vocabulary: [
      'the intruder — the single low-fidelity digital element allowed into a high-fidelity historical scene',
      'chromatic smear — an RGB-split drag across part of the image, as if the render failed mid-frame',
      '1-bit cloud — dithered pixel-art element composited into a painterly sky',
      'fidelity collision — the intentional mismatch of resolution or era between elements',
      'pixel staircase — hard-edged blocky geometry used as a recurring motif',
    ],
  },
  {
    id: 'illustrated-storybook',
    name: 'ILLUSTRATED STORYBOOK',
    tags: ['illustrated', 'playful', 'soft-futurism'],
    summary:
      'A built, toy-like world rendered as a diorama on a clean ground — voxels, clay, paper craft. Digital material, calm subject. The illustration is isolated with generous empty space so typography can sit beside it rather than on it.',
    vocabulary: [
      'diorama isolation — the scene floats on a plain ground with no environment behind it',
      'voxel — a 3D pixel; the unit the world is built from',
      'digital material — the surface reads as fabricated rather than photographed',
      'studio light — soft, even, shadowless illumination that keeps the toy reading as an object',
      'typography reserve — deliberate empty space kept above or beside the render for headlines',
    ],
  },
  {
    id: 'marker-swiss',
    name: 'MARKER SWISS',
    tags: ['editorial', 'print', 'data-art'],
    summary:
      'Swiss grid discipline — oversized grotesk, strict alignment, numbered sections — with a highlighter-marker block as the signature emphasis device. The marker is semantic: it means "this is the word that carries the argument", and it is used sparingly enough to teach the reader that meaning.',
    vocabulary: [
      'marker block — a solid colour block behind a single word, preserving full type contrast where recolouring would weaken it',
      'section numbering — every section labelled 01 /, 02 /, so a long scroll reads as a document',
      'zero-padded numerals — 012, 025+, 006 so a stat row occupies even width',
      'colour-coded steps — each step or nav item carries its own hue as a position index',
      'orthogonal routing — diagram lines kept square with rounded corners, never diagonal',
      'warm ground — off-white or warm grey rather than pure white, softening the grid',
    ],
  },
  {
    id: 'condensed-brutalist',
    name: 'CONDENSED BRUTALIST',
    tags: ['dark', 'editorial', 'print', 'data noir'],
    summary:
      'Ultra-condensed display type at extreme scale on a near-black ground, with work presented as gutterless mass rather than discrete framed items. Volume is the argument. One toxic accent colour is reserved exclusively for actions.',
    vocabulary: [
      'fill/outline alternation — alternating solid and stroked lines in one headline to build hierarchy without changing size or weight',
      'gutterless collage — thumbnails butted with no spacing so the set is judged as texture, not item by item',
      'scale ramp — items growing in size across a strip to give the eye an exit point',
      'toxic accent — a single high-chroma colour (acid yellow, lime) used only where the user can click',
      'blueprint underlay — a faint technical grid behind the content',
      'bleed portrait — a photograph running to the viewport edge, reading as environment rather than avatar',
    ],
  },
  {
    id: 'poster-brutalist',
    name: 'POSTER BRUTALIST',
    tags: ['print', 'editorial', 'dark', 'engraving'],
    summary:
      'The page behaves like a printed exhibition poster. The institution\'s name is set heavy enough and large enough to be cropped by the viewport, and that becomes the hero image — no photography required to carry the first screen.',
    vocabulary: [
      'type as image — letterforms at a size where they read as shape rather than as words',
      'viewport crop — the wordmark deliberately running past the edge, signalling confidence in scale',
      'scale inversion — promotional content small and above, identity enormous and below',
      'marquee ticker — a continuously scrolling standing head carrying hours or announcements',
      'unequal cards — breaking a row out of equal widths so the grid stops reading as a template',
      'caption below — never overlay text on artwork; the art is the product',
      'full-width pill — a single action scaled to the content width instead of styled harder',
    ],
  },
  {
    id: 'friendly-case-study',
    name: 'FRIENDLY CASE STUDY',
    tags: ['playful', 'editorial', 'split', 'soft-futurism'],
    summary:
      'A portfolio built around problem-first storytelling on soft, approachable surfaces. Each project gets a pale tinted card and two sentences: what was broken, what was built. The warmth of the surface is what makes the directness of the copy land as helpful rather than boastful.',
    vocabulary: [
      'problem → intervention → outcome — the copy ordering; the artefact is named last, never first',
      'derived heading colour — each card\'s heading drawn from a deeper shade of that card\'s own tint',
      'break the container — a portrait or mockup overflowing its card edge to create depth without a shadow',
      'inset card hero — a rounded card held in from the page edges rather than a full-bleed band',
      'serif/sans split — serif for the human greeting, geometric sans for the job title',
      'tinted card set — pale sand, mint, blush, periwinkle grounds distinguishing unlike projects',
    ],
  },
  {
    id: 'serif-noir',
    name: 'SERIF NOIR',
    tags: ['dark', 'editorial', 'classical'],
    summary:
      'High-contrast display serif on a near-black ground with one warm metallic accent. The register is editorial and composed rather than loud — it borrows authority from print journalism and applies it to a personal or product surface. Coined for this archive; no prior label fit.',
    vocabulary: [
      'high-contrast serif — a display face with extreme thick/thin modulation, which needs large sizes to survive on dark grounds',
      'tonal split headline — a two-line proper noun with the second line dropped one value step',
      'warm metallic accent — amber, brass or champagne against the near-black, never a cool accent',
      'three-tier buttons — filled / outlined / ghost in one row for three levels of intent',
      'bracket eyebrow — [ ABOUT ], [ CONTACT ] as small mono section labels',
      'scroll rail — a vertical tick index on the page edge instead of a sticky nav bar',
      'initials disc — a lettered circle standing in for a headshot, keeping a testimonial grid uniform',
    ],
  },
]

export const designTypeById = Object.fromEntries(
  designTypes.map((type) => [type.id, type]),
)
