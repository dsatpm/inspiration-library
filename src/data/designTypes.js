/**
 * Design types — the archive's genre registry, and the only content file.
 *
 * The type list mirrors the vault exactly: one entry per folder in
 * `~/Screenshots/taste-vault/`. If a folder exists there and not here, the
 * registry is out of date — not the vault.
 *
 * Each type answers five questions:
 *   summary     what the mode is, visually
 *   vocabulary  the devices that ARE the type — name them when briefing
 *   mechanics   the measurable rules
 *   never       the failure modes for this specific type
 *   exemplars   sites the rules were read off, with no image stored here
 *
 * `summary` is the field most worth rewriting by hand — it is the visual
 * description a brief is built from, and it should read like art direction,
 * not like a tag list.
 */

/**
 * Applies to every type. These are engineering failures, not stylistic ones,
 * and no design direction excuses them.
 */
export const craftFloor = [
  'Anything fixed to the viewport must reserve matching offset in the document flow — `padding-block-start` at least equal to the header height on the footer and on every section start — or carry a real background fill. A transparent fixed header with no reserved space collides with content at scroll-end, and only at scroll-end, which is why it ships. Test sticky headers at the bottom of the page, not mid-page.',
  'Never animate a text block from zero opacity if the space would otherwise be empty. Overlap the exit and the entry so the composition holds at every frame.',
  'Form labels sit permanently above the field. Placeholder-as-label disappears the moment the user types — the accessibility failure that kills most minimal forms.',
  'Measure limits scale with type size. ~45–75 characters at body size; ~90 is fine at 3rem because the eye crosses the same angular distance in fewer fixations. Full-width body text at 1rem is the most common failure in an about section.',
  'A horizontal-scroll or pinned section must declare its length before the user enters it — a step preview, a rail, a count. Trapping someone in a track of unknown depth is the pattern\'s defining failure.',
  'Respect `prefers-reduced-motion`.',
]

