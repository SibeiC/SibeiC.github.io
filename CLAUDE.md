# CLAUDE.md

Guidance for AI assistants (Claude Code and similar) working in this repository.

## What this repo is

A personal Jekyll site served by GitHub Pages at **github.chencraft.com** (CNAME in `CNAME`). The `master` branch auto-deploys on push — there is no CI, no build artifact to commit, and no separate deploy step.

Two kinds of content live here:

1. **Simple bilingual pages** (`resume.md`, `cupholder.md`, `about.md`, `index.md`) rendered with `_layouts/default.html`.
2. **Trip itineraries** — a Jekyll collection under `_trips/` rendered with the bespoke `_layouts/trip.html`. Trip pages are the most complex piece of this codebase; most substantive changes happen here.

## Repo layout

```
_config.yml             Jekyll config (theme, plugins, collections, languages)
_layouts/
  default.html          Header + i18n switcher + hacker-theme shell
  trip.html             Self-contained layout for trip pages (all CSS via trip.css)
_includes/
  trip_link.html        Renders a chip <a>; resolves {query} → Google Maps URL
_data/
  airlines.yml          IATA → display name + ICAO + manage_booking URL
  airports.yml          IATA → "城市 机场名" display string
_trips/
  template.md           REFERENCE SCHEMA — read in full before writing a new trip
  taiwan-2026.md        Reference example of a real, finished trip
_posts/                 Jekyll default posts dir; effectively unused
assets/
  css/style.scss        Custom styles on top of jekyll-theme-hacker (for default layout)
  css/trip.css          Styles for trip layout (separate, self-contained)
  images/               Static images (resume logos, cupholder photos, favicon, etc.)
index.md                Homepage — auto-lists `site.pages` and `site.trips`
resume.md / cupholder.md / about.md
zh/                     Chinese counterparts of bilingual pages (resume, cupholder)
404.html                GitHub Pages 404
CNAME                   github.chencraft.com
Gemfile / Gemfile.lock  Pinned to `github-pages` gem set
.bundle/config          BUNDLE_PATH=vendor/bundle (so vendor/ is local)
```

## Local development

```bash
bundle install
bundle exec jekyll serve            # http://localhost:4000
bundle exec jekyll serve --livereload
```

Requires Ruby 3.0+ (webrick gem is explicit for this reason). Changes to `_config.yml` do NOT hot-reload — restart the server. Deployment is just `git push origin master`.

## Deployment / branching

- Production branch: **`master`** (GitHub Pages builds this automatically).
- Do NOT push directly to `master` from an agent session unless the user asks for it. When in doubt, work on a feature branch and open a PR.
- The user may specify a session-specific feature branch in the system prompt — respect it.

## Conventions for simple pages (default layout)

Every bilingual page needs these front-matter keys so the EN/ZH switcher works:

```yaml
---
layout: default
title: Page Title
permalink: /some-path/           # English version
multiLangLink: some-path         # slug shared by EN and ZH
languages: ["en", "zh"]          # omit "en" or "zh" to grey out that button
---
```

Pairing rule: English lives at `/some-path/` (root `some-path.md`), Chinese lives at `/zh/some-path/` (`zh/some-path.md`). Both files must set the same `multiLangLink`. If only one language exists, drop the missing code from `languages` and the switcher disables automatically.

Optional front matter consumed by `_layouts/default.html`:
- `email: resume` → renders as `resume@chencraft.com` (site.email supplies `@chencraft.com`).
- `downloadLink: https://...` → adds a "Print" button (used for resume PDF).

The homepage (`index.md`) iterates `site.pages` alphabetically and excludes `/zh/*` and `/404.html`, then lists `site.trips` sorted by `date_range` descending. You generally do not need to edit `index.md` when adding a new page — it will show up automatically as long as the front matter has a `title`.

## Conventions for trip pages (`_trips/`)

Trips are the high-leverage part of this repo. Before writing or editing a trip, **read `_trips/template.md` in full** — it is an annotated schema, not a runnable template. Tags like `[FROM SOURCE]`, `[AI:RESEARCH]`, `[AI:INFER]`, `[AI:COMPUTE]`, `[USER:CONFIRM]` tell an AI agent what to do with each field. `_trips/taiwan-2026.md` is the style/tone reference.

Key invariants that are easy to get wrong:

- **File path → URL**: `_trips/foo-2026.md` → `/trips/foo-2026/` (see `collections.trips.permalink` in `_config.yml`). Use kebab-case slugs. Don't prefix filenames with `_`.
- **Default language is ZH-CN**: all user-facing strings in Chinese unless the user says otherwise. Match the slightly-enthusiastic tone of `taiwan-2026.md`.
- **Draft state**: set `published: false` at the top of front matter while drafting — it will be excluded from the build until you flip it.
- **YAML flow-mapping comma trap**: inside `{ key: val, key: val }`, any unquoted comma is a separator. So `value: NT$ 2,500` silently becomes `value: "NT$ 2"` plus a stray `500: null` key. ALWAYS double-quote flow-mapping values containing `, : [ ] #`. Raw `amount:` numbers (no thousand separators) are safe.
- **Multi-line prose** (`detail`, `note`, `hotels_note`): use YAML `|` block scalars. Inline HTML (`<br><br>`, `<strong>`, `<em>`, `<a>`) is allowed and commonly used.
- **Amounts are raw numbers**, never with symbols or commas. The layout auto-sums, converts via `rate`, and formats with thousand separators at runtime (JS `.fmt-num`). Do NOT pre-compute totals, grand totals, or subtotals — Liquid does it.
- **`in: primary|secondary`** on each cost item: `primary` = destination currency (paid locally), `secondary` = traveller's home currency (typically SGD, pre-paid from home).
- **Flights** only need `airline` (IATA 2-char) + `number`. The layout pulls display name, ICAO (for FlightAware chip), and manage-booking URL from `_data/airlines.yml`. Flight city auto-resolves from `_data/airports.yml` via IATA 3-char `from.code` / `to.code`.
- **Stay ↔ hotel linking**: `days[].stay.hotel` must match a `hotels[].name` exactly — the layout does `where: "name"` to pull the address and map link.
- **Today-jump** behaviour on page load keys off `days[].date` in strict `YYYY-MM-DD` format. Omitting or mis-formatting this silently disables the feature.

