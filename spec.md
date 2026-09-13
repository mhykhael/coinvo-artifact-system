# Spec

The binding text reference for the Coinvo Artifact System. Pair with the gallery PNGs (visual binding) and the reference HTMLs (code recipes).

## 1. First moves, every artifact

1. **View the gallery.** Open at least 2 PNGs in `gallery/` so you absorb the actual style instead of approximating it from rules. The PNGs are the binding visual spec, not this text.
2. **Read this spec.**
3. **Read at least 1 reference HTML** in `references/` that matches the pattern you are about to build.
4. **Check `anti-examples/` and `issues/`** if either has files, so you do not repeat past mistakes.
5. **Read `principles.md`** before making any non-obvious choice. It captures the reasoning behind locked decisions.

Skipping the gallery view step is the most common cause of style drift. Every prior chat where the output broke skipped one of these.

## 2. The 6 locked colors

| Hex | Name | Semantic role | Used for |
|---|---|---|---|
| `#34D399` | Green | Active, amplify | Breaking News, REPLY, RETWEET, +AMPLIFY, System Driven |
| `#22D3EE` | Cyan | Lead, authority | Original Content, Credibility, foundation tiers |
| `#F5C518` | Yellow | Calibration, boost | Stealing Winners, VIDEO WATCH, +BOOST, calibration |
| `#A855F7` | Purple | Compound, signal | Double Down, Signal Brand, replay loop |
| `#F97316` | Orange | Stream, viral | Video Content, Viral Chaser, parallel system |
| `#F04848` | Red | Penalty, death | BLOCK, Random Poster, -PENALTY, anti-patterns |

**Tints**: `rgba(R,G,B,0.08)` for fills.
**Borders**: `rgba(R,G,B,0.45)` for 1px outlines, or full hex at lower-weight 0.5px.

**Bucket-to-color is locked across Operator Framework.** Do not reassign. Breaking is always green, Original is always cyan, Stealing is always yellow, Double Down is always purple, Video is always orange.

## 3. The locked type scale

| Size | Weight | Use |
|---|---|---|
| 28px | 700 | Title (definite article + concept, e.g. "The phase curve") |
| 15px | 400 | Subtitle (one factual sentence, color text-secondary) |
| 14-15px | 500-600 | Body text inside boxes |
| 22-24px | 700 | Stat numbers in semantic color |
| 11-12px | 600-700 | Caps labels with letter-spacing 0.10em |

Title gets `letter-spacing:-0.015em` and `line-height:1.1`. Hairline divider at `1px var(--color-border-tertiary)` with `margin:18px 0 22px` between title block and content.

## 4. The locked structural recipe

Every chat-style artifact wraps in this exact frame:

```html
<div style="padding:1rem 0;font-family:var(--font-sans);">
  <h2 class="sr-only">[full description of what the visual shows]</h2>

  <div style="font-size:28px;font-weight:700;letter-spacing:-0.015em;line-height:1.1;color:var(--color-text-primary);">[Title]</div>
  <div style="font-size:15px;color:var(--color-text-secondary);margin-top:6px;line-height:1.45;">[One-sentence subtitle]</div>
  <div style="height:1px;background:var(--color-border-tertiary);margin:18px 0 22px;"></div>

  [main content]

</div>
```

Structure is title, subtitle, divider, design. Nothing trailing. Any caveat or source note that used to live in a footer now goes either inside the subtitle or inside the design itself as an inline annotation.

### Notion SOP spacing standard

Every top-level SOP section uses this exact native Notion block sequence:

```text
---
# [emoji] [two-word title]
<empty-block/>
[one-line section explanation]
<empty-block/>
[section content]
```

- Keep the divider directly above the heading; never add an empty block below the divider.
- Insert exactly one `<empty-block/>` between the heading and its explanation.
- Keep the explanation in one Notion text block, even when it wraps visually.
- Insert exactly one `<empty-block/>` between the explanation and the first tab, callout, table, database, image, video, or other section block.
- Apply this sequence to every top-level section in every active SOP chapter.
- On divider-free module and profile pages, place exactly one `<empty-block/>` before every subsequent section heading and exactly one after every heading; the first heading may follow the opening callout directly.
- When a divider-free section opens with a one-line explanation before a table, tab, callout, or other working block, place exactly one `<empty-block/>` after that explanation.