export const designTypes = [
  {
    id: 'brutalism',
    name: 'BRUTALISM',
    tags: ['monochrome', 'concrete', 'type-as-mass', 'dark'],
    summary:
      'Architectural brutalism carried onto the screen. Black and white only, concrete photography, and one ultra-heavy grotesk set large enough that the letterforms read as structure rather than as words. Nothing is rounded, nothing is soft, and the page is built from hard rectangles butted against each other. Weight and mass are the entire expressive range.',
    vocabulary: [
      'type as image — letterforms at a size where they read as shape, cropped by the viewport',
      'gutterless collage — images butted with no spacing so the set is judged as texture, not item by item',
      'fill/outline alternation — alternating solid and stroked lines in one headline for hierarchy without a size change',
      'bleed portrait — a photograph running to the viewport edge, reading as environment rather than avatar',
      'scale inversion — promotional content small and above, identity enormous and below',
      'toxic accent — at most one high-chroma colour, used only where the user can click',
      'hard-edge panel — a rectangle of flat black or flat white with no radius, shadow or border',
    ],
    mechanics: [
      'The wordmark or subject name is the hero image: ultra-heavy grotesk near 9rem, wrapping and bleeding past the viewport edge. Only works at weights heavy enough for the letterforms to hold as shape — at regular weight the same size reads as a mistake.',
      'Desaturate all photography to black and white. It is what lets a single accent colour dominate; a colour image gives the page two focal points.',
      'Invert the scale: promotional content small and above, identity enormous and below. The scroll then starts from confidence rather than a sales pitch.',
      'Alternate fill and stroke down the lines of a display headline — solid / hollow / solid. The outlined line recedes while staying the same scale, so you get hierarchy without changing size, weight or colour.',
      'When the claim is volume of work, remove the gutters. Framed thumbnails invite inspection of each item and expose the weak ones; a seamless mass is judged as texture. Ramp the scale across the strip so the eye has an exit point.',
      'Break a card row out of equal widths — roughly 45/55 — so the wider item takes priority without a badge or a "featured" label. Enough to read as intentional, not enough to look broken.',
      'Captions below images, never overlaid. A scrim dulls the photograph, and the photograph is the argument.',
      'One display face reused at several scales — wordmark, section heading, caption — is the entire type system.',
      'Scale a single decisive action to the content width instead of styling it harder: a full-bleed bar or pill, ~120px tall, heavy grotesk label optically centred. No gradient, no shadow, no icon. Give the secondary action identical geometry with an inverted fill.',
      'A portrait bleeding to the viewport edge reads as environment; the same portrait in a card reads as an avatar. Pick deliberately.',
      'Put a stat row directly under the fold line at a fraction of the headline size — proof, immediately, without a section.',
      'Repeat an identical internal template in every grid cell: zero-padded index, condensed title, one line of description. Varying the contents per cell is the usual failure.',
    ],
    never: [
      'Any border radius, drop shadow, or soft gradient.',
      'Colour photography.',
      'A second saturated colour.',
      'Display type below ultra-heavy weight at hero scale.',
      'Framed, gutter-separated thumbnails when the argument is volume.',
    ],
    exemplars: [
      {
        site: 'blumjeffrey.com',
        url: 'https://blumjeffrey.com/',
        note: 'SHAPE / VISION. / BUILD SYSTEMS. in solid-outline-solid at 6rem; acid yellow only on the one conversion action.',
      },
      {
        site: 'newcastleartgallery.nsw.gov.au',
        url: 'https://newcastleartgallery.nsw.gov.au/',
        note: 'Institution name at ~9rem cropped by the viewport as the hero; full-width black pill CTA. Also the source of the fixed-header collision in the craft floor.',
      },
    ],
  },

  {
    id: 'neo-brutalism',
    name: 'NEO-BRUTALISM',
    tags: ['saturated', 'hard-border', 'playful', 'illustrated'],
    summary:
      'The web-native descendant that kept the hard edges and threw out the greyscale. Electric blue, hot pink, acid green and lilac grounds; every surface outlined in a thick black stroke with a hard offset shadow and no blur; retro-cartoon mascots, sticker shapes and deliberate Win95 chrome. Loud, flat, and cheerful — it borrows brutalism\'s bluntness as a joke rather than as a creed.',
    vocabulary: [
      'hard offset shadow — a solid black rectangle offset a few pixels behind a card, never blurred',
      'thick black stroke — a 2–4px outline on every card, button and input',
      'saturated ground — a full-bleed primary or candy colour as the page background, not a tint',
      'rubber-hose mascot — a 1930s-cartoon character with gloved hands and bean eyes, used as the illustration language',
      'sticker shape — a starburst, blob or badge dropped on top of a card at an angle',
      'chrome nostalgia — deliberate Win95 title bars, marquee tickers, cursor arrows as ornament',
      'tinted card set — pale or candy grounds distinguishing unlike items in a grid',
    ],
    mechanics: [
      'Depth comes from a hard offset shadow — a solid black rectangle a few pixels down-right, zero blur — not from a soft shadow. A blurred shadow instantly reads as a different style.',
      'Every interactive surface carries the same stroke weight. Inconsistent outline widths are what make the style look copied rather than authored.',
      'The ground is saturated, not tinted. A pale pastel page with black borders is a different, softer type; this one commits to the full-chroma field.',
      'Tint each card differently but derive its heading colour from a deeper shade of that card\'s own hue. A single shared heading colour across differently-tinted cards is what makes a multi-colour grid look cheap.',
      'Let one element break its container — a mascot\'s arm over a card edge, a badge overlapping a corner. That overflow does more for depth than any shadow and costs nothing but `overflow: visible`.',
      'Pair a heavy geometric or rounded display sans with a plain mono for labels. Two faces maximum; the colour is already doing the shouting.',
      'Copy order on a card is problem, then intervention, then outcome — the artefact named last. Two sentences. Leading with the artefact is why most cards are illegible to anyone who does not already care.',
      'Mascots must share one drawing language: same line weight, same eye construction, same palette. Mixed illustration sources are the fastest way to make this style look like a template.',
      'Keep contrast honest — near-black type on the saturated ground, never white on mid-chroma. The style is loud, not illegible.',
    ],
    never: [
      'Blurred or soft drop shadows.',
      'Muted, desaturated, or greyscale grounds.',
      'Mixed illustration styles in one page.',
      'White type on a mid-saturation ground.',
      'Artefact-first copy on a card.',
    ],
    exemplars: [],
  },

  {
    id: 'classical',
    name: 'CLASSICAL',
    tags: ['heritage', 'luxury', 'serif', 'grain'],
    summary:
      'European heritage luxury — wine estates, fashion houses, old buildings. Sage, stone, oatmeal and bone grounds carrying a fine paper grain; an oversized high-contrast display serif cropped by the viewport; a wordmark in letter-spaced small caps, often with an interpunct or a classical V for U. Photography is frescoes, carved stone and draped fabric in low warm light. Thin gold or hairline linework does all the ornament there is. The register is composed and unhurried — age is the product.',
    vocabulary: [
      'cropped display serif — a word at 15rem+ running past the viewport edge, only partly legible',
      'interpunct wordmark — DE·BVRIS: letter-spaced small caps with a mid-dot, classical letterform substitutions allowed',
      'paper grain — a fine noise texture over a flat warm ground so it does not read as unfinished',
      'tonal ground — sage, stone, oatmeal, bone; never white, never black',
      'hairline rule — a single thin gold or ink line as the only ornament',
      'motif evolution — one illustrated or photographic subject carried through the page in different states',
      'low warm light — photography lit like an interior at dusk, never studio-flat',
    ],
    mechanics: [
      'The ground is a tonal warm neutral — sage, stone, oatmeal — with a fine grain over it. Pure white reads as a template; pure black belongs to SERIF NOIR.',
      'Set the display serif large enough to be cropped by the viewport. A word only partly legible reads as confidence; the same word fitted inside the margins reads as a heading.',
      'Colour the display type from the environment in the photography — an olive, an ink, a clay — rather than black. Large type buys you the lower contrast; small type does not.',
      'A section may open with one paragraph set at ~3rem instead of heading-plus-body: the paragraph IS the heading. Works under about 60 words of genuinely good copy; at 3rem every weak clause is legible from across the room.',
      'Measure scales with size — a ~90-character line is fine at 3rem and exhausting at 1rem. Give oversized copy proportionally oversized margins below it or it reads as a mistake.',
      'Place text over the quietest region of a photograph rather than adding a scrim. Crop and text position are chosen together; it is an art-direction decision, not a CSS one.',
      'Evolve one motif through the page in different states rather than introducing a new image per section. The reader tracks a narrative instead of a slideshow.',
      'Ornament is one hairline rule or one small gold mark. Two ornament systems is one too many.',
      'Keep the CTA small and understated. A loud button contradicts the positioning the rest of the page is buying.',
      'Split attribution by value, not punctuation: name in near-black, credential in grey. Two facts, not one string.',
      'A flat colour change is a stronger section boundary than a rule or a gap — the photograph ends, the tonal ground begins.',
    ],
    never: [
      'Pure white or pure black grounds.',
      'Costume-drama pastiche type — blackletter, engraved capitals, faux-medieval faces.',
      'Gradient scrims over photography.',
      'A loud, saturated CTA.',
      'Studio-flat or stock-lit photography.',
    ],
    exemplars: [
      {
        site: 'deburis.it',
        url: 'https://www.deburis.it/',
        note: 'Interpunct small-caps wordmark over fresco and carved-stone footage; oversized serif vintage numerals on warm ground.',
      },
      {
        site: 'tengilemalamala.com',
        url: 'https://tengilemalamala.com/',
        note: 'Olive used as the single editorial-voice colour throughout; oversized serif paragraph as a section opener.',
      },
      {
        site: 'pear.no',
        url: 'https://pear.no/',
        note: 'One golden-pear motif carried from hero monument to architectural plan-view on foxed paper.',
      },
    ],
  },

  {
    id: 'constructivism',
    name: 'CONSTRUCTIVISM',
    tags: ['diagonal', 'agitprop', 'red-black', 'photomontage'],
    summary:
      'Soviet agitprop geometry rebuilt for the screen. A hard diagonal splits the page; flat red, black and white do all the work, with acid green or cyan allowed as the one modern intrusion. Type is heavy condensed caps set on the diagonal or rotated to run vertically up a column. Photography is high-contrast black and white, cut out and composited as photomontage rather than placed in a frame. Every element is angled, aligned to the diagonal, and doing propaganda.',
    vocabulary: [
      'diagonal split — a single hard-edged angled boundary dividing the page into two colour fields',
      'rotated column type — a word set vertically up the side, reading bottom-to-top',
      'photomontage — cut-out high-contrast photography composited onto flat colour, not framed',
      'wedge — a solid triangle used as a directional pointer into the composition',
      'flat red — a single unmodulated primary red as the dominant field',
      'circular crop — a portrait isolated in a hard circle against the flat ground',
      'radial linework — fine concentric or ray lines behind the montage implying machinery',
    ],
    mechanics: [
      'One diagonal governs the whole composition, and everything else aligns to it — type baselines, wedges, image crops. A second unrelated angle destroys it.',
      'Three flat colours maximum: red, black, white. Acid green or cyan may replace nothing — it is added as a single accent when the page needs a modern tell.',
      'Colour is unmodulated. No gradients, no tints, no transparency — the fields are flat plates.',
      'Photography is cut out and composited, never placed in a rectangle with a caption. Push the contrast until midtones collapse.',
      'Rotate a word to run vertically up a column as a structural element, not as decoration — it should carry the section name or the subject, so the rotation is legible as a deliberate reading path.',
      'Use a wedge or arrow as a directional device pointing into the focal element. That is the type\'s substitute for a scroll cue.',
      'Set headlines in heavy condensed caps, tight-tracked, with lines butted hard against each other. Generous leading undoes the poster.',
      'Fine radial or concentric linework behind the montage adds machinery without adding a colour.',
      'When a ruled grid appears instead of a diagonal, keep the rules hairline and the cells unequal, with most of them deliberately empty — the emptiness is the composition.',
    ],
    never: [
      'Gradients, tints, or transparency on the colour fields.',
      'More than one governing angle.',
      'Photography in a plain rectangle with a caption below.',
      'Loose leading or wide tracking on display type.',
      'A pastel or muted palette.',
    ],
    exemplars: [],
  },

  {
    id: 'dither',
    name: 'DITHER',
    tags: ['1-bit', 'bitmap', 'halftone', 'mono'],
    summary:
      'One-bit imagery as the page\'s material. Photographs are thresholded into stippled black-and-white bitmaps, gradients faked with dot patterns, and the resulting texture is used as ground, illustration and ornament at once. Sits on near-black or on a paper-white with visible fold and scan artefacts. Type is heavy grotesk or monospace; where the commitment is total the fixed character advance becomes the grid.',
    vocabulary: [
      '1-bit dither — two-tone stippling used to fake gradient, borrowed from early bitmap displays',
      'threshold photography — an image reduced to pure black and white with no midtones',
      'dot matrix — a regular dot field background tuned to the same rhythm as the type',
      'density as value — darker regions are simply more dots, never a different colour',
      'fixed advance — every glyph occupies identical width, so columns align without a grid system',
      'bracket label — section eyebrows wrapped as [ LIKE THIS ], a mono-native convention',
      'scan artefact — paper fold lines, registration slip, and edge noise left in deliberately',
    ],
    mechanics: [
      'Density is the only value channel. Darker areas are more dots, never a second colour or an opacity change.',
      'Tune the dot pitch of the background to the rhythm of the type so the ground reads as the grid the type sits on, not as wallpaper.',
      'The dissolve is the frame. A dithered subject fading into the ground needs no crop, card or border — adding one undoes the effect.',
      'If you commit to monospace, commit completely — display, nav, body, labels and background grid. Mono headlines over proportional body is what makes monospace look accidental.',
      'Bracket-wrapped eyebrows (`[ THE FRAMEWORK ]`) are the single consistent label device — cheap, and it reads as authored.',
      'Position is a numeric readout (`000%`) pinned to an edge, not a filling progress bar.',
      'Em-dash prefixes instead of disc bullets, to keep the fixed grid intact.',
      'Full theme inversion — near-black to paper-white — is the strongest section boundary available and needs no rule or spacer.',
      'Keep any wireframe, globe or 3D motif monochrome so a single accent stays the only saturated thing on screen.',
      'Leave scan and fold artefacts in. A perfectly clean dither reads as a filter; an imperfect one reads as a print.',
      'Detach the nav from the viewport edge as a floating pill so the dithered ground stays continuous behind it.',
    ],
    never: [
      'Colour inside the dithered image.',
      'Smooth anti-aliased gradients anywhere on the page.',
      'Monospace headlines over proportional body copy.',
      'Disc bullets.',
      'A dithered subject placed inside a card or frame.',
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
    id: 'editorial',
    name: 'EDITORIAL',
    tags: ['index', 'magazine', 'warm-neutral', 'photography-led'],
    summary:
      'A magazine masthead\'s apparatus applied to a studio or portfolio site. Warm off-white or bone grounds, a serif-and-grotesk pairing used as two registers rather than two styles, and information set as dense indexed tables — client, discipline, year — that reward reading rather than scanning. Photography is art-directed and colour-rich, presented full-height with the caption underneath. Wide margins, no cards, no boxes; the hairline rule is the only divider.',
    vocabulary: [
      'index table — content set as aligned columns with hairline rules, not cards',
      'serif/sans register split — italic serif for the name or the voice, grotesk for the job and the data',
      'caption below — never overlay text on artwork; the art is the product',
      'image archive rail — a vertical column of full-bleed photography running alongside the reading column',
      'staggered column — vertical offset between columns so the layout reads as composed, not gridded',
      'small-caps eyebrow — a tracked label at ~0.7rem naming the section and nothing else',
      'oversized body — body copy set at 1.5–1.75rem because it is the argument, not support',
    ],
    mechanics: [
      'A list of facts is a table, not a card grid. Columns of client, discipline and year with hairline rules are scannable in one vertical pass; cards force a zig-zag and inflate ten items into a full screen.',
      'Two faces, two jobs: an italic or high-contrast serif for the human voice and the project name, a neutral grotesk for roles, dates and metadata. Never mix them inside one string.',
      'Vertical offset between columns — several hundred pixels — is what makes an editorial layout read as designed rather than gridded. Matched baselines collapse it into an ordinary two-column block.',
      'Captions go below the image at ~1rem with a small grey metadata line. Overlaid text forces a scrim, the scrim dulls the photograph, and the photograph is the value.',
      'Set the positioning statement at ~1.75rem — large for body copy, because it is the page\'s argument rather than supporting text.',
      'Run a full-bleed image rail alongside the reading column rather than interrupting the text with inline figures. The reader chooses when to look.',
      'Full-width rows suit few, long, substantive quotes; grids suit many short ones. At three quotes a grid leaves every card cramped.',
      'Where a client cannot be named, anonymise by role and company category (`PRODUCT MANAGER / PE-BACKED GLOBAL TAX PLATFORM`). A blank or "a client" destroys the credibility instead.',
      'Keep the grounds warm — bone, oyster, off-white. Pure white flattens art-directed photography.',
      'Index the sections explicitly (`01 /`, `SELECT CLIENTS`, `FEATURES, AWARDS & PRESS`) so a long scroll reads as a document with named anchors.',
      'Consistent crop ratio and consistent colour grading across a photo row is what holds it together — more than alignment does.',
    ],
    never: [
      'Card grids for text-only lists.',
      'Overlaid captions or scrims on photography.',
      'Pure white grounds.',
      'A third type family.',
      'Full-width body text at 1rem.',
    ],
    exemplars: [
      {
        site: 'tengilemalamala.com',
        url: 'https://tengilemalamala.com/',
        note: 'Asymmetric editorial grid with several-hundred-pixel column offsets; three-anchor nav so nothing competes with the display type.',
      },
      {
        site: 'runrobrun.com',
        url: 'https://www.runrobrun.com/',
        note: 'Capabilities as an indexed table — [01] index, name at 2rem, mono description, hairline rule per row.',
      },
    ],
  },

  {
    id: 'glitched',
    name: 'GLITCHED',
    tags: ['dark', 'dossier', 'offset-panels', 'single-red'],
    summary:
      'Investigative-dossier design. A dithered or thresholded photograph runs full-bleed behind hard-edged panels that overlap and sit slightly out of register, as if the layout were printed twice. Near-black ground, bone panels, and exactly one signal red carrying headlines, indices and struck-through numerals. Where DITHER treats the bitmap as a material, GLITCHED treats it as evidence — the interface is a case file being assembled on screen.',
    vocabulary: [
      'offset panel — a solid content block overlapping another, deliberately out of register',
      'the intruder — a single low-fidelity digital artefact in an otherwise coherent scene',
      'struck index — a numbered list with passed items ruled through',
      'dossier numbering — DOSSIER 02, 02.01, 02.03 as the section addressing scheme',
      'signal red — one saturated red used for headlines, indices and nothing decorative',
      'chromatic smear — an RGB-split drag across part of an image, as if the render failed mid-frame',
      'rotated marginalia — mono strings set vertically along a panel edge',
    ],
    mechanics: [
      'Exactly one red. It carries the headline, the index and the active state — never a background fill, never an accent on something inert.',
      'Panels overlap and sit out of register by a visible margin. A near-miss reads as a bug; commit to 20–40px so it reads as printing.',
      'The full-bleed background image is dithered, not blurred or darkened. Legibility comes from the panels sitting on top of it, not from a scrim.',
      'Exactly one kind of intruder per page. One artefact reads as authored; three read as noise.',
      'Number sections as a dossier (`DOSSIER 02`, then `02.01`, `02.03`) and rule through the indices the reader has passed. The index is the progress indicator.',
      'Body copy sits on a solid bone panel at full contrast. Dark-on-light inside the panel against light-on-dark outside it is the whole contrast system.',
      'Set marginalia in mono, rotated along a panel edge, carrying real data — a timestamp, a section address, a source. Decorative rotated text reads as a screensaver.',
      'Headline in heavy grotesk caps, tight-tracked, in the red, at 3–5rem. The photograph carries the atmosphere so the type does not need to.',
      'A repeated geometric motif at section transitions makes unrelated sections feel authored by the same hand — reuse one, do not invent a second.',
    ],
    never: [
      'More than one red, or a second saturated colour.',
      'Gradient scrims to make text legible over the image.',
      'Two or more kinds of glitch artefact.',
      'Blurred or soft-focus background imagery.',
      'Rotated text that carries no information.',
    ],
    exemplars: [
      {
        site: 'highline.huffingtonpost.com',
        url: 'https://highline.huffingtonpost.com/',
        note: 'Full-bleed 1-bit dithered photography, bone panels overlapping out of register, one signal red, struck-through dossier index.',
      },
      {
        site: 'pear.no',
        url: 'https://pear.no/',
        note: 'Dithered 1-bit clouds as the single digital intruder in an otherwise painterly scene.',
      },
    ],
  },

  {
    id: 'minimalism',
    name: 'MINIMALISM',
    tags: ['light', 'grid', 'restraint', 'neutral'],
    summary:
      'White or near-white, and almost nothing on it. A neutral grotesk at two or three sizes, generous empty space, and — the tell that separates this from a blank page — a faintly visible column grid the content aligns to. Colour appears once, usually as a small accent or a single tinted illustration. Interface chrome is soft-cornered and understated: pill nav, quiet buttons, a tiny index rail. The restraint has to be structural, or it just reads as unfinished.',
    vocabulary: [
      'visible column grid — faint vertical rules showing the structure the content sits on',
      'pill nav — a soft-cornered floating nav bar detached from the viewport edge',
      'index rail — a tiny 001/002 position marker at the page edge instead of a sticky nav',
      'single accent — one colour, used once or twice per screen',
      'quiet CTA — an understated button that does not raise its voice above the type',
      'logo row — client or partner marks in monochrome at small scale as the proof device',
      'generous measure — wide margins and a short line length; the emptiness is deliberate',
    ],
    mechanics: [
      'Show the grid. Faint vertical column rules are what separate considered minimalism from an empty page — they prove the emptiness was measured.',
      'Two or three type sizes total. Minimalism fails by having a fifth size more often than by having a wrong colour.',
      'Grey down the secondary clause of a headline rather than shrinking it. Value contrast at one size reads calmer than a size step.',
      'One accent colour, appearing once or twice per screen, on the thing that matters. A second accent is the whole budget spent.',
      'Keep the nav as a floating soft-cornered pill so the ground stays continuous behind it.',
      'Use a tiny numeric index rail (`001`) at the page edge for orientation instead of a sticky bar eating vertical height.',
      'Logo rows go monochrome at small scale, aligned on optical weight rather than bounding box.',
      'Cards, when used at all, are defined by a hairline and a wide internal pad — never by a fill or a shadow.',
      'Contact details as plain selectable text at ~1.25rem. No icons, no buttons, directly copyable.',
      'A single left-aligned footer column following one reading order — who, where, why, how. A four-column link grid implies a sitemap that does not exist.',
      'Every gap should be a multiple of one spacing unit. Minimalism exposes arbitrary spacing the way a quiet room exposes a hum.',
    ],
    never: [
      'Generic clip-art or stock line illustration — it is the fastest way to make a white page look like a template.',
      'A fifth type size.',
      'Two accent colours.',
      'Drop shadows or filled cards.',
      'Emptiness with no visible structure behind it.',
    ],
    exemplars: [
      {
        site: 'mobilitylab.ch',
        url: 'https://www.mobilitylab.ch/',
        note: 'White ground with faint column rules, greyed second clause, pill nav, 001 index rail, monochrome partner row.',
      },
      {
        site: 'dineshrevunuru.com',
        url: 'https://dineshrevunuru.com/',
        note: 'Single-column left-aligned footer; contact as plain copyable text at 1.25rem.',
      },
    ],
  },

  {
    id: 'serif-noir',
    name: 'SERIF NOIR',
    tags: ['dark', 'display-serif', 'metallic-accent', 'editorial'],
    summary:
      'A high-contrast display serif on near-black, with one warm metallic accent and nothing else competing. The face does the work: extreme thick/thin modulation, generous ligatures and italic alternates, set large enough to survive the dark ground. Photography, where it appears, is low-lit interior or portrait with the serif laid over it. The register is composed and expensive rather than loud — print-journalism authority applied to a personal or product surface. Coined for this archive; no prior label fit.',
    vocabulary: [
      'high-contrast serif — a display face with extreme thick/thin modulation, needing large sizes on dark grounds',
      'italic alternate — a swash or alternate glyph used once per headline as the flourish',
      'tonal split headline — a two-line proper noun with the second line dropped one value step',
      'warm metallic accent — amber, brass or champagne against the near-black, never a cool accent',
      'three-tier buttons — filled / outlined / ghost in one row for three levels of intent',
      'bracket eyebrow — [ ABOUT ], [ CONTACT ] as small mono section labels',
      'scroll rail — a vertical tick index on the page edge instead of a sticky nav bar',
      'initials disc — a lettered circle standing in for a headshot, keeping a testimonial grid uniform',
    ],
    mechanics: [
      'The display serif runs around 5rem or larger. High thick/thin modulation needs the size to survive on a dark ground; the same face at 2rem goes thin and dies.',
      'Use the face\'s alternates and ligatures once per headline — one swash italic word among roman caps. Used on every word it becomes a wedding invitation.',
      'Split a two-line proper noun tonally — second line one value step darker. Internal gradient, reads as one unit, and the eye lands on the first line first.',
      'One warm metallic accent only. A cool accent on near-black reads as a dashboard.',
      'Three CTAs in one row give three intent levels by weight alone: filled, outlined in the accent, ghost on the ground. Repeat the same button system in every section — that consistency is what makes the page feel engineered.',
      'The largest text in a section is the argument, not the label. Set the claim at ~3rem and demote the section name to a ~0.7rem bracket eyebrow.',
      'A vertical tick rail on the page edge labels the current section — orientation without a sticky bar eating vertical height.',
      'Where photography appears, it is low-lit and warm, and the serif sits over its darkest region. No scrim.',
      'Contact without a form: equal channel cards each showing the label, the real address, and an action link. Show the destination — icon-only rows force a click to discover where they lead.',
      'An outlined status pill stating what you currently want, with a small amber dot, placed above the contact options, filters and directs every inbound message. The dot reads as live.',
      'Initials discs beat photographs in a testimonial grid — six mismatched headshots destroy the grid, six identical discs keep it uniform, and the credibility is in the name and role. Name near-white, role and company grey.',
      'Edit quotes to 15–20 words so cards land on a uniform height. That is a layout decision, not a copy one. Cap the grid and add an overflow link.',
      'One metric in the accent at ~2rem immediately after a case-study summary. A list of responsibilities is unfalsifiable; one number makes the card credible.',
      'Merge one cell of a bento grid for a hero item instead of a second card variant, and differentiate it by luminance — a subtle radial lift — not by a border.',
    ],
    never: [
      'A cool accent on near-black — amber, brass or champagne only.',
      'The display serif below ~3rem.',
      'Blackletter, medieval or woodcut faces — that is a different register entirely.',
      'Mismatched headshots in a testimonial grid.',
      'Case-study copy with no metric.',
    ],
    exemplars: [
      {
        site: 'surendarselvaraj.com',
        url: 'https://www.surendarselvaraj.com/',
        note: 'Name at 5rem in a tonal split; amber accent, scroll rail, initials-disc endorsement grid, one metric per case study.',
      },
      {
        site: 'strakk.nl',
        url: 'https://www.strakk.nl/',
        note: 'Elegant serif project titles laid over low-lit interior photography; pill nav, quiet contact strip.',
      },
    ],
  },

  {
    id: 'swiss',
    name: 'SWISS',
    tags: ['grid', 'grotesk', 'tabular', 'red-accent'],
    summary:
      'International-style discipline, unromantic and legible. A large neutral grotesk set tight, a strict column grid, numbered sections, and one red or amber used semantically rather than decoratively. Numerals are tabular and zero-padded so rows keep even width. Grounds are warm off-white or light grey; ornament is a hairline rule and nothing more. The argument is that the structure itself is the design.',
    vocabulary: [
      'marker block — a solid colour block behind a single word, preserving full type contrast where recolouring would weaken it',
      'section numbering — every section labelled 01 /, 02 /, so a long scroll reads as a document',
      'zero-padded numerals — 012, 025+, 006 so a stat row occupies even width',
      'greyed continuation — a headline whose later clause drops to grey at the same size',
      'orthogonal routing — diagram lines kept square with rounded corners, never diagonal',
      'hairline rule — the only divider; no borders, no cards, no shadows',
      'warm ground — off-white or warm grey rather than pure white, softening the grid',
    ],
    mechanics: [
      'Define what the accent means, then apply it only to that — "the word carrying the commercial argument", or "the current state". Used about twice across a page it teaches the reader its meaning; used everywhere it is decoration.',
      'Emphasise with a background block, not a colour change. Recolouring a word inside an oversized headline weakens its contrast against the ground; a filled block keeps the type at full contrast and adds a second shape.',
      'Drop the continuation of a headline to grey at the same size rather than shrinking it. Value carries the hierarchy; the grid stays intact.',
      'Number every section (`01 / HERO`, `10 / PROOF`) and name it by its job — "PROOF", not "Testimonials". A long scroll becomes a legible document and every anchor gets a name.',
      'Zero-pad and tabular-align every numeral in a stat row. Without it, `12` beside `100%` makes the row look misaligned.',
      'Set the positioning statement at ~1.75rem — large for body copy, because it is the argument.',
      'Headlines are tight-tracked — negative letter-spacing at display size is most of what makes a grotesk look Swiss rather than default.',
      'For infrastructure products, a wiring diagram explains positioning faster than prose. One colour per branch matched to its destination, orthogonal routing with rounded corners, no diagonals or crossings.',
      'Stacking or stepped sections take one hue per step, with a sliver of the previous colour left visible so colour carries position. One idea per step.',
      'Flood a closing section with one saturated colour while the rest of the page stays neutral. After a long neutral scroll the colour change alone says "this is the end and this is the action". Near-black type on it, never white.',
      'Warm off-white or warm grey ground, never pure white — it softens the grid.',
      'Overlay menus set few destinations at display scale (~4rem) flush-left with a zero-padded index each. Four small centred links read as an unfinished modal; four huge ones read as a deliberate index.',
    ],
    never: [
      'White type on a mid-saturation ground.',
      'Diagonal or curving diagram lines — square reads as engineering, curved reads as marketing.',
      'Unpadded or proportional numerals in a stat row.',
      'A decorative emphasis device used without a defined meaning.',
      'Pure white as the page ground.',
      'Default letter-spacing on display-size grotesk.',
    ],
    exemplars: [
      {
        site: 'indisea.com',
        url: 'https://indisea.com/',
        note: 'Amber marker on `maintain` in a 6rem grotesk hero, numbered sections throughout, cyan contact flood at the end.',
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
