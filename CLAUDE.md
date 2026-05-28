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

Ruby **3.2.11** (final 3.2 patch; 3.2 series reached EOL in March 2026) is pinned across `.ruby-version`, `Gemfile`, `Gemfile.lock` (`RUBY VERSION` line), `.github/workflows/jekyll-build.yml`, and Cloudflare Pages' `RUBY_VERSION` env var — keep all five in sync if you ever bump it. When eventually moving off the 3.2 series, prefer 3.3.x next: 3.4 dropped `bigdecimal` from default gems, which breaks Liquid 4.0.4 (Jekyll dep) until upstream catches up. Changes to `_config.yml` do NOT hot-reload — restart the server. Deployment is just `git push origin master`.

**CF Workers Builds**: the project (`my-homepage`) uses `bin/cf-build.sh` as its Build command. That wrapper reads the CF-provided branch env var (`WORKERS_CI_BRANCH` or legacy `CF_PAGES_BRANCH`) and exports `JEKYLL_ENV=production` for master, `JEKYLL_ENV=preview` for every other branch — this is the source of the `[PREVIEW]` title + banner on PR previews. Dashboard env-var scoping isn't needed; if you ever change the mapping, edit the script, not the dashboard.

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
- **Bilingual support (`lang:` front matter)**: each trip declares `lang: zh-CN` (default) or `lang: en-US`. The layout renders all UI chrome (card titles, chip labels, weekday fallback, footer) in that language via `_data/trip_i18n.yml`. Each trip is monolingual — author content (day titles, details, labels, notes) must match the declared `lang`; the layout does not translate user content. When adding a new chrome label to `_layouts/trip.html`, populate the key in BOTH `zh-CN` and `en-US` blocks of `_data/trip_i18n.yml`. When extending `_data/airlines.yml` / `_data/airports.yml`, populate both language variants (`name_en`+`name_zh`, `city_en`+`city_zh`) so either-language trips can consume the entry. If `day.date_label` is omitted, the layout auto-renders `M/D + weekday` from `day.date` in the current language.
- **Draft state**: set `published: false` at the top of front matter while drafting — it will be excluded from the build until you flip it.
- **`last_updated:` is not optional**: bump it to the commit date (format `YYYY/M/D`) on every commit that changes the trip file. The hero block surfaces this date, and a stale value tells readers the itinerary is neglected. Always include the bump in the same commit as the content change — don't leave it for a follow-up.
- **YAML flow-mapping comma trap**: inside `{ key: val, key: val }`, any unquoted comma is a separator. So `value: NT$ 2,500` silently becomes `value: "NT$ 2"` plus a stray `500: null` key. ALWAYS double-quote flow-mapping values containing `, : [ ] #`. Raw `amount:` numbers (no thousand separators) are safe.
- **Multi-line prose** (`detail`, `note`, `hotels_note`): use YAML `|` block scalars. Inline HTML (`<br><br>`, `<strong>`, `<em>`, `<a>`) is allowed and commonly used.
- **Amounts are raw numbers**, never with symbols or commas. The layout auto-sums, converts via `rate`, and formats with thousand separators at runtime (JS `.fmt-num`). Do NOT pre-compute totals, grand totals, or subtotals — Liquid does it.
- **`in: primary|secondary`** on each cost item: `primary` = destination currency (paid locally), `secondary` = traveller's home currency (typically SGD, pre-paid from home).
- **Flights** only need `airline` (IATA 2-char) + `number`. The layout pulls display name, ICAO (for FlightAware chip), and manage-booking URL from `_data/airlines.yml`. Flight city auto-resolves from `_data/airports.yml` via IATA 3-char `from.code` / `to.code`.
- **Stay ↔ hotel linking**: `days[].stay.hotel` must match a `hotels[].name` exactly — the layout does `where: "name"` to pull the address and map link.
- **Today-jump** behaviour on page load keys off `days[].date` in strict `YYYY-MM-DD` format. Omitting or mis-formatting this silently disables the feature.
- **Per-day weather chip** (Open-Meteo, no API key) renders in the day-header when `days[].lat` AND `days[].lon` are both set. One batched multi-location request covers the whole trip; results are cached in `localStorage` for 6 hours; the fetch only fires when today is within `[trip_start - 14d, trip_end + 2d]` — outside that window the placeholders stay hidden and no network call happens (curbs casual abuse / dormant-page traffic). When adding a new trip, pick the lat/lon of the spot where the traveller spends the most outdoor time that day (4-decimal precision is plenty); skip lat/lon on pure-transit days where the location isn't meaningful. The chip is purely visual (emoji + high/low temp), so no `_data/trip_i18n.yml` keys are needed.