### Extending `_data/` instead of hard-coding

When a trip references an airline or airport not in `_data/*.yml`, **add it to the data file** rather than passing inline overrides. This benefits every future trip. Required fields per the header comments:

- `_data/airlines.yml` → `name`, `icao`, `manage_booking` (look up from the airline's official site).
- `_data/airports.yml` → `city` (format: `"城市 机场名"`, mixing Chinese + optional English).

Inline overrides (`{ code: XXX, city: "…" }`) are a fallback when you cannot extend the data file.

### Link chip types (`trip_link.html`)

Each item in `links:` arrays is rendered by `_includes/trip_link.html` as an `<a class="chip …">`. Conventions:

- `type: map` → green chip. Use `query:` (not `url:`) so the include auto-encodes it into a Google Maps search URL.
- `type: ticket` → red chip. Use `url:` to the official booking site; Klook / KKday acceptable as alternatives.
- no `type` → blue chip (generic info / official reference).

## Styling

- `_layouts/default.html` uses `jekyll-theme-hacker` with additions in `assets/css/style.scss` (SCSS with Jekyll front matter to trigger Sass compilation). CJK fallback fonts (`微软雅黑`, `华文细黑`, `STXihei`) are stacked after the theme's Monaco/monospace.
- `_layouts/trip.html` is self-contained and pulls **only** `assets/css/trip.css` (no theme base). Modify `trip.css` for any visual changes to trip pages. The layout also embeds a small `<script>` that handles theme toggle, thousand-separator formatting (`.fmt-num`), and the today-jump scroll — keep these working when editing the layout.

## Working with the user (reusable session rules)

These are standing behaviours the user has asked me to remember across sessions. Treat them as defaults — don't re-ask.

### Receipt → trip update workflow

When the user sends a receipt image (optionally with a comment), do the following without prompting:

1. **Identify the trip.** OCR the receipt for date, vendor, city/country, currency. Cross-reference against `_trips/*.md`: match a trip whose `date_range` contains the receipt date; use city/country as tiebreaker. Ask before editing only if zero or multiple trips match, or the receipt is unreadable.
2. **Identify the day.** Find the `days[]` entry whose `date:` (strict `YYYY-MM-DD`) equals the receipt date.
3. **Apply the update.**
   - **Cost item** → add to the appropriate `cost.groups[].items[]` with raw `amount` (no symbols / commas), correct `in: primary|secondary` based on receipt currency vs. the trip's `primary` / `secondary`, concise Chinese `label`.
   - **Activity / comment** → append to that day's `items[]` with `time`, emoji-prefixed `title`, and the comment as `detail` (Chinese block scalar, tone matching `_trips/taiwan-2026.md`). If it's clearly the same activity as an existing item, extend that item's `detail` instead of adding a new one.
4. **Commit, PR, merge, cleanup** — see branch-cleanup rule below.

**Cost override rule (important):** If the receipt's cost already has a corresponding **estimate** line (typically tagged `note: 估算`), **replace** that line's `amount` with the actual and **drop** `note: 估算` — do NOT add a second line. Matching heuristic: same `cost.groups[]` category + same / similar `label` + plausible date. If the match is ambiguous (e.g. generic "交通杂费" vs. specific taxi fare), ask before overwriting vs. appending. Never manually recompute totals — the Liquid layout sums everything.

### Branch & PR cleanup

- **Always pause for user approval before merging a PR.** Create the PR, summarise what it does, and wait for an explicit go-ahead. Never auto-merge, even for doc-only changes I authored.
- **Exception — CLAUDE.md itself.** Changes to `CLAUDE.md` may be committed and pushed directly to `master` without going through a PR. This file is excluded from the published site (see `_config.yml`) and exists only for AI-agent use, so the usual review ceremony is overkill.
- After merging, delete the branch locally (`git branch -D <name>`). Remote auto-delete is enabled on the repo (Settings → General → "Automatically delete head branches"), so the remote ref is cleaned up by GitHub on merge — no manual `git push --delete` needed.
- Default PR merge method: squash, unless the user says otherwise.
- After merging, remember to `git checkout master && git pull origin master` before starting new work — squash-merged commits on the remote won't be in the local `master` until pulled.

### Default language & tone

- ZH-CN for all trip content, user-facing strings, receipt-derived labels, and free-form comments unless the user explicitly says otherwise.
- Tone: informative, slightly enthusiastic — match `_trips/taiwan-2026.md`.

## Things not to do

- Don't add `README.md`, `CLAUDE.md`, `Gemfile`, `Gemfile.lock`, or `vendor/` to the site output — they are in `_config.yml`'s `exclude:` list already.
- Don't commit `vendor/bundle/` (it's in `.gitignore` and only used locally thanks to `.bundle/config`).
- Don't create new documentation files unless explicitly asked — prefer updating this one.
- Don't introduce Jekyll plugins outside the GitHub Pages allowlist (`jekyll-feed`, `jekyll-seo-tag` are already configured); GitHub Pages will silently drop unsupported ones.
- Don't pre-compute values that the trip layout computes at build or runtime (totals, currency conversion, number formatting, subtitle/notes joining).
