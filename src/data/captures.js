/**
 * One entry per capture in `library/` and `avoid/`.
 *
 * `image` is the repo-root-relative path, resolved to a bundled URL in
 * `src/lib/images.js`. `recipe.subject` is the slot you fill before sending
 * `recipe.prompt` to Higgsfield.
 */
export const captures = [
  // ── tengilemalamala.com · VAST QUIET CINEMATIC ──────────────────────────
  {
    id: 'tengile-hero',
    image: '/library/landing-pages/tengile-malamala/hero.png',
    sidecar: 'library/landing-pages/tengile-malamala/hero.md',
    title: 'Escape',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'cinematic x warm editorial',
    tags: [
      'full-bleed aerial footage',
      'staggered three-line serif headline',
      'rag follows the river diagonal',
      'three-anchor nav, nothing else',
      'warm neutral over green',
      'CTA cluster bottom-right',
      '10:1 display-to-body ratio',
    ],
    brief:
      'Wilderness footage with one headline laid across it on a diagonal. The type is composing the frame, not labelling it.',
    recipe: {
      subject:
        'an aerial view of a wide river winding through golden-green savannah at low sun',
      prompt:
        '[SUBJECT] shot from a slow-moving aerial drone, cinematic documentary still, STRICT palette: olive and sage vegetation, warm sand banks, muted steel-blue water, hazy cream sky, no saturated greens, golden hour side light with long soft shadows, strong natural diagonal running from lower-left to upper-right for typography to follow, generous unbusy sky at the top third, shallow atmospheric haze toward the horizon',
    },
  },
  {
    id: 'tengile-about',
    image: '/library/about/tengile-malamala/about-editorial.png',
    sidecar: 'library/about/tengile-malamala/about-editorial.md',
    title: 'Stewardship',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'warm editorial x whitespace',
    tags: [
      'asymmetric editorial grid',
      'vertical column offset',
      'display serif statement right',
      'small sans detail far below-left',
      'cream ground',
      'image enters bottom-right',
    ],
    brief:
      'Two text columns deliberately knocked out of vertical alignment. The offset is what forces a reading order a symmetric grid cannot express.',
    recipe: {
      subject: 'a close portrait of an elephant standing in dappled bush shade',
      prompt:
        '[SUBJECT] documentary wildlife photography, STRICT palette: warm grey hide, muted olive foliage, soft cream light, no vivid greens, diffuse overcast light with no hard shadows, subject filling the right half of the frame, large calm empty area on the left for typography, shallow depth of field with a soft blurred background',
    },
  },
  {
    id: 'tengile-quote',
    image: '/library/components/tengile-malamala/pull-quote.png',
    sidecar: 'library/components/tengile-malamala/pull-quote.md',
    title: 'Nowhere in Africa',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'warm editorial x tonal colour',
    tags: [
      'pull quote as a full section',
      'olive display serif on cream',
      'colour drawn from the photography',
      'attribution split by value',
      'name dark, outlet grey',
      'quote owns 40% of the viewport',
    ],
    brief:
      'A quote given a whole screen and coloured from the landscape rather than set in black. Large type buys you lower contrast; small type does not.',
    recipe: {
      subject: 'an empty stretch of riverbank at dusk with no animals present',
      prompt:
        '[SUBJECT] minimal landscape photography, STRICT palette: deep olive green, warm cream sand, muted brown water, no blue sky, flat even dusk light, extremely simple composition with large areas of uninterrupted tone, horizon low in the frame, vast empty upper two-thirds reserved for typography',
    },
  },
  {
    id: 'tengile-contact',
    image: '/library/contact/tengile-malamala/plan-a-trip.png',
    sidecar: 'library/contact/tengile-malamala/plan-a-trip.md',
    title: 'Plan a Trip',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'cinematic x warm editorial',
    tags: [
      'full-bleed photograph, no scrim',
      'text placed over the flattest region',
      'eyebrow → serif → sans → button',
      'four hierarchy steps, one edge',
      'deliberately quiet CTA',
    ],
    brief:
      'Text sits over the water because the water is the calmest part of the image. Art direction replacing a gradient overlay.',
    recipe: {
      subject:
        'a single elephant crossing a shallow braided river seen from above',
      prompt:
        '[SUBJECT] aerial documentary photography, STRICT palette: bright sage grass, pale sand bars, muted olive-brown water, no saturated colour, clear midday light without harsh contrast, the subject placed in the left third, a large flat calm expanse of water and sand occupying the right half for text placement',
    },
  },
  {
    id: 'tengile-footer',
    image: '/library/footer/tengile-malamala/footer.png',
    sidecar: 'library/footer/tengile-malamala/footer.md',
    title: 'Two Reserves',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'warm editorial x print DNA',
    tags: [
      'five-column footer',
      'solid olive ground',
      'colour change as the boundary',
      'grouped by property, not link type',
      'per-reserve addresses and socials',
      'studio credits row',
    ],
    brief:
      'The photograph stops and olive begins — no rule, no gap. A flat colour change is the strongest footer boundary available.',
    recipe: {
      subject: 'a flat field of deep olive-green with faint organic texture',
      prompt:
        '[SUBJECT] abstract surface study, STRICT palette: single deep olive green with subtle tonal variation only, no other hues, completely flat even lighting, extremely minimal, fine natural grain visible at close range, entire frame usable as a background for white typography',
    },
  },
  {
    id: 'tengile-accommodation',
    image: '/library/work/tengile-malamala/accommodation-intro.png',
    sidecar: 'library/work/tengile-malamala/accommodation-intro.md',
    title: 'Distinct Expression',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'warm editorial x oversized body',
    tags: [
      'one paragraph at display size',
      'no heading at all',
      '90-character measure',
      'olive serif on cream',
      'measure scales with type size',
      'enormous margin below',
    ],
    brief:
      'A section that opens with a paragraph instead of a headline. Works only because the copy is good — at 3rem every weak clause is visible from across the room.',
    recipe: {
      subject:
        'an empty safari lodge deck at golden hour, no people, river beyond',
      prompt:
        '[SUBJECT] architectural interior photography, STRICT palette: warm cream plaster, pale bleached timber, muted olive foliage beyond, no saturated colour, soft low golden light raking across the floor, wide symmetrical composition, generous empty foreground, calm and completely unpeopled',
    },
  },
  {
    id: 'tengile-camps',
    image: '/library/work/tengile-malamala/camps-grid.png',
    sidecar: 'library/work/tengile-malamala/camps-grid.md',
    title: 'Three Camps',
    site: 'tengilemalamala.com',
    url: 'https://tengilemalamala.com/',
    typeId: 'vast-quiet-cinematic',
    categories: 'cinematic x grid',
    tags: [
      'three-up portrait crops',
      'narrow intro column, far left',
      'no overlaid captions',
      'properties named in prose',
      'consistent crop and grade',
      'portrait tension against a horizontal row',
    ],
    brief:
      'Tall crops in a wide row. The mismatch between the cell axis and the row axis is what stops a three-up grid reading as a slideshow.',
    recipe: {
      subject:
        'a thatched safari camp building half-hidden behind large green trees',
      prompt:
        '[SUBJECT] architectural travel photography in vertical portrait orientation, STRICT palette: warm thatch ochre, deep foliage green, pale sky, terracotta earth, no saturated colour, bright even morning light, the building placed low with tall canopy filling the upper frame, calm and unpeopled',
    },
  },

  // ── runrobrun.com · PRINT-TECH PAPER ────────────────────────────────────
  {
    id: 'aperios-hero',
    image: '/library/landing-pages/robert-aperios/hero.png',
    sidecar: 'library/landing-pages/robert-aperios/hero.md',
    title: 'Corner to Corner',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x WebGL',
    tags: [
      'headline split to opposite corners',
      'CREATIVE top-left, DEVELOPER bottom-right',
      'registration crosshairs at page corners',
      'monospace labels at 0.7rem',
      'live clock and location readout',
      'warm noise over off-white',
      'orange gradient blob centre',
    ],
    brief:
      'The page frames itself with its own headline. Two words at opposite corners, the render floating in the empty middle.',
    recipe: {
      subject:
        'a soft amorphous 3D blob with a glossy translucent shell and orange liquid suspended inside',
      prompt:
        '[SUBJECT] high-fidelity 3D render, STRICT palette: light warm grey shell, vivid coral-orange interior, small pure white highlights, no other hues, soft even studio light with gentle subsurface scattering, isolated on a flat light warm grey ground with fine paper grain, centred with generous empty space on all four sides for typography',
    },
  },
  {
    id: 'aperios-about',
    image: '/library/about/robert-aperios/about-scroll-type.png',
    sidecar: 'library/about/robert-aperios/about-scroll-type.md',
    title: 'Mid-Swap',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x motion',
    tags: [
      'captured mid scroll transition',
      'mirrored typographic columns',
      'outgoing line still ghosted',
      'exit and entry overlap',
      'flush-left against flush-right',
      'fixed frame elements through the motion',
    ],
    brief:
      'Two claims stated as one symmetrical composition, caught while swapping. Never fade a text block from zero if the space would otherwise be empty.',
    recipe: {
      subject:
        'a translucent glass panel fragment with a soft orange gradient trapped inside, tumbling in space',
      prompt:
        '[SUBJECT] high-fidelity 3D render with slight motion blur along one axis, STRICT palette: light warm grey, coral-orange, white, no other hues, soft even studio light, isolated on a flat light grey ground with fine paper grain, centred small in the frame with very generous empty space around it',
    },
  },
  {
    id: 'aperios-contact',
    image: '/library/contact/robert-aperios/contact-footer.png',
    sidecar: 'library/contact/robert-aperios/contact-footer.md',
    title: 'Let Me Run',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x saturated ground',
    tags: [
      'full-bleed saturated orange',
      'wordmark cropped by the viewport',
      'inline underlined email capture',
      'three columns, one job each',
      'language chips, active one filled',
      'square corner markers',
    ],
    brief:
      'Contact and footer combined on one orange field, with the wordmark running off the bottom edge. Cropping reads as confidence at that weight.',
    recipe: {
      subject: 'a flat field of vivid safety orange with fine paper grain',
      prompt:
        '[SUBJECT] abstract surface study, STRICT palette: one vivid saturated safety orange only, no gradients, no other hues, completely flat even lighting, visible fine offset-print grain and subtle ink mottling, entire frame usable as a background for heavy black typography',
    },
  },
  {
    id: 'aperios-tools',
    image: '/library/motion/robert-aperios/tools-horizontal-scroll.png',
    sidecar: 'library/motion/robert-aperios/tools-horizontal-scroll.md',
    title: 'Split Mask',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x motion',
    tags: [
      'horizontal scroll track',
      'persistent index and name in fixed corners',
      'contour line-art lettering',
      'pixel staircase motif',
      'SCROLL # affordance label',
      'black panel on orange ground',
    ],
    brief:
      'Every item in the horizontal track keeps its number and name in the same two corners. That is what makes a track scan as a catalogue instead of a slideshow.',
    recipe: {
      subject: 'the words OPEN TO WORK drawn entirely in concentric contour lines',
      prompt:
        '[SUBJECT] rendered as fine white line art on a pure black rectangular panel, STRICT palette: pure black ground, pure white lines, no other colour, every letterform built only from closely spaced parallel contour lines that bend around the glyph shapes like a topographic map, crisp vector-sharp strokes of even weight, the panel centred on a vivid safety orange background with generous margin',
    },
  },
  {
    id: 'aperios-work',
    image: '/library/work/robert-aperios/work-index.png',
    sidecar: 'library/work/robert-aperios/work-index.md',
    title: 'Racepoint',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x editorial',
    tags: [
      'three-column project row',
      'client mark, image, metadata',
      'hairline rules make the band',
      'contextual desk mockup, not a browser frame',
      'monospace description of the system built',
      'VIEW PROJECT chip, fixed position',
    ],
    brief:
      'Every project exposes the same four facts in the same four positions. Learn the pattern once, then skim twenty.',
    recipe: {
      subject:
        'a large desktop display on a warm wooden desk with a ribbed ceramic lamp, keyboard, mouse and a stack of books',
      prompt:
        '[SUBJECT] product-in-context photography, STRICT palette: warm oak, off-white walls, muted terracotta lamp, soft grey screen, no saturated colour, soft diffuse daylight from the left with gentle shadows, shot straight on at screen height, generous clean wall space above the monitor, calm and unpeopled',
    },
  },
  {
    id: 'aperios-services',
    image: '/library/work/robert-aperios/services-table.png',
    sidecar: 'library/work/robert-aperios/services-table.md',
    title: 'Five Capabilities',
    site: 'runrobrun.com',
    url: 'https://www.runrobrun.com/',
    typeId: 'print-tech-paper',
    categories: 'print DNA x editorial',
    tags: [
      'indexed table, not a card grid',
      'hairline rule between rows',
      '[01] index, name, mono description',
      'two extreme type sizes, nothing between',
      'scattered images above the strict table',
      'black on saturated orange',
    ],
    brief:
      'Capabilities as rows with rules. One loose element and one strict element, neither competing for the same job.',
    recipe: {
      subject:
        'a pair of hands flipping through vinyl records in a crowded record shop rack',
      prompt:
        '[SUBJECT] documentary photography in high-contrast black and white, STRICT palette: pure monochrome only, deep blacks and bright whites with strong mid grey, no colour whatsoever, hard directional light, tight crop showing only hands and record sleeves, visible film grain, candid and unposed',
    },
  },
  {
    id: 'pear-terms',
    image: '/library/work/pear/terms.png',
    sidecar: 'library/work/pear/terms.md',
    title: 'No Fees',
    site: 'pear.no',
    url: 'https://pear.no/',
    typeId: 'print-tech-paper',
    categories: 'classical x print DNA',
    tags: [
      'aged foxed paper ground',
      'plan-view neoclassical illustration',
      'drafting lines and dimension marks',
      'motif evolved, not replaced',
      'FULL DISCLOSURE chip labels the fine print',
      'texture substituting for colour',
    ],
    brief:
      'The same golden pear from the hero, now a construction site seen in plan. One motif in several states beats several motifs.',
    recipe: {
      subject:
        'a golden pear on a marble plinth seen from directly above, surrounded by small robed figures erecting timber scaffolding around it',
      prompt:
        '[SUBJECT] rendered as a 19th-century architectural plan illustration in gouache and ink, STRICT palette: aged cream paper, sepia and brown ink, dull gold, muted terracotta and sage accents, no bright colour, flat even illustrative light, overlaid with fine blue-grey drafting lines, dimension arrows and a greek-key border, heavy paper texture with brown foxing spots and stains across the whole surface',
    },
  },

  // ── pear.no · GLITCHED ANTIQUITY ────────────────────────────────────────
  {
    id: 'pear-hero',
    image: '/library/landing-pages/pear/hero.png',
    sidecar: 'library/landing-pages/pear/hero.md',
    title: 'Pear Makes You Appear',
    site: 'pear.no',
    url: 'https://pear.no/',
    typeId: 'glitched-antiquity',
    categories: 'classical x glitch',
    tags: [
      'neoclassical painting, high fidelity',
      'dithered 1-bit clouds composited in',
      'chromatic smear across the fruit',
      'exactly one intruder style',
      'flat ultramarine ground',
      'transitional serif, no display sizes',
      'hairline rules imply a grid',
    ],
    brief:
      'A reverent classical scene with precisely one machine artefact allowed in. Two intruders would be a style; one is a signature.',
    recipe: {
      subject:
        'three robed classical women tending an enormous golden pear mounted on a marble plinth, one polishing it with a cloth, one watering it from a brass can',
      prompt:
        '[SUBJECT] painted as a neoclassical oil painting in the style of a 19th-century salon piece, STRICT palette: deep vivid ultramarine sky filling the background, burnished gold fruit, cream and white drapery with ochre and deep red sashes, marble white plinth, no other hues, soft directional classical light from the left, composited with deliberately crude black-and-white 1-bit dithered pixel-art clouds floating in the sky, and one small horizontal rainbow chromatic-aberration smear glitching across the surface of the pear, figures occupying the right half with clean empty blue sky on the left for typography',
    },
  },

  // ── weevolveit.com · DATA-AS-TEXTURE ────────────────────────────────────
  {
    id: 'weevolve-hero',
    image: '/library/landing-pages/weevolveit/hero.png',
    sidecar: 'library/landing-pages/weevolveit/hero.md',
    title: 'Your Tech Partner',
    site: 'weevolveit.com',
    url: 'https://weevolveit.com/',
    typeId: 'data-as-texture',
    categories: 'data-art x dither',
    tags: [
      'wireframe particle globe',
      'monospace at display size',
      'dot-matrix ground',
      'floating pill nav',
      'scroll percentage readout',
      'single magenta accent',
      'total mono commitment',
    ],
    brief:
      'A globe built from points, and a page where even the 5rem headline is monospace. The fixed advance width becomes the grid.',
    recipe: {
      subject: 'a globe of the earth constructed entirely from small glowing dots',
      prompt:
        '[SUBJECT] rendered as a dense point cloud where continents are described only by dot density, STRICT palette: pure white points on a near-black ground, no other colour, faint thin arc lines curving over the surface between points, soft outer glow, isolated and centred on flat near-black with a faint regular dot-matrix grid across the whole background, generous empty space below for typography',
    },
  },

  // ── weevolveit.com · DITHER MONO ────────────────────────────────────────
  {
    id: 'weevolve-method',
    image: '/library/motion/weevolveit/method-horizontal-scroll.png',
    sidecar: 'library/motion/weevolveit/method-horizontal-scroll.md',
    title: 'Diagnose / Design',
    site: 'weevolveit.com',
    url: 'https://weevolveit.com/',
    typeId: 'dither-mono',
    categories: 'dither x data noir',
    tags: [
      'horizontal scroll, mid-transition',
      'ghost numerals behind each panel',
      'parallax from the index itself',
      'explicit step rail at the base',
      'current step filled magenta',
      'em-dash bullets keep the mono grid',
      'theme inverts to light',
    ],
    brief:
      'Giant pale step numbers sit behind each panel and move at a different rate — a progress indicator that is also the parallax layer.',
    recipe: {
      subject: 'the numeral 03 set in an enormous heavy monospace typeface',
      prompt:
        '[SUBJECT] rendered as flat vector type, STRICT palette: very pale warm grey numeral on a clean off-white ground, no other colour, completely flat even lighting, no texture or shadow, the numeral cropped by the frame edges so it reads as a background field, extremely minimal, large clean empty areas for overlaying dark text',
    },
  },
  {
    id: 'weevolve-framework',
    image: '/library/work/weevolveit/five-method.png',
    sidecar: 'library/work/weevolveit/five-method.md',
    title: 'The 5 Method',
    site: 'weevolveit.com',
    url: 'https://weevolveit.com/',
    typeId: 'dither-mono',
    categories: 'dither x editorial',
    tags: [
      'centred section opener',
      'bracket label [ THE FRAMEWORK ]',
      'monospace headline at 5rem',
      'full step list previewed in one line',
      'final step in magenta',
      'centring reserved for openers only',
      'full theme inversion as a divider',
    ],
    brief:
      'The whole step set shown as one dotted line before the horizontal track begins. Preview before, position during.',
    recipe: {
      subject: 'a clean empty off-white surface with a single faint dot grid',
      prompt:
        '[SUBJECT] abstract minimal background study, STRICT palette: warm off-white ground with very pale grey dots only, no other colour, completely flat even lighting, the dot grid regular and precise like graph paper, extremely minimal with the entire frame left clear for centred monospace typography',
    },
  },
  {
    id: 'weevolve-contact',
    image: '/library/contact/weevolveit/talk-to-us.png',
    sidecar: 'library/contact/weevolveit/talk-to-us.md',
    title: 'Talk to Us',
    site: 'weevolveit.com',
    url: 'https://weevolveit.com/',
    typeId: 'dither-mono',
    categories: 'dither x motion',
    tags: [
      'type set on a circular path',
      'arc as a scrolling marquee',
      'one accented word to track',
      'wide bordered channel cards',
      'address visible, arrow pinned right',
      'dot-matrix ground',
    ],
    brief:
      'Arc-set type that moves. Static curved type reads as a badge; as a continuous marquee it reads as atmosphere.',
    recipe: {
      subject:
        'a wide sweeping arc of monospace capital letters curving across a dark field',
      prompt:
        '[SUBJECT] rendered as flat vector typography on a path, STRICT palette: mid-grey letters on a near-black ground with exactly one word in vivid magenta, no other colour, completely flat even lighting, the arc entering and exiting both frame edges so it reads as an endless band, faint regular dot-matrix grid across the background, large empty space below',
    },
  },

  // ── surendarselvaraj.com · DATA-AS-TEXTURE ──────────────────────────────
  {
    id: 'surendar-hero',
    image: '/library/landing-pages/surendar-selvaraj/hero.png',
    sidecar: 'library/landing-pages/surendar-selvaraj/hero.md',
    title: 'Particle Portrait',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'data-as-texture',
    categories: 'data-art x DNA',
    tags: [
      'portrait rendered as a particle field',
      'dissolve edge, no frame needed',
      'tonal split headline',
      'second line dropped one value step',
      'three-tier button row',
      'warm amber accent on near-black',
    ],
    brief:
      'A face reconstructed from points, dissolving into the ground at its own edges — which is why it needs no crop and no container.',
    recipe: {
      subject: 'a three-quarter portrait of a person with tousled hair',
      prompt:
        '[SUBJECT] reconstructed entirely from thousands of fine luminous particles where tonal value is created only by particle density, STRICT palette: warm white and pale gold particles on a deep near-black ground, no other colour, soft rim light from the upper right, the figure dissolving completely into scattered drifting points at every edge so there is no hard boundary, occupying the right half of the frame with deep empty black on the left for typography',
    },
  },

  // ── surendarselvaraj.com · SERIF NOIR ───────────────────────────────────
  {
    id: 'surendar-about',
    image: '/library/about/surendar-selvaraj/about-split.png',
    sidecar: 'library/about/surendar-selvaraj/about-split.md',
    title: 'Learn to Trust',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'serif-noir',
    categories: 'dark x editorial',
    tags: [
      'the claim is the largest text',
      '"About" demoted to a 0.7rem eyebrow',
      'portrait card with amber location badge',
      'badge overlaps the card edge',
      'vertical tick rail for orientation',
      '60-character measure on the bio',
    ],
    brief:
      'Make the biggest text in a section the argument and demote the section name to a tag. Readers skim headings — give them something worth skimming.',
    recipe: {
      subject:
        'a moody three-quarter studio portrait of a person in a dark wool overcoat',
      prompt:
        '[SUBJECT] high-contrast black and white studio photography, STRICT palette: pure monochrome only, deep blacks with a narrow bright highlight range, no colour whatsoever, single hard key light from the left with strong falloff into shadow, plain dark grey seamless background, tight vertical crop, fine film grain',
    },
  },
  {
    id: 'surendar-contact',
    image: '/library/contact/surendar-selvaraj/contact-cards.png',
    sidecar: 'library/contact/surendar-selvaraj/contact-cards.md',
    title: 'Something That Lasts',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'serif-noir',
    categories: 'dark x editorial',
    tags: [
      'no form at all',
      'four channel cards showing real handles',
      'destination visible, not just the platform',
      'outlined availability pill with a live dot',
      'states what you currently want',
      'filled / ghost button pair',
    ],
    brief:
      'Four channels with the actual addresses on show, under a one-line statement of what you are looking for. That line filters every inbound message.',
    recipe: {
      subject: 'a flat deep charcoal surface with an extremely subtle vignette',
      prompt:
        '[SUBJECT] abstract minimal background study, STRICT palette: near-black charcoal with barely perceptible tonal shift only, no other colour, completely flat even lighting, faint fine grain, entirely empty and unornamented so light typography and bordered cards can sit on top',
    },
  },
  {
    id: 'surendar-testimonial',
    image: '/library/testimonial/surendar-selvaraj/endorsement-grid.png',
    sidecar: 'library/testimonial/surendar-selvaraj/endorsement-grid.md',
    title: 'What Leaders Say',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'serif-noir',
    categories: 'dark x editorial',
    tags: [
      'six quotes in a 3×2 grid',
      'initials discs instead of headshots',
      'name white, role and company grey',
      'company persuades but stays subordinate',
      'quotes edited to a uniform length',
      'overflow link caps the section',
    ],
    brief:
      'Initials discs keep the grid uniform where six mismatched headshots would wreck it — and the credibility was never in the face.',
    recipe: {
      subject:
        'a grid of six softly lit dark rounded rectangular cards on a black field',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: near-black ground with slightly lighter charcoal cards, a single warm amber circular accent on each card, no other colour, soft even ambient light with a very subtle top edge highlight on each card, precise even spacing, completely flat and unornamented',
    },
  },
  {
    id: 'surendar-work',
    image: '/library/work/surendar-selvaraj/case-studies.png',
    sidecar: 'library/work/surendar-selvaraj/case-studies.md',
    title: 'WSJ Vertical Video',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'serif-noir',
    categories: 'dark x editorial',
    tags: [
      'split case-study card',
      'one metric in the accent colour',
      'role, dates, artefact, current status',
      'FLAGSHIP PROJECT eyebrow',
      'tag chips as filterless metadata',
      'index against an "all case studies" link',
    ],
    brief:
      'A single number set large and amber, straight after the summary. Case studies without one are unfalsifiable.',
    recipe: {
      subject:
        'a hand holding a smartphone displaying a vertical news video app',
      prompt:
        '[SUBJECT] product photography, STRICT palette: cool grey background, neutral skin tones, dark phone body, no saturated colour, soft even studio light with a gentle gradient falloff behind, shot straight on with the phone vertical and centred, shallow depth of field, clean and minimal with empty grey space around the hand',
    },
  },
  {
    id: 'surendar-tools',
    image: '/library/work/surendar-selvaraj/tools-cards.png',
    sidecar: 'library/work/surendar-selvaraj/tools-cards.md',
    title: 'Systems That Think',
    site: 'surendarselvaraj.com',
    url: 'https://www.surendarselvaraj.com/',
    typeId: 'serif-noir',
    categories: 'dark x data-art',
    tags: [
      'bento grid, one merged cell',
      'same component, different span',
      'coloured status dot per category',
      'hero card lifted by luminance, not border',
      'one repeated EXPLORE affordance',
      'dot colours shared with section indices',
    ],
    brief:
      'Merge one grid cell instead of building a separate featured variant. Same card, bigger span.',
    recipe: {
      subject:
        'an asymmetric bento arrangement of four dark rounded panels, one tall on the left',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: near-black ground with charcoal panels, one panel carrying a faint warm radial glow, small amber pink and blue dot accents, no other colour, soft ambient light, precise geometric spacing, completely flat and unornamented',
    },
  },

  // ── indisea.com · MARKER SWISS ──────────────────────────────────────────
  {
    id: 'indisea-hero',
    image: '/library/landing-pages/indisea-software/hero.png',
    sidecar: 'library/landing-pages/indisea-software/hero.md',
    title: 'Build, Host, Maintain',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'warm editorial x print DNA',
    tags: [
      'amber marker block behind one word',
      'block, not a colour change',
      'the marked word is the differentiator',
      'oversized grotesk on warm off-white',
      '01 / HERO section numbering',
      'cyan line-and-ring graphic',
    ],
    brief:
      'Highlighting by background block keeps the type at full contrast — recolouring the word would have weakened it.',
    recipe: {
      subject:
        'a simple thick line ending in an open circle, like a giant pin or lollipop',
      prompt:
        '[SUBJECT] rendered as flat vector geometry, STRICT palette: one vivid sky-blue stroke on a warm light grey ground, no other colour, no gradients, completely flat even lighting, perfectly even stroke weight with rounded caps, the form vertical and centred right with generous empty space on the left for typography',
    },
  },
  {
    id: 'indisea-about',
    image: '/library/about/indisea-software/who-we-are.png',
    sidecar: 'library/about/indisea-software/who-we-are.md',
    title: 'Who We Are',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'warm editorial x data-art',
    tags: [
      'marker reused on credibility nouns',
      'device given a consistent meaning',
      'positioning copy at 1.75rem',
      'four stat cards, zero-padded numerals',
      '012 / 025+ / 006 / 100%',
      'accent bar threading from above',
    ],
    brief:
      'The marker means "remember this". Used twice on one page, it teaches the reader its meaning.',
    recipe: {
      subject: 'four evenly spaced pale rounded rectangular cards in a row',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: warm off-white ground with very slightly lighter near-white cards, one vivid sky-blue vertical bar entering from the top edge, no other colour, completely flat even lighting with no shadows, precise even spacing, entirely empty card faces ready for numerals',
    },
  },
  {
    id: 'indisea-menu',
    image: '/library/menus/indisea-software/overlay-menu.png',
    sidecar: 'library/menus/indisea-software/overlay-menu.md',
    title: 'Four Destinations',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'editorial x data-art',
    tags: [
      'overlay menu at display scale',
      'four items only',
      'zero-padded index per item',
      'different accent colour each',
      'full contact block in the overlay',
      'close control replaces the hamburger in place',
      'asymmetric, preview panel right',
    ],
    brief:
      'Few destinations means the menu should be set huge. Four small centred links look unfinished; four huge ones look like an index.',
    recipe: {
      subject: 'a large flat charcoal panel occupying the right half of the frame',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: near-black ground on the left with a slightly lighter charcoal panel on the right, small cyan amber green and red dot accents down the far left edge, no other colour, completely flat even lighting, hard clean edge between the two tones, entirely unornamented',
    },
  },
  {
    id: 'indisea-cards',
    image: '/library/motion/indisea-software/stacking-cards.png',
    sidecar: 'library/motion/indisea-software/stacking-cards.md',
    title: 'Reason Three',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'data-art x motion',
    tags: [
      'scroll-pinned stacking cards',
      'a hue per step',
      'prior card colour stays visible at the top edge',
      'colour carries position, no progress bar',
      'oversized cropped numeral fills the right half',
      'one idea per card',
      'rounded corners read as sheets',
    ],
    brief:
      'Because the cards overlap, a sliver of every previous colour stays on screen. The stack is its own progress indicator.',
    recipe: {
      subject:
        'three large rounded rectangular panels stacked and overlapping like sheets of paper',
      prompt:
        '[SUBJECT] abstract geometric study, STRICT palette: one deep forest green panel in front, one warm amber panel behind, one sky-blue panel behind that, each showing only a thin sliver at the top edge, no other colour, completely flat even lighting with no shadows or gradients, an enormous cream numeral 3 cropped by the right edge of the front panel',
    },
  },
  {
    id: 'indisea-testimonial',
    image: '/library/testimonial/indisea-software/quote-rows.png',
    sidecar: 'library/testimonial/indisea-software/quote-rows.md',
    title: 'Proof',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'dark x editorial',
    tags: [
      'full-width rows, not a card grid',
      'quote at 2rem, attribution at 0.7rem',
      'anonymised by role and company type',
      'PE-BACKED GLOBAL TAX PLATFORM',
      'correct when names are unavailable',
      'section named PROOF, not Testimonials',
    ],
    brief:
      'Few long quotes want rows; many short ones want a grid. Naming the section PROOF states its job.',
    recipe: {
      subject:
        'three wide rounded rectangular panels stacked vertically with even gaps',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: near-black ground with slightly lighter charcoal panels, one vivid sky-blue vertical bar at the top right, no other colour, completely flat even lighting, generous even spacing, entirely empty panel faces ready for large light typography',
    },
  },
  {
    id: 'indisea-contact',
    image: '/library/contact/indisea-software/talk-to-us.png',
    sidecar: 'library/contact/indisea-software/talk-to-us.md',
    title: 'Start a Connection',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'editorial x saturated ground',
    tags: [
      'full-bleed saturated cyan',
      'colour flood signals the end',
      'dark type on cyan, never white',
      'contact details as plain underlined text',
      'one small dark pill for the primary',
      '11 / TALK TO US numbering continues',
    ],
    brief:
      'After a long warm-grey scroll, the colour change alone says "this is the end and this is the action". No divider needed.',
    recipe: {
      subject: 'a flat field of vivid sky cyan',
      prompt:
        '[SUBJECT] abstract surface study, STRICT palette: one vivid saturated sky-cyan only, no gradients, no other hues, completely flat even lighting, a single soft cream vertical line ending in an open ring entering from the top edge on the right, entire frame otherwise clear for heavy dark typography',
    },
  },
  {
    id: 'indisea-work',
    image: '/library/work/indisea-software/what-changes.png',
    sidecar: 'library/work/indisea-software/what-changes.md',
    title: 'What Changes',
    site: 'indisea.com',
    url: 'https://indisea.com/',
    typeId: 'marker-swiss',
    categories: 'data-art x print DNA',
    tags: [
      'architecture diagram as the argument',
      'company mark literally in the middle',
      'one colour per branch, matched to its ring',
      'orthogonal routing, no diagonals or crossings',
      'real third-party marks, monochrome',
      'pill chips for what the diagram cannot show',
    ],
    brief:
      'For infrastructure that sits between systems, the topology is the positioning statement. Nothing has to say "integration layer".',
    recipe: {
      subject:
        'a node-and-edge wiring diagram with one hub on the left branching to four circled endpoints on the right',
      prompt:
        '[SUBJECT] rendered as a clean flat vector technical diagram, STRICT palette: near-white card ground, black hub and connector nodes, four distinct edge colours in sky-blue green amber and red each matching the ring around its endpoint, no other colour, completely flat even lighting, strictly orthogonal routing with rounded right-angle corners and no crossing lines, generous white space around the whole diagram',
    },
  },

  // ── blumjeffrey.com · CONDENSED BRUTALIST ───────────────────────────────
  {
    id: 'blum-hero',
    image: '/library/landing-pages/jeffrey-blum/hero.png',
    sidecar: 'library/landing-pages/jeffrey-blum/hero.md',
    title: 'Shape Vision',
    site: 'blumjeffrey.com',
    url: 'https://blumjeffrey.com/',
    typeId: 'condensed-brutalist',
    categories: 'dark x data noir',
    tags: [
      'solid / outline / solid alternation',
      'hierarchy without changing size or weight',
      'ultra-condensed display at 6rem',
      'faint blueprint grid underlay',
      'acid yellow only on the one action',
      'stat row under the fold line',
    ],
    brief:
      'The outlined middle line reads as a held breath between two assertions — same scale, less presence.',
    recipe: {
      subject: 'a faint technical blueprint grid on a near-black field',
      prompt:
        '[SUBJECT] abstract background study, STRICT palette: near-black ground with very faint dark olive-grey grid lines only, no other colour, completely flat even lighting, a subtle warm glow in the lower centre, the grid regular and precise, entire frame otherwise empty for heavy condensed typography',
    },
  },
  {
    id: 'blum-about',
    image: '/library/about/jeffrey-blum/about-split.png',
    sidecar: 'library/about/jeffrey-blum/about-split.md',
    title: 'Ideas Become Systems',
    site: 'blumjeffrey.com',
    url: 'https://blumjeffrey.com/',
    typeId: 'condensed-brutalist',
    categories: 'dark x editorial',
    tags: [
      'portrait bleeds to the viewport edge',
      'environment, not avatar',
      'fill/outline alternation repeated',
      'monochrome photography frees the accent',
      'low-contrast grey body on black',
      'acid-yellow block button',
    ],
    brief:
      'A bleeding portrait reads as environment; the same portrait in a card reads as an avatar. Pick deliberately.',
    recipe: {
      subject:
        'a direct-to-camera portrait of a person in a black turtleneck, arms folded',
      prompt:
        '[SUBJECT] high-contrast black and white studio photography, STRICT palette: pure monochrome only, deep blacks with controlled highlights, no colour whatsoever, single soft key light from the front left against a dark textured wood wall, tight square crop, subject filling the frame, fine film grain',
    },
  },
  {
    id: 'blum-contact',
    image: '/library/contact/jeffrey-blum/contact-form.png',
    sidecar: 'library/contact/jeffrey-blum/contact-form.md',
    title: "Let's Build Something",
    site: 'blumjeffrey.com',
    url: 'https://blumjeffrey.com/',
    typeId: 'condensed-brutalist',
    categories: 'dark x editorial',
    tags: [
      'underline-only inputs, no boxes',
      'labels above the line, never placeholders',
      'nothing disappears when typing',
      'response time stated beside submit',
      'email repeated at 2rem as a bypass',
      'submit is the only yellow block',
    ],
    brief:
      'Boxed inputs would import a UI aesthetic that fights the page. Underlines keep the form typographic.',
    recipe: {
      subject: 'a set of five long thin horizontal hairlines evenly stacked',
      prompt:
        '[SUBJECT] abstract minimal study, STRICT palette: near-black ground with dim warm grey hairlines, one small acid-yellow rectangle at the lower left, no other colour, completely flat even lighting, perfectly even line weight and spacing, extremely minimal with large empty areas',
    },
  },
  {
    id: 'blum-projects',
    image: '/library/work/jeffrey-blum/recent-projects.png',
    sidecar: 'library/work/jeffrey-blum/recent-projects.md',
    title: 'Recent Projects',
    site: 'blumjeffrey.com',
    url: 'https://blumjeffrey.com/',
    typeId: 'condensed-brutalist',
    categories: 'dark x print',
    tags: [
      'gutterless strip, no spacing at all',
      'volume as the argument',
      'judged as texture, not item by item',
      'scale ramp gives the eye an exit',
      'final mockup bleeds off the right',
      'VIEW ALL placed above, not below',
    ],
    brief:
      'Remove the gutters when the claim is "I have shipped a great deal". Never when the claim is "look at this one thing".',
    recipe: {
      subject:
        'dozens of cosmetics-brand interface screens butted edge to edge with no gaps',
      prompt:
        '[SUBJECT] arranged as a seamless dense mosaic with absolutely no spacing between tiles, STRICT palette: deep reds, blush pinks, cream and stark black and white, no other hues, even flat lighting across every tile, tiles increasing in size from left to right, the composition reading as one continuous textured band rather than separate images',
    },
  },
  {
    id: 'blum-services',
    image: '/library/work/jeffrey-blum/creative-services.png',
    sidecar: 'library/work/jeffrey-blum/creative-services.md',
    title: 'Creative Services',
    site: 'blumjeffrey.com',
    url: 'https://blumjeffrey.com/',
    typeId: 'condensed-brutalist',
    categories: 'dark x editorial',
    tags: [
      'one acid rule caps the grid',
      'dividers stay dim grey',
      'identical internal template per cell',
      'index, line icon, title, one line, chips',
      'consistent icon stroke weight',
      'intro offset to the right column',
    ],
    brief:
      'Colour only the top edge of the grid. Colouring every divider would flatten the emphasis away.',
    recipe: {
      subject:
        'a three-by-two arrangement of cells divided by thin hairlines, topped by one bright rule',
      prompt:
        '[SUBJECT] abstract grid study, STRICT palette: near-black ground with dim grey hairline dividers and a single acid-yellow horizontal rule across the top, no other colour, completely flat even lighting, perfectly even cell proportions, entirely empty cells ready for typography',
    },
  },

  // ── newcastleartgallery.nsw.gov.au · POSTER BRUTALIST ───────────────────
  {
    id: 'newcastle-hero',
    image: '/library/landing-pages/newcastle-art-gallery/hero.png',
    sidecar: 'library/landing-pages/newcastle-art-gallery/hero.md',
    title: 'Newcastle Art Gallery',
    site: 'newcastleartgallery.nsw.gov.au',
    url: 'https://newcastleartgallery.nsw.gov.au/',
    typeId: 'poster-brutalist',
    categories: 'print x editorial',
    tags: [
      'the name is the hero image',
      'ultra-heavy grotesk at 9rem',
      'wordmark cropped by the right edge',
      'letterforms read as shape',
      'marquee ticker of opening hours',
      'scale inversion: promo small above, identity huge below',
    ],
    brief:
      'An institution with a strong name can use the name as the hero. Set it big enough to crop and the letterforms become the graphic.',
    recipe: {
      subject:
        'a printmaker working at a large table pressing a relief print by hand',
      prompt:
        '[SUBJECT] documentary photography in a bright studio, STRICT palette: warm white walls, natural timber, muted red and ochre marks on paper, black apron, no saturated colour, flat even fluorescent studio light, shot from a slight high angle, the figure in the left third with clean bright wall space around them',
    },
  },
  {
    id: 'newcastle-exhibitions',
    image: '/library/about/newcastle-art-gallery/exhibitions.png',
    sidecar: 'library/about/newcastle-art-gallery/exhibitions.md',
    title: 'Exhibitions',
    site: 'newcastleartgallery.nsw.gov.au',
    url: 'https://newcastleartgallery.nsw.gov.au/',
    typeId: 'poster-brutalist',
    categories: 'print x editorial',
    tags: [
      'unequal card widths, roughly 45/55',
      'wider card takes priority without a badge',
      'captions below, never overlaid',
      'no scrim means no dulled artwork',
      'one display face reused at several scales',
      'grey metadata line under each title',
    ],
    brief:
      'Breaking a card row out of equal widths is the cheapest way to stop a grid reading as a template.',
    recipe: {
      subject:
        'a large faceted translucent geometric sculpture casting a coloured shadow',
      prompt:
        '[SUBJECT] gallery documentation photography, STRICT palette: vivid coral pink, emerald green, sky blue and amber facets against a plain pale grey background, bright even museum lighting from above, the sculpture centred with a long soft coloured shadow falling to the right, generous clean empty background on all sides',
    },
  },
  {
    id: 'newcastle-button',
    image: '/library/components/newcastle-art-gallery/pill-button.png',
    sidecar: 'library/components/newcastle-art-gallery/pill-button.md',
    title: 'Entries Now Open',
    site: 'newcastleartgallery.nsw.gov.au',
    url: 'https://newcastleartgallery.nsw.gov.au/',
    typeId: 'poster-brutalist',
    categories: 'print x editorial',
    tags: [
      'full-width pill, maximum radius',
      'scaled to content width, not styled harder',
      'no gradient, no shadow, no icon',
      'becomes a structural band in the page',
      'solid fill primary, same pill outlined for secondary',
      'label optically centred in a large field',
    ],
    brief:
      'When one action outranks everything around it, scale the button instead of decorating it.',
    recipe: {
      subject: 'a single enormous black pill-shaped form on a white field',
      prompt:
        '[SUBJECT] abstract geometric study, STRICT palette: pure black form on pure white ground, no other colour, no gradients or shadows, completely flat even lighting, the pill spanning nearly the full frame width with perfectly semicircular ends, generous even white margin above and below',
    },
  },
  {
    id: 'newcastle-footer',
    image: '/avoid/footer/newcastle-art-gallery/footer-header-collision.png',
    sidecar: 'avoid/footer/newcastle-art-gallery/footer-header-collision.md',
    title: 'Header Over Footer',
    site: 'newcastleartgallery.nsw.gov.au',
    url: 'https://newcastleartgallery.nsw.gov.au/',
    typeId: 'poster-brutalist',
    verdict: 'avoid',
    categories: 'print x regression',
    tags: [
      'sticky header lands on footer text',
      'SEARCH overlaps Facebook',
      'logo mark lands on Connect',
      'no reserved offset in the flow',
      'footer padding smaller than header height',
      'only reproduces at scroll-end',
      'transparent header has no fallback',
    ],
    brief:
      'A fixed element with no reserved space on the regions that scroll beneath it. Invisible at every scroll position except the last one.',
    recipe: {
      subject:
        'two lines of white text overlapping and colliding illegibly on black',
      prompt:
        '[SUBJECT] abstract typographic study demonstrating a layout failure, STRICT palette: pure black ground with pure white type only, no other colour, completely flat even lighting, two separate text elements crossing each other so both become unreadable, everything else in the frame left deliberately empty',
    },
  },

  // ── dineshrevunuru.com · FRIENDLY CASE STUDY ────────────────────────────
  {
    id: 'dinesh-hero',
    image: '/library/landing-pages/dinesh-revunuru/hero.png',
    sidecar: 'library/landing-pages/dinesh-revunuru/hero.md',
    title: 'Hi, I’m Dinesh',
    site: 'dineshrevunuru.com',
    url: 'https://dineshrevunuru.com/',
    typeId: 'friendly-case-study',
    categories: 'playful x split',
    tags: [
      'rounded card inset from the page edges',
      'cut-out portrait breaks the top edge',
      'overflow beats any drop shadow',
      'serif greeting, geometric sans role',
      'pink accent on the job title',
      'pill banner kept visually distinct',
    ],
    brief:
      'Let one element break the container and a flat card gains depth. Costs nothing but `overflow: visible`.',
    recipe: {
      subject:
        'a relaxed three-quarter portrait of a person in a pale blue hoodie, arms folded, looking off camera',
      prompt:
        '[SUBJECT] clean commercial portrait photography, STRICT palette: soft dusty blue clothing, warm neutral skin tones, pure white background, no saturated colour, bright soft even studio light with almost no shadow, cut out cleanly from the background with no drop shadow, subject placed on the right with generous empty white space on the left',
    },
  },
  {
    id: 'dinesh-projects',
    image: '/library/about/dinesh-revunuru/project-cards.png',
    sidecar: 'library/about/dinesh-revunuru/project-cards.md',
    title: 'Projects I Have Worked On',
    site: 'dineshrevunuru.com',
    url: 'https://dineshrevunuru.com/',
    typeId: 'friendly-case-study',
    categories: 'playful x split',
    tags: [
      'one pale tint per card',
      'heading colour derived from that card’s hue',
      'problem, then intervention, then outcome',
      'artefact named last',
      'two sentences per project',
      'mockups bleed past the card edge',
    ],
    brief:
      'Copy that opens with the problem and names the artefact last is what makes the work legible to someone who does not already care.',
    recipe: {
      subject:
        'two large rounded rectangular cards side by side, each a different pale tint',
      prompt:
        '[SUBJECT] abstract UI surface study, STRICT palette: one pale sand-yellow card and one pale mint-green card on a pure white ground, no other colour, completely flat even lighting with no shadows, generous even gap between the cards, entirely empty card faces with a clean lower edge where a device mockup would overflow',
    },
  },
  {
    id: 'dinesh-footer',
    image: '/library/footer/dinesh-revunuru/footer.png',
    sidecar: 'library/footer/dinesh-revunuru/footer.md',
    title: 'Bubble Wrap',
    site: 'dineshrevunuru.com',
    url: 'https://dineshrevunuru.com/',
    typeId: 'friendly-case-study',
    categories: 'playful x editorial',
    tags: [
      'single left-aligned column',
      'no fake site map',
      'contact as plain selectable text',
      'one sentence qualifies inbound messages',
      'hinted easter egg below the fold',
      'hard colour boundary from white to blue',
    ],
    brief:
      'A hint is what makes an easter egg discoverable. An unhinted one is just dead code.',
    recipe: {
      subject: 'a flat field of vivid friendly cobalt blue',
      prompt:
        '[SUBJECT] abstract surface study, STRICT palette: one vivid saturated cobalt blue only, no gradients, no other hues, completely flat even lighting, perfectly smooth with no texture, a hard clean straight horizontal edge across the top where it meets pure white, entire frame otherwise clear for white typography',
    },
  },
]

export const captureById = Object.fromEntries(
  captures.map((capture) => [capture.id, capture]),
)