Inside `[main content]`, the standard atoms:

- **Bordered tinted box**: `background:rgba(R,G,B,0.08);border:1px solid rgba(R,G,B,0.45);border-radius:6px;padding:14px 18px`
- **Caps label**: `font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:#<accent>`
- **Stat number**: `font-size:22-24px;font-weight:700;color:#<accent>;line-height:1`
- **Proportional bar**: track at `var(--color-background-secondary)`, fill at full-hex semantic, height 18-30px, border-radius 3-4px
- **Section divider**: `height:1px;background:var(--color-border-tertiary);margin:22px 0`

Canvas is always **transparent** (no background on the root). Tokens for non-semantic text and surfaces:

- `var(--color-text-primary)` for white-ish primary text
- `var(--color-text-secondary)` for gray secondary
- `var(--color-text-tertiary)` for faint inline detail
- `var(--color-background-secondary)` for elevated card/track backgrounds
- `var(--color-border-tertiary)` for hairline dividers

## 5. The creative method

The patterns in `references/` are **prior art, not a closed catalog.** New topics get new angles. The thinking process:

1. **Read the source deeply.** Notion page, doc, or text. Identify the locked facts (what cannot change) and the surrounding logic (why those facts).
2. **Ask what story the topic could tell.** Six frames to brainstorm against:
   - **Composition** → what are the parts, how do they fit (system structure)
   - **Evolution** → how does it change over time, phases, maturity (curve, journey)
   - **Mapping** → what does it map onto, what parallel framework exists (1:1 pairs)
   - **Contrast** → what does the wrong version look like (A vs B)
   - **Math** → what unit yields what return per unit of effort (EV, yield, rate)
   - **Hierarchy** → what is ranked, by what metric (ladder, tier, stack)
3. **Pick the two most different.** Not the two best, the two most distinct. Sem always gets 2 options, and they should answer different questions about the topic.
4. **Back each with measured data.** Look in the source doc first (numbers, dates, named forces). Web search if needed. Numbers must be sourced from the doc or a verifiable fact, never invented. If a number needs context, work it into the subtitle or into an inline annotation in the design itself.
5. **State the angles in chat before building.** A short paragraph naming the two angles so Sem can redirect early if the framing is off.
6. **Build both with the locked recipe.** Same title block, same type sizes, same palette, same atoms.
7. **Recommend one with reasoning, leave the choice.** Say which fits the section's job better and why, then let Sem pick.

## 6. Workflow

When triggered:

