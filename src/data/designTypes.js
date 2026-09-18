/**
 * Design types — the archive's genre registry, and the only content file.
 *
 * Each type answers four questions:
 *   summary     what the mode is
 *   vocabulary  the devices that ARE the type — name them when briefing
 *   mechanics   the measurable rules, harvested from real captures
 *   never       the failure modes for this specific type
 *   exemplars   sites the rules were read off, with no image stored here
 *
 * Screenshots live outside this repo at `~/Screenshots/taste-vault/<type-id>/`.
 * Nothing in the app reads them. When a capture teaches something new, fold the
 * rule into `mechanics` or `never` here — that is the durable record.
 *
 * Types with no exemplars are still listed so the vocabulary exists before an
 * example arrives; their mechanics are marked provisional.
 */

/**
 * Applies to every type. These are engineering failures, not stylistic ones,
 * and no design direction excuses them.
 */
export const craftFloor = [
  'Anything fixed to the viewport must reserve matching offset in the document flow — `padding-block-start` at least equal to the header height on the footer and on every section start — or carry a real background fill. A transparent fixed header with no reserved space collides with content at scroll-end, and only at scroll-end, which is why it ships. Test sticky headers at the bottom of the page, not mid-page.',
  'Never animate a text block from zero opacity if the space would otherwise be empty. Overlap the exit and the entry so the composition holds at every frame.',
  'Form labels sit permanently above the field. Placeholder-as-label disappears the moment the user types — the accessibility failure that kills most minimal forms.',
  'Measure limits scale with type size. ~45–75 characters at body size; ~90 is fine at 3rem because the eye crosses the same angular distance in fewer fixations. Full-width bio text at 1rem is the most common failure in an about section.',
  'Respect `prefers-reduced-motion`.',
]

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
    mechanics: [
      'Display-to-body ratio around 10:1 — display serif near 8rem against 0.75–0.9rem labels. The hierarchy is unmissable without a single weight change.',
      'When the background image has a dominant diagonal or leading line, break the headline across lines so the ragged edge runs parallel to it. Centred or flush-left type fights the photo.',
      'Place the text block over the quietest region of the photograph rather than adding a scrim. This is an art-direction decision — crop and text position are chosen together, not in CSS afterwards.',
      'Nav stripped to three anchors at ~0.75rem: action left, wordmark centre, menu right. Nothing competes with the display type.',
      'Vertical offset between columns — several hundred pixels — is what makes an editorial layout read as designed rather than gridded. Matched baselines collapse it into an ordinary two-column block.',
      'One tonal colour drawn from the photography (an olive, a stone) carries every moment of editorial voice, so the colour itself comes to mean "brand speaking". Large type buys you the lower contrast; small type does not.',
      'A section may open with a single paragraph set at ~3rem instead of heading-plus-body — the paragraph IS the heading. Works under about 60 words of genuinely good copy; at 3rem every weak clause is legible from across the room.',
      'A pull quote occupies ~40% of the viewport with nothing else competing. One that shares a screen with other content is just a paragraph in italics.',
      'Split attribution by value, not punctuation: name in near-black, outlet in grey. Two facts, not one string.',
      'Portrait crops in a horizontal row beat landscape crops — the vertical eye movement inside each cell against the row\'s horizontal movement is what stops a three-up grid reading as a slideshow.',
      'Set a section intro in a narrow column offset to one side (~25% page width, ~55ch), never centred above the grid.',
      'Footer boundary is a flat colour change — the photo ends, the ground begins. Stronger than a rule or a gap and less work. Group footer columns by entity (property, reserve, office), not by link type.',
      'Oversized copy needs proportionally oversized margins below it or it reads as a mistake.',
    ],
    never: [
      'Gradient scrims over photography to make text legible.',
      'A loud, saturated CTA — it contradicts the positioning the rest of the design is buying.',
      'Overlaid captions on artwork or photography.',
      'Pure black display type where a tonal colour from the environment is available.',
    ],
    exemplars: [
      {
        site: 'tengilemalamala.com',
        url: 'https://tengilemalamala.com/',
        note: 'Full-bleed footage hero, staggered serif rag following the river, olive as the editorial voice colour throughout.',
      },
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
    mechanics: [
      'Two type sizes and no intermediate steps: one display face around 5rem, one uppercase mono at ~0.7rem with wide tracking. That gap IS the hierarchy — everything that is not the headline is mono.',
      'Anchor a two-word headline to opposite corners of the viewport and let the empty middle carry the visual. It reads as one phrase because nothing else uses that size, and the diagonal creates depth a stacked headline cannot.',
      'Crosshair `+` marks at the page corners plus a warm noise texture over the off-white keep a flat ground from reading as unfinished.',
      'Capabilities go in an indexed table — `[01]` index left, name at ~2rem, mono description right, hairline rule per row — not a card grid. Rows are scannable in one vertical pass; cards force a zig-zag and inflate five items into a full screen.',
      'A project row is three columns exposing the same four facts in the same positions: client mark, image, client + project type, description. The reader learns the pattern once and can then skim twenty. Masonry forces re-reading the layout at every item.',
      'Use a contextual photographic mockup — the work on a display on a real desk — to imply it shipped. A flat browser frame implies a concept. Choose according to what you are claiming.',
      'Pair one ordered element with one disordered one per section: a strict table under a loose scattered collage. Neither competes for the same job, and the contrast is the structure.',
      'Persistent framing furniture — `LOCATION: ENGLAND`, a live clock, corner crosshairs — stays fixed through transitions, giving motion something stable to move against.',
      'Describe the system rather than the appearance in mono descriptions ("custom page templates, a flexible component setup, lightweight scripts"). For a technical audience that is the differentiator.',
      'Label the fine print explicitly with a chip (`FULL DISCLOSURE`) and set it smaller but adjacent. Hiding it elsewhere reads as evasive; equal weight buries the offer.',
      'Texture can substitute for colour as the section signal — same layout, same type, ground shifts to foxed paper.',
      'Crop the wordmark deliberately at the page bottom. Letterforms running off the edge read as confident scale; the same wordmark fitted inside the margins reads as a logo placement. Heavy weights and short names only.',
      'Inline email capture beats a form: one underlined field with `SEND` at its right end, body size, no label above, no button styling.',
      'Black type on a saturated orange ground. White would not hold contrast.',
      'Horizontal tracks need a persistent index and name in fixed corner positions, plus a `SCROLL →` affordance. The content changes, the frame does not.',
    ],
    never: [
      'A card grid for a text-only list of capabilities.',
      'A masonry portfolio grid.',
      'A third type size between the display face and the mono labels.',
      'White type on a saturated warm ground.',
    ],
    exemplars: [
      {
        site: 'runrobrun.com',
        url: 'https://www.runrobrun.com/',
        note: 'CREATIVE / DEVELOPER anchored to opposite corners; every non-headline element uppercase mono at 0.7rem.',
      },
      {
        site: 'pear.no',
        url: 'https://pear.no/',
        note: 'Terms section on foxed paper with drafting overlays and a labelled FULL DISCLOSURE block.',
      },
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
    mechanics: [
      'Commit completely — display headline at ~5rem, nav, body, labels, and the background dot grid all on the same fixed advance. Mono display over proportional body is the tell.',
      'Tune the dot-matrix ground to the same rhythm as the type so the background reads as the grid the type is sitting on.',
      'Nav is a floating rounded pill detached from the viewport edge, keeping the dark ground continuous behind it.',
      'Position is a numeric readout (`000%`) pinned to an edge, not a filling progress bar.',
      'Bracket-wrapped eyebrows (`[ THE FRAMEWORK ]`, `[ TALK TO US ]`) are the single consistent label device — cheap, and it reads as authored.',
      'A horizontal track must always state its length. Preview the full step set as one dotted line before it (`DISCOVER · DIAGNOSE · DESIGN · DELIVER · EVOLVE`), and show a step rail with the current step filled and the rest hollow during it. Trapping the user in a section of unknown length is the pattern\'s single biggest failure.',
      'Ghost numerals set enormous in a pale tint behind each panel, moving at a different rate to the text — parallax depth free from an element that is already the progress indicator.',
      'Em-dash prefixes instead of disc bullets, to keep the mono grid intact.',
      'Full theme inversion (dark hero to light section) is the strongest section boundary available and needs no rule or spacer.',
      'Centring is reserved for section openers and used nowhere else, which makes it a structural signal rather than a style.',
      'Arc-set type works as a section divider only as a continuous marquee. Static arc type reads as a badge or a seal; in motion it reads as atmosphere, and the curve is what stops it looking like a stock ticker. Accent exactly one word so the eye has a fixed point to track.',
      'Contact channels as full-width bordered cards: leading icon, label, the real address, arrow pinned right. Large obvious target, destination visible.',
      'Keep any wireframe or globe motif monochrome so the lone accent stays the only saturated thing on screen.',
    ],
    never: [
      'Monospace headlines over proportional body copy.',
      'Static arc-set type — it reads as a badge.',
      'Disc bullets inside a mono layout.',
      'A horizontal scroll section that does not declare its length.',
    ],
    exemplars: [
      {
        site: 'weevolveit.com',
        url: 'https://weevolveit.com/',
        note: 'Whole page in mono including a 5rem headline; dot-matrix ground, floating pill nav, 000% scroll readout.',
      },
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
    mechanics: [
      'The subject dissolves into the ground at its boundary, so it needs no containing frame and the adjacent column keeps its air. A crop or a card would undo the whole effect.',
      'Density is value. Darker regions are more points, never a second colour.',
      'Keep the particle field monochrome and spend the only saturated colour on actions.',
      'Tonal split headline: a proper noun over two lines with the second line dropped one value step. The block gets an internal gradient and reads as one unit instead of two shouted words.',
      'Three CTAs in one row give three intent levels by weight alone — filled, outlined in the accent, ghost on the ground. No size change needed.',
    ],
    never: [
      'A coloured or multi-hue particle field competing with the accent.',
      'Framing, cropping, or carding a subject whose whole point is that it dissolves.',
    ],
    exemplars: [
      {
        site: 'surendarselvaraj.com',
        url: 'https://www.surendarselvaraj.com/',
        note: 'Portrait as a particle field dissolving into near-black; three-tier button row beside it.',
      },
      {
        site: 'weevolveit.com',
        url: 'https://weevolveit.com/',
        note: 'Monochrome wireframe globe holding the hero while one magenta accent carries every action.',
      },
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
    mechanics: [
      'Evolve one illustrated motif through the page in different states rather than introducing a new image per section — the same subject as a monument in the hero, as a construction site in the terms. The reader tracks a narrative instead of a slideshow of unrelated art.',
      'Composite the artwork onto one flat modern ground — a saturated ultramarine, or aged foxed paper — and let the ground change signal the section, with layout and type unchanged.',
      'Keep typography restrained so the image carries: transitional serif at ~3.5rem, no display sizes, one small solid CTA.',
      'Thin hairline rules and a small marker in the margin imply a grid without drawing one.',
      'Keep the hero copy to one sentence; put the body paragraph below the fold line in its own labelled block.',
    ],
    never: [
      'Altering, recolouring, or filtering the source artwork — the modernity comes from type, crop and layout.',
      'Costume-drama pastiche typography (blackletter, engraved capitals) beside genuine classical imagery.',
      'More than one source style per page.',
    ],
    exemplars: [
      {
        site: 'pear.no',
        url: 'https://pear.no/',
        note: 'One golden-pear motif carried from neoclassical hero to architectural plan-view in the terms section.',
      },
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
    mechanics: [
      'Exactly one fidelity collision. Mixing one high-fidelity historical style with one low-fidelity digital style produces a stronger identity than either alone; a third style turns it into noise.',
      'The intruder must be legible as deliberate — dithered 1-bit clouds in a painterly sky, a chromatic smear across one object, a hard pixel staircase entering from an edge.',
      'A repeated geometric motif at section transitions makes unrelated sections feel authored by the same hand — reuse the staircase rather than inventing a second device.',
      'Typography stays out of the way: serif around 3.5rem, no display sizes, one small solid CTA.',
      'Hero holds one sentence; the supporting paragraph goes below the fold in a labelled block.',
    ],
    never: [
      'Two or more intruders — that is a glitch filter, not a fidelity collision.',
      'Display-size typography competing with the artwork.',
    ],
    exemplars: [
      {
        site: 'pear.no',
        url: 'https://pear.no/',
        note: 'Split hero: transitional serif left, neoclassical scene right with dithered 1-bit clouds as the only digital artefact.',
      },
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
    mechanics: [
      'PROVISIONAL — no capture in the vault yet. These are derived from the vocabulary, not read off a real page. Treat as a hypothesis and harden the first time a capture lands in `taste-vault/illustrated-storybook/`.',
      'The scene floats on a plain ground with no environment behind it; shadow is minimal and soft, because the object should read as built rather than placed.',
      'Reserve the typography space in the composition before the render exists — size the headline and gutters as if the diorama were already there.',
      'One material language throughout (all voxel, or all clay, or all paper), because the charm comes from a consistent fabrication rule.',
    ],
    never: [
      'A photographic or environmental backdrop behind the diorama.',
      'Heavy drop shadows standing in for studio lighting.',
      'Type set on top of the render rather than beside it.',
    ],
    exemplars: [],
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
    mechanics: [
      'Define what the marker means and apply it only to that — here, "the word carrying the commercial argument". Used about twice across a page, it teaches the reader its meaning; used once it is a flourish, used everywhere it is decoration.',
      'Emphasise with a background block, not a colour change. Recolouring a word inside an oversized headline weakens its contrast against the ground; a filled block keeps the type at full contrast and adds a second shape to the composition.',
      'Number every section (`01 / HERO`, `03 / WHO WE ARE`, `10 / PROOF`) and name it by its job — "PROOF", not "Testimonials". A long scroll becomes a legible document and every anchor gets a name.',
      'Zero-pad stat numerals (`012`, `025+`, `006`) so the row occupies even width. Without it, `12` beside `100%` makes the row look misaligned.',
      'Set the positioning statement at ~1.75rem — large for body copy, because it is the page\'s argument rather than supporting text.',
      'Overlay menu: few destinations set at display scale (~4rem) flush-left. Four small centred links read as an unfinished modal; four huge ones read as a deliberate index. Zero-padded index per item, a different hue each, carried from the section accents. Full contact block pinned along the bottom — the overlay is the one surface reachable from every page. Close control occupies the hamburger\'s exact position so nothing moves between states.',
      'Stacking cards: one hue per step, and because the cards overlap, a sliver of the previous colour stays visible at the top edge — colour carries position, no progress indicator needed. Split each card content-left and an oversized numeral right, cropped by the card edges at ~600px in a tint of the card\'s own colour. One idea per card; more and the reader cannot scroll back.',
      'For infrastructure products, a wiring diagram explains positioning faster than prose — your mark literally in the middle of the path. One colour per branch matched to its destination ring, orthogonal routing with rounded corners, no diagonals or crossings, real third-party marks in monochrome.',
      'Testimonials as full-width rows when the quotes are few and long; grids only for many short ones. Quote at ~2rem on the left two-thirds, attribution pinned right at ~0.7rem. Where clients cannot be named, anonymise by role and company category (`PRODUCT MANAGER / PE-BACKED GLOBAL TAX PLATFORM`) — a blank or "a client" destroys the credibility instead.',
      'Flood the contact section with one saturated brand colour while the rest of the page stays neutral. After a long warm off-white scroll the colour change alone says "this is the end and this is the action". Near-black type on the saturated ground, never white. Contact details as plain underlined text at body size, with one small pill for the primary action.',
      'Warm off-white or warm grey ground, never pure white — it softens the grid.',
      'A vertical accent bar entering a section from above threads it to the one before, instead of leaving isolated blocks.',
    ],
    never: [
      'White type on a mid-saturation ground.',
      'Diagonal or curving diagram lines — square reads as engineering, curved reads as marketing.',
      'Unpadded numerals in a stat row.',
      'A decorative emphasis device used once, or used without a defined meaning.',
      'Pure white as the page ground.',
    ],
    exemplars: [
      {
        site: 'indisea.com',
        url: 'https://indisea.com/',
        note: 'Amber marker on `maintain` in a 6rem grotesk hero, numbered sections throughout, cyan contact flood at the end.',
      },
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
    mechanics: [
      'Alternate fill and stroke down the lines of a display headline — solid / hollow / solid. The outlined line reads as a held breath between two assertions: it recedes while staying the same scale, so you get hierarchy without changing size, weight or colour.',
      'Exactly one high-chroma accent, reserved for things the user can click (plus section eyebrows). The user never has to hunt for what is actionable.',
      'A portrait bleeding to the viewport edge reads as environment; the same portrait in a card reads as an avatar. Desaturate it to black and white so the single accent can still dominate — a colour portrait gives the page two focal points.',
      'Put the stat row directly under the fold line at a fraction of the headline size — proof, immediately, without a section.',
      'A faint blueprint grid behind the content keeps a near-black ground from reading as empty.',
      'When the claim is volume of work, remove the gutters. Framed thumbnails invite inspection of each item and expose the weak ones; a seamless mass is judged as texture. Ramp the scale across the strip, growing to one large mockup, so the eye has an exit point. Use this only when the argument is "I have shipped a great deal" — never for "look at this one thing".',
      'Cap a neutral grid with one accent-coloured rule along the top and keep every interior divider dim grey. Colouring all the dividers flattens the emphasis.',
      'Repeat an identical internal template in every cell — zero-padded index, thin line icon at a consistent stroke weight, condensed title, one line of description, small bordered tag chips. Varying the contents per cell is the usual failure.',
      'Underline-only form inputs — a hairline rule per field, label above in ~0.7rem tracked uppercase. Boxed inputs import a UI aesthetic that fights a dark editorial page.',
      'State the response time beside the submit button (`Response within 24–48 hours.`). One line, and it removes the main reason people abandon a contact form.',
      'Repeat the email address at display size beneath the pitch, so people who distrust forms have a route that bypasses it.',
      'Offset the section intro to the right column with the heading on the left and the vertical gap between them left empty.',
      'Place a `VIEW ALL WORK →` link in the empty band above the content rather than below it — visible before the reader commits to scanning.',
    ],
    never: [
      'Boxed inputs on a dark editorial page.',
      'A second saturated colour anywhere.',
      'Colouring every divider in a grid.',
      'Framed, gutter-separated thumbnails when the argument is volume.',
      'A colour portrait beside a high-chroma accent.',
    ],
    exemplars: [
      {
        site: 'blumjeffrey.com',
        url: 'https://blumjeffrey.com/',
        note: 'SHAPE / VISION. / BUILD SYSTEMS. in solid-outline-solid at 6rem; acid yellow only on the one conversion action.',
      },
    ],
  },

  {
    id: 'poster-brutalist',
    name: 'POSTER BRUTALIST',
    tags: ['print', 'editorial', 'dark', 'engraving'],
    summary:
      "The page behaves like a printed exhibition poster. The institution's name is set heavy enough and large enough to be cropped by the viewport, and that becomes the hero image — no photography required to carry the first screen.",
    vocabulary: [
      'type as image — letterforms at a size where they read as shape rather than as words',
      'viewport crop — the wordmark deliberately running past the edge, signalling confidence in scale',
      'scale inversion — promotional content small and above, identity enormous and below',
      'marquee ticker — a continuously scrolling standing head carrying hours or announcements',
      'unequal cards — breaking a row out of equal widths so the grid stops reading as a template',
      'caption below — never overlay text on artwork; the art is the product',
      'full-width pill — a single action scaled to the content width instead of styled harder',
    ],
    mechanics: [
      'The name is the hero image: ultra-heavy grotesk near 9rem, wrapping to two lines and bleeding past the right edge. Only works at weights heavy enough for the letterforms to hold as shape — at regular weight the same size reads as a mistake.',
      'Invert the scale: promotional content (video card, ticker) small and above; identity enormous and below. Most sites do the reverse. Putting identity at the bottom of the first screen means the scroll starts from confidence rather than a sales pitch.',
      'A marquee ticker of hours or announcements as the standing head, scrolling continuously.',
      'Break a card row out of equal widths — roughly 45/55 — so the wider card takes priority without a badge, a "featured" label, or a different treatment. Enough to read as intentional, not enough to look broken.',
      'Captions below images, never overlaid. Overlaid text forces a scrim, the scrim dulls the artwork, and the artwork is the product. Correct default for any gallery, portfolio or product grid where the image is the value.',
      'One display face reused at several scales — wordmark, section heading, card title — is the entire type system.',
      'When one action matters more than everything around it, scale the button to the content width instead of styling it harder: a full-width pill at max radius, ~120px tall, heavy grotesk label optically centred in a large field. No gradient, no shadow, no icon — just size.',
      'Give the secondary action the identical pill in outline. Same geometry, inverted fill, is a cleaner hierarchy signal than changing size, radius or colour.',
    ],
    never: [
      'A fixed header with no reserved offset and no background fill — see the craft floor. This type\'s own reference site ships that bug: the transparent sticky header collides with the footer\'s first text row, and it is invisible at every scroll position except the very bottom.',
      'Overlaid captions or scrims on artwork.',
      'A "featured" badge where an unequal width would do.',
      'Display type below ultra-heavy weight at hero scale.',
    ],
    exemplars: [
      {
        site: 'newcastleartgallery.nsw.gov.au',
        url: 'https://newcastleartgallery.nsw.gov.au/',
        note: 'Gallery name at ~9rem cropped by the viewport as the hero; full-width black pill CTA. Also the source of the fixed-header collision anti-pattern.',
      },
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
      "derived heading colour — each card's heading drawn from a deeper shade of that card's own tint",
      'break the container — a portrait or mockup overflowing its card edge to create depth without a shadow',
      'inset card hero — a rounded card held in from the page edges rather than a full-bleed band',
      'serif/sans split — serif for the human greeting, geometric sans for the job title',
      'tinted card set — pale sand, mint, blush, periwinkle grounds distinguishing unlike projects',
    ],
    mechanics: [
      'Hero is a rounded card inset from the page edges, not a full-bleed band, with one element — a cut-out portrait, a mockup — breaking past its boundary. That overflow does more for depth than any shadow and costs nothing but `overflow: visible`.',
      'Two faces, two roles: serif for the human greeting (`Hi, I\'m …`), heavy geometric sans for the job title. The serif is the person, the sans is the job.',
      'Tint each card differently but derive its heading colour from a deeper shade of that card\'s own hue. A single shared heading colour across differently-tinted cards is what makes pastel grids look cheap.',
      'Copy order is problem, then intervention, then outcome — the artefact named last. Two sentences. Most portfolio cards lead with the artefact ("a booking platform") and never state the problem, which is why they are illegible to anyone who does not already care.',
      'Keep a secondary action visually distinct from the hero card — different fill, full pill radius — so it does not compete for the primary read.',
      'Footer is a single left-aligned column following one reading order: who → where → why contact → how. A four-column link grid on a personal site implies a sitemap that does not exist.',
      'Contact details as plain selectable text at ~1.25rem — no icons, no buttons, directly copyable.',
      'One framing sentence stating the intended use of the contact details qualifies inbound messages ("If you are thinking about hiring me or would like to discuss a project…").',
      'Enter the footer on a full-bleed saturated ground with a hard boundary and no transition.',
      'Hint any easter egg (`scroll on — the footer hides bubble wrap ↓`). An unhinted one is dead code, and the footer is the one region where nothing else is competing.',
    ],
    never: [
      'Artefact-first copy on a project card.',
      'A four-column footer link grid on a personal site.',
      'Drop shadows standing in for depth where a broken container would do.',
      'One shared heading colour across differently-tinted cards.',
    ],
    exemplars: [
      {
        site: 'dineshrevunuru.com',
        url: 'https://dineshrevunuru.com/',
        note: 'Inset rounded hero card with the portrait breaking its top edge; sand/mint/blush/periwinkle project cards with derived heading colours.',
      },
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
    mechanics: [
      'The display serif runs around 5rem. High thick/thin modulation needs the size to survive on a dark ground; the same face at 2rem goes thin and dies.',
      'Split a two-line proper noun tonally — second line one value step darker. Internal gradient, reads as one unit, and the eye lands on the first line first.',
      'Three CTAs in one row, three intent levels by weight alone: filled white, outlined in the accent, ghost on the ground. Repeat the same button system in every section — that consistency is what makes the site feel engineered.',
      'The largest text in a section is the argument, not the label. Set the claim at ~3rem and demote the section name to a ~0.7rem bracket eyebrow. Readers skim headings, so give them something worth skimming.',
      'A vertical tick rail on the page edge labels the current section — persistent orientation without a sticky bar eating vertical space.',
      'Portrait card with generous radius and a small amber badge overlapping its bottom edge — break-the-container depth on a flat image.',
      'Bio at ~1rem, ~1.7 line-height, ~60ch measure, two paragraphs. Long-form credibility copy needs the narrow measure.',
      'Contact without a form: four equal channel cards each showing the label, the real address (`designbysuren@gmail.com`, `/in/…`) and an action link. Show the destination — icon-only social rows force a click to discover where they lead.',
      'An outlined status pill stating what you currently want (`EXPLORING STAFF AND PRINCIPAL PRODUCT DESIGN ROLES`) in ~0.7rem tracked mono with a small amber dot, placed above the contact options, filters and directs every inbound message. The dot reads as live, implying the statement is current.',
      'Initials discs beat photographs in a testimonial grid — six mismatched headshots destroy the grid\'s coherence, six identical discs keep it uniform, and the credibility is in the name and role. Name near-white, role and company grey: the company persuades but must stay subordinate to the person, or the section reads as a logo wall pretending to be quotes.',
      'Edit quotes to 15–20 words so all cards land on a uniform height. That is a layout decision, not a copy one. Cap the grid at six with an overflow link (`More testimonials on LinkedIn →`) to signal depth without an endless list.',
      'One metric in the accent colour at ~2rem immediately after a case-study summary. A list of responsibilities is unfalsifiable; one number makes the whole card credible. The summary itself states role, dates, what shipped, and current status — four facts, one paragraph.',
      'Merge one cell of a bento grid to create a hero item instead of maintaining a second "featured" card variant — same component, same styling, different span. Differentiate it by luminance (a subtle radial lift), not by a border, which would break the soft-card language.',
      'A coloured status dot beside each category label classifies item type at a glance while the type stays monochrome. Draw the dot colours from the same set used to index the sections.',
      'End every card in a grid with the same affordance in the same position (`EXPLORE ↗`) — one repeated action, not four link styles.',
    ],
    never: [
      'A cool accent on near-black — amber, brass or champagne only.',
      'Mismatched headshots in a testimonial grid.',
      'A separate "featured" card variant where a merged grid cell would do.',
      'A borders-based hero card on a dark bento grid.',
      'Case-study copy with no metric.',
    ],
    exemplars: [
      {
        site: 'surendarselvaraj.com',
        url: 'https://www.surendarselvaraj.com/',
        note: 'Name at 5rem in a tonal split; amber accent, scroll rail, initials-disc endorsement grid, one metric per case study.',
      },
    ],
  },
]

export const designTypeById = Object.fromEntries(
  designTypes.map((type) => [type.id, type]),
)

/** Where screenshots for a type live, outside this repo. */
export function vaultPath(typeId) {
  return `~/Screenshots/taste-vault/${typeId}/`
}
