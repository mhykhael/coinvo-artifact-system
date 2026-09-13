# Evolution

The system itself changes over time. This log captures why each version replaced the last, so future sessions do not recreate fixed problems.

Format: **date | what changed | why**. Append new entries at the bottom.

---

## v0 → v1 | May 2026 | Initial text rules to skill folder

**What changed:**
- Lock-in moved from a Notion page of text rules (id `35dc650a9bff81a7931fd0cd501e2232`) to a skill folder with embedded PNG gallery and HTML references.
- Memory edit 28 still routes future sessions to read the Notion page first; this remains valid as the human-readable mirror.

**Why:**
- Text rules don't preserve visual feel. Future sessions translate rules back into visual choices, and translation always loses fidelity.
- Visual references (PNGs) bypass the translation gap entirely.

---

## v1 → v2 | May 2026 | Skill folder to GitHub-first

**What changed:**
- PNGs, HTML references, spec, principles, and evolution log moved from inside the claude.ai skill ZIP to a public GitHub repo (`github.com/semagterberg/coinvo-artifact-system`).
- The claude.ai skill became a thin bootstrap that clones the repo on every trigger.
- The skill ZIP went from ~520KB (with embedded assets) to ~2KB (just SKILL.md).

**Why:**
- Single source of truth eliminates sync drift between skill-internal copies and any other location.
- GitHub web UI drag-drop makes updates take 10 seconds vs the previous re-zip-and-re-upload cycle.
- Vendor-independent. If claude.ai's skill format changes tomorrow, the repo is untouched.
- The skill never needs re-uploading again. All evolution happens in the repo.
- Public versioning. Every change is timestamped and reversible.

---

## Locked palette migration | May 2026 | Dim 2024-era to bright 2026 palette

**What changed:**
- Replaced dim `#1D9E75` muted green, `#7F77DD` dim purple, `#BA7517` dim amber, `#2dd4bf` teal with bright `#34D399` green, `#A855F7` purple, `#F5C518` yellow, `#22D3EE` cyan.
- Added `#F97316` orange and `#F04848` red to the locked set.
- Set bucket-to-color mapping as immutable: Breaking=green, Original=cyan, Stealing=yellow, Double Down=purple, Video=orange.

**Why:**
- The Operator Framework's own existing artifacts (5 buckets, survival curve, open algorithm) use the bright palette. New artifacts in the dim palette looked like they belonged to a different doc.
- Bucket-to-color consistency means a reader can identify a bucket by color alone across any artifact in the framework.

---

## Title sizing locked | May 2026 | 40px to 28px

**What changed:**
- Title font-size dropped from 40px to 28px with `letter-spacing:-0.015em` and `line-height:1.1`.
- Subtitle dropped from 17px to 15px.

**Why:**
- 40px felt out of proportion at typical chat width. 28px matches the rendered size of the 5 buckets, survival curve, and open algorithm titles in the same surface.

---

## Future versions go here

Append below as the system evolves. Date, change, why. The more entries, the smarter future sessions get.

---

## v2 → v2.1 | May 2026 | Removed sandbox playwright auto-render

**What changed:**
- Removed the sandbox-side playwright/chromium PNG render workflow that briefly existed during the GitHub-first build-out.
- Locked in: PNGs come from the chat widget's native Copy to clipboard or Download file. HTMLs come from a sandbox-saved downloadable file (`create_file` then `present_files`). Sem drags both to the repo.

**Why:**
- The playwright render drifted from the chat widget because the sandbox does not know Claude's actual CSS variable values, font stack, or rendering proportions. Result was a worse approximation of an already-perfect render.
- Native render is binding. Any sandbox-side rasterization is forbidden, see `principles.md`.

---

## v2.1 → v2.2 | September 2026 | Locked Notion SOP spacing

**What changed:**
- Standardized every active Operator Framework section as divider → heading → one native empty block → one-line explanation → one native empty block → content.
- Prohibited an empty block between a divider and the following heading.
- Applied the pattern across the Operator Framework, Strategic Foundation, Operating Model, Signal Intake, X Doctrine, and Writing System.

**Why:**
- Native Notion empty blocks preserve the deliberate spacing shown in the approved SOP reference.
- One repeated section rhythm improves scanning and prevents layout drift across future chapters.