1. **View 2-4 gallery PNGs** for vibe lock
2. **Fetch the source doc** if Sem gave a URL or named a Notion page
3. **Brainstorm angles** using the 6 frames above. State 3-5, narrow to 2 most different
4. **Pull data** from the doc, prior chats (`conversation_search`), or web. Cite numbers in chat prose if context requires it, never inside the artifact as a trailing footer
5. **Build both** in chat using `visualize:show_widget`, static HTML, no script if avoidable
6. **Recommend one** with the section's job in mind
7. **Note the manual embed step** since Notion MCP cannot place embeds, Sem screenshots and pastes
8. **If Sem approves a keeper (approval workflow)**:
   - **Approval triggers**: listen for "save this", "this is a keeper", "approved", "lock this one in", "10/10", "add to gallery", "save to repo"
   - **Claude does nothing.** The chat widget already has native download controls. Sem handles both files himself, do not re-export or create duplicate files in the sandbox.
   - **HTML path (Sem's hands)**: Sem downloads the HTML directly from the chat widget, drags into `/references/` on GitHub.
   - **PNG path (Sem's hands)**: Sem pastes the rendered artifact into Notion, exports the PNG from Notion, drags into `/gallery/` on GitHub.
   - **NEVER re-render or re-export from the sandbox.** No `create_file` for the HTML, no `present_files`, no playwright, no chromium, no puppeteer. The chat widget's native render IS the source of truth. Any sandbox-side render or export is a worse approximation because the sandbox does not know Claude's actual CSS variable values, font stack, or proportions. This is a hard rule, see `principles.md`.

## 7. Anti-patterns (learned from broken chats)

- **Do NOT use IBM Plex Mono terminal black canvas for chat-style artifacts.** That is the Surface A spec for standalone Notion embeds with full chrome. The default surface is chat (transparent, var tokens).
- **Do NOT use the dim 2024-era palette** (`#2dd4bf` teal, `#1D9E75` muted green, `#7F77DD` dim purple, `#BA7517` dim amber). The locked palette is the **bright** one above. Sem rejected the dim version explicitly. See `principles.md` for why.
- **Do NOT use a title at 40px+.** Title is 28px, subtitle is 15px. Anything bigger is out of proportion.
- **Do NOT add a trailing footer caveat under the design.** Title, subtitle, divider, design. Nothing trailing. Caveats live in the subtitle or inside the design.
- **Do NOT re-export the artifact from the sandbox on keeper approval.** No `create_file` for the HTML, no `present_files`, no PNG re-render. The chat widget has native downloads, Sem uses those. Re-exporting is duplication, not service.
- **Do NOT enumerate the pattern library as a closed list to Sem.** "Pick from these 10 patterns" caps creativity. Generate fresh angles from the 6 frames, then NAME the pattern if it matches existing prior art.
- **Do NOT skip the gallery view step** because the spec is "in your context." Text rules are fragile, visual references are binding.
- **Do NOT use em dashes or any dashes in sentences.** Use commas, periods, semicolons, or interpunct `·`. This is a hard rule from Sem's writing locks.
- **Do NOT use `ship`, `lock in`, `real` as intensifier, or 2-word-with-period paragraph openers.** Banned phrases.
- **Do NOT pretend you embedded an artifact into Notion via the API.** You cannot. The Notion MCP places no image embed. The artifact renders in chat, Sem manually pastes the screenshot.
- **Do NOT promise scripts will load.** Static HTML always loads. Script with `setTimeout` injection is the #1 cause of "doesn't render" reports. If data needs to be rendered dynamically, write it out by hand instead.

## 8. Reference library map

### Gallery (visual references, PNGs)

- `gallery/the-5-buckets.png` → Pattern: structure-as-system + stat cards. Operator Framework chapter art
- `gallery/the-open-algorithm.png` → Pattern: tier ladder with terminal frame. Algorithm weights
- `gallery/the-survival-curve.png` → Pattern: time-series with annotated divergence point. 5-year creator paths
- `gallery/the-close-rate-ladder.png` → Pattern: dual tier ladder (two stacked ladders sharing one gradient)

### References (HTML source, exact recipes)

- `references/scale-allocation-outcome-map.html` → Pattern: outcome map (1:1 pairs). Flagship of bright palette + bordered tinted boxes + color-matched pairs
- `references/scale-allocation-phase-curve.html` → Pattern: phase curve (bars across phase columns). Honest about which numbers are locked vs directional
- `references/visualization-system-specimen.html` → Pattern: system specimen (palette swatches + pattern cards). The system referencing itself
- `references/close-rate-ladder.html` → Pattern: dual tier ladder
- `references/ev-bars-deal-size.html` → Pattern: EV bars (same effort, different yield)
- `references/health-gauges-deal-size.html` → Pattern: health gauges (per-band reference scales)
- `references/trap-curve-deal-size.html` → Pattern: trap curve (annotated SVG with inverse-relationship crossover)
- `references/leverage-stack-ladder.html` → Pattern: tier ladder with rank + descriptor + bar + status column

### Anti-examples and issues

`anti-examples/` is empty until something gets actively rejected with a "do not repeat" verdict.
`issues/` is empty until something one-off needs addressing.

## 9. Surface variants

This spec defaults to **chat surface** (transparent, var tokens). If Sem explicitly asks for a **Notion standalone embed** with the dark Surface A treatment, switch to:

- Canvas: `background:#0A0A0A; padding:60px; width:1440px`
- Title font: heavy grotesque white at 60px (Inter or system sans 800)
- Mono labels: IBM Plex Mono
- Same locked palette, same bucket-to-color mapping

But default is chat. Always default is chat.
