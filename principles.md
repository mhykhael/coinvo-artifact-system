# Principles

The judgment behind the rules. Future sessions read this to inherit not just what to do, but why. When a new situation comes up that the spec does not directly cover, these principles point at the answer.

## Bright palette over dim

The first iteration used dim 2024-era colors (`#1D9E75` muted green, `#7F77DD` dim purple, `#BA7517` dim amber, `#2dd4bf` teal). Sem rejected them because the Operator Framework's existing artifacts (5 buckets, survival curve, open algorithm) use vivid, bright colors. Drift away from the doc's actual palette breaks visual consistency. The locked bright palette in `spec.md` matches the doc.

**Principle:** Always match the surrounding doc's existing visual language. Inheriting from upstream art beats inventing new palettes.

## Chat surface is the default, not terminal

Early iterations defaulted to terminal Surface A (black canvas, IBM Plex Mono, full chrome). That is correct for standalone Notion embeds where the artifact owns its own canvas. But when artifacts render in chat first (for preview before Sem screenshots and pastes), terminal styling fights the chat surface. The default is now chat (transparent canvas, var() tokens, no IBM Plex Mono unless explicitly building a Surface A version).

**Principle:** Default to the surface that gets seen first. Chat is the preview, Notion is the destination. Build for both by using theme-adaptive tokens.

## Title at 28px, not 40px

A bigger title felt more authoritative but threw the proportion off. 28px matches the proportion of the 5 buckets, survival curve, and open algorithm titles when rendered in chat width. Bigger felt out of scale, smaller felt weak.

**Principle:** Proportion is locked by the surrounding doc family, not by what reads "important." Measure against the gallery before sizing.

## Visual references over text rules

The original lock-in attempt was a Notion page with text rules. Sem flagged that text rules are fragile because future sessions translate the rules back into visual choices, and translation always loses fidelity. The fix is visual references: PNGs of approved artifacts that future sessions can view directly. Translation gap eliminated.

**Principle:** When you can show, do not tell. PNGs are binding, text rules are fallback.

## Open-ended creative method, not closed pattern list

A pattern library with named patterns (phase curve, outcome map, etc.) is useful for understanding what has worked, but enumerating it as a closed list to future sessions caps creativity. New topics often need new angles. The spec captures the creative method (6 thinking frames) and the pattern library is treated as prior art, not a constraint.

**Principle:** Document the method, not the menu. Patterns are emergent, not enumerated.

## Two options, not one

Every artifact request gets two distinct options, not one. Two options that answer different questions about the topic. This forces the creative method to actually explore, not just generate a default. Sem picks.

**Principle:** Single-option output collapses into defaults. Two-option output forces creative distinctness.

## Real data, not invented

Every measured number in an artifact must be backed by either the source doc or a web-searchable fact. Invented stats break trust. Earlier iterations parked source notes in a trailing footer caption under the design. Sem removed that pattern because the trailing caveat fights the artifact's visual weight and adds noise where the design should breathe. Sources now live in the subtitle when they need context, or inline inside the design as an annotation, or in chat prose around the artifact. The artifact itself ends at the design.

**Principle:** Every number in an artifact traces to the source doc or a verifiable fact. No exceptions.

## Clean structural close, no trailing caveat

Title, subtitle, divider, design. Nothing under the design. Trailing caveats and source captions used to live below the design; that pattern got dropped because it diluted the visual and treated the artifact as something that needed defending instead of something that stood on its own. If a caveat is critical, it goes in the subtitle. If it is not critical, it does not need to be in the artifact at all.

**Principle:** The artifact ends at the design. Anything you would have put in a footer either belongs in the subtitle or does not belong in the artifact.

## Notion spacing is structural

The SOP uses native empty blocks to create a stable reading rhythm between every section heading, its explanation, and the working surface. Ordinary blank Markdown lines are stripped by Notion and cannot preserve this rhythm. The divider belongs to the preceding section boundary, so adding an empty block below it creates double spacing.

**Principle:** Every top-level SOP section follows divider → heading → one empty block → one-line explanation → one empty block → content. No empty block sits between the divider and heading. Divider-free operational pages use one empty block before each subsequent heading and one after every heading.

## One-word tabs reduce navigation cost

Tabs are navigation controls, so labels should be recognized before they are interpreted. Multi-word labels add width, visual density, and unnecessary reading time across a large operating system. A single precise word keeps tab rows compact while the icon and tab content carry the deeper meaning. Distinct labels inside each group prevent compression from creating ambiguity.

**Principle:** Every native tab label is one distinct word. Section headings keep the emoji plus two-word standard.

## GitHub-first storage, claude.ai bootstrap-only

The first lock-in attempt embedded the gallery and references inside the claude.ai skill ZIP. That coupled the system to one platform and made updates require a re-zip-and-re-upload cycle. Migrated to a GitHub-first model where the skill is a thin bootstrap that clones the repo on every trigger.

**Principle:** Storage should be platform-independent. The skill is the loader, the repo is the system.

## Anti-patterns matter as much as positive patterns

Every rejected artifact teaches a boundary. The `anti-examples/` folder is as important as the `gallery/` folder. When Sem rejects something, capture why so the next session does not repeat it.

**Principle:** Failures are reference material. Save them with the same care as successes.

## The system compounds

Every approved artifact added to `gallery/` and `references/` makes the next artifact better. Every anti-example added makes the next artifact safer. The system is not static, it is a learning loop. The lower the friction of contributing, the faster the loop runs.

**Principle:** Optimize for friction-free contribution above all else. A perfect system nobody updates is worse than a rough one that grows.

## Native render is the source of truth

An early iteration tried to auto-render approved artifact HTMLs to PNG via playwright in the sandbox, so we could present both files (PNG + HTML) as one-click downloads. The renders drifted from the chat widget version: I guessed CSS variable values, used a fallback font stack, and the proportions came out subtly wrong. Sem caught it and pushed back. The chat widget is what produced the artifact, it knows the exact tokens, fonts, and proportions. Anything else is a copy of a copy.

**Principle:** Never re-rasterize an artifact in the sandbox. The chat widget's native Copy to clipboard or Download file output is the only PNG source. Sandbox-side renders are forbidden because they introduce drift.