### Extending `_data/` instead of hard-coding

When a trip references an airline or airport not in `_data/*.yml`, **add it to the data file** rather than passing inline overrides. This benefits every future trip. Required fields per the header comments:

- `_data/airlines.yml` → `name`, `icao`, `manage_booking` (look up from the airline's official site).
- `_data/airports.yml` → `city` (format: `"城市 机场名"`, mixing Chinese + optional English).

Inline overrides (`{ code: XXX, city: "…" }`) are a fallback when you cannot extend the data file.

### Link chip types (`trip_link.html`)

Each item in `links:` arrays is rendered by `_includes/trip_link.html` as an `<a class="chip …">`. Conventions:

- `type: map` → green chip, default icon 📍. Use `query:` (not `url:`) so the include auto-encodes it into a Google Maps search URL.
- `type: ticket` → red chip, default icon 🎫. Use `url:` to the official booking site; Klook / KKday acceptable as alternatives.
- no `type` → blue chip (generic info / official reference), default icon 🔗.

**Icon is auto-filled from `type`**, so trip files should **omit `icon:`** for standard map/ticket/none links. Only specify `icon:` when a link genuinely needs a non-default emoji (e.g. `🛵` for a scooter-rental ticket, `🎒` for a luggage-related chip) — the include treats `icon:` as an explicit override.

## Styling

- `_layouts/default.html` uses `jekyll-theme-hacker` with additions in `assets/css/style.scss` (SCSS with Jekyll front matter to trigger Sass compilation). CJK fallback fonts (`微软雅黑`, `华文细黑`, `STXihei`) are stacked after the theme's Monaco/monospace.
- `_layouts/trip.html` is self-contained and pulls only `assets/css/trip.css` (no theme base) and `assets/js/trip.js` (loaded with `defer`). Behaviour split: CSS for visuals, `trip.js` for the three client-side scripts (theme toggle, thousand-separator formatting on `.fmt-num`, today-jump scroll). No inline `<script>` or `<style>` in the layout or anywhere else — HTML/CSS/JS live in separate files. Exception: a handful of `style="--day-color: {{ day.color }}"` attributes on day-section elements, kept inline because the value is data-driven from Liquid.

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

### Itinerary authoring: bag-drop before sightseeing on transition days

On any day where the traveller moves from one accommodation to another, the day's `items[]` should include an explicit **`🎒 <hotel name> · 行李寄存`** (or `· Check-in`) step **before** the first sightseeing item at the destination. Don't assume the hotel is reachable only at `stay:` time in the evening — most hotels in Taiwan / Japan / SEA accept early luggage drop at the front desk even before the formal check-in window.

Rule of thumb:
- Arriving at a new city with bags + a bunch of activities planned → insert 🎒 行李寄存 right after the transit item that landed them in town.
- Mid-day transit where they won't be near the hotel → OK to keep bags with them, but flag it in the transit item's `detail`.
- Last-day / airport-return transit (e.g., Taiwan Day 9) → keep bags at the prior-night's accommodation, do morning activities, then pick up bags on the way out. This is the inverse pattern; same principle: don't drag bags through activities.

Apply this retroactively when editing existing trips, not just for new ones. If a location-change day looks like it's missing a 行李寄存 item, flag it or add it without being asked.

### Branch & PR cleanup

- **Always pause for user approval before merging a PR.** Create the PR, summarise what it does, and wait for an explicit go-ahead. Never auto-merge, even for doc-only changes I authored.
- **Exception — CLAUDE.md itself.** Changes to `CLAUDE.md` may be committed and pushed directly to `master` without going through a PR. This file is excluded from the published site (see `_config.yml`) and exists only for AI-agent use, so the usual review ceremony is overkill.
- **Exception — trivial cost-line price updates.** When a receipt only changes a `cost.groups[].items[]` `amount:` — either moving from `note: 估算` to a confirmed amount, or swapping one confirmed amount for another after a re-booking — and at most updates the corresponding day item's `tickets[].tag/value` to match, commit directly to `master`. The user has already approved by providing the receipt / new price; a PR for a one-line number swap is overkill. Anything that touches logistics (hotel/flight substitution, itinerary reordering, new or removed items) still goes through the normal PR-and-approval flow.
- After merging, delete the branch locally (`git branch -D <name>`). Remote auto-delete is enabled on the repo (Settings → General → "Automatically delete head branches"), so the remote ref is cleaned up by GitHub on merge — no manual `git push --delete` needed.
- Default PR merge method: squash, unless the user says otherwise.
- After merging, remember to `git checkout master && git pull origin master` before starting new work — squash-merged commits on the remote won't be in the local `master` until pulled.

### Default language & tone

- ZH-CN for all trip content, user-facing strings, receipt-derived labels, and free-form comments unless the user explicitly says otherwise.
- Tone: informative, slightly enthusiastic — match `_trips/taiwan-2026.md`.

### Reusability / DRY preference

The user prefers abstraction over duplication. If the same value, URL, snippet, or style rule would appear in two or more places, factor it out:

- **CSS (`assets/css/trip.css`, `style.scss`)**: when two selectors need the same properties, use a combined selector (`a, b { … }`) with per-element overrides rather than two near-identical rule blocks. See `.home-link, .theme-toggle` in `trip.css` as a reference pattern. Prefer CSS custom properties (already in use for `--chip-*`, `--accent`, etc.) for colour/spacing tokens that are referenced more than twice.
- **Layouts (`_layouts/*.html`)**: pull repeated markup into `_includes/*.html` partials (see `_includes/trip_link.html` for the chip-rendering pattern). Prefer passing structured data via `{% include foo.html param=value %}` over copy-paste.
- **Data (`_data/*.yml`)**: already the canonical place for airlines/airports. When a new trip introduces a repeated concept (e.g., a chain hotel referenced across trips, a common ticket vendor), extend `_data/` rather than inlining.
- **Trips (`_trips/*.md`)**: within a single trip file, the same URL often appears twice — once in a day's `links:` chip and again in `booking_channels:` at the bottom. Use YAML anchors (`&name`) and aliases (`*name`) to define once and reuse:

  ```yaml
  # Define inline once:
  - { type: ticket, icon: 🎫, label: Klook, url: &klook_101 "https://www.klook.com/zh-CN/activity/1659-taipei-101-taipei/" }
  # Reuse the URL later:
  booking_channels:
    - { name: 台北 101 观景台, detail: '<a href="*klook_101" target="_blank">…' }  # ← this exact syntax doesn't work in a quoted string; see note
  ```

  YAML anchors compose cleanly for scalar values and object merges at the YAML parser layer. They do NOT interpolate inside quoted strings (`'<a href="*klook_101">'` is a literal string). Practical guidance:
    - For repeated **scalar values** (URLs, prices, names): declare once with `&anchor`, reference with `*anchor` in other mapping values.
    - For repeated **objects** (full link chips): declare once with `&anchor`, reuse with `- *anchor`.
    - When a URL must appear inside HTML prose (e.g., `booking_channels[].detail` block scalars with `<a href="…">`), YAML anchors don't help — in that case, lift the URL to a top-level key like `urls:` and reference via Liquid: `{{ page.urls.klook_101 }}`. Only do this when the repetition is genuine (≥ 2 occurrences) and the link is stable.

When the abstraction would cost more clarity than the duplication (e.g., a single extra occurrence of a short string), leave it. The user's rule is pragmatic DRY, not dogmatic.

## Things not to do

- Don't add `README.md`, `CLAUDE.md`, `Gemfile`, `Gemfile.lock`, or `vendor/` to the site output — they are in `_config.yml`'s `exclude:` list already.
- Don't commit `vendor/bundle/` (it's in `.gitignore` and only used locally thanks to `.bundle/config`).
- Don't create new documentation files unless explicitly asked — prefer updating this one.
- Don't introduce Jekyll plugins outside the GitHub Pages allowlist (`jekyll-feed`, `jekyll-seo-tag` are already configured); GitHub Pages will silently drop unsupported ones.
- Don't pre-compute values that the trip layout computes at build or runtime (totals, currency conversion, number formatting, subtitle/notes joining).
