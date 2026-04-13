# SibeiC.github.io

Personal website hosted at [github.chencraft.com](https://github.chencraft.com) via GitHub Pages.

## Local Development

### Prerequisites

Ruby **3.2.0** is pinned (see `.ruby-version` / `Gemfile`). macOS ships with Ruby 2.6 which is too old. Install via Homebrew + rbenv:

```bash
brew install rbenv ruby-build
rbenv install 3.2.0
```

`cd` into the repo — rbenv auto-switches to 3.2.0 via `.ruby-version`. Verify:

```bash
ruby -v   # should show 3.2.0
```

Install Bundler:

```bash
gem install --user-install bundler
```

### Setup

```bash
bundle install
```

### Run locally

```bash
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

Add `--livereload` to auto-refresh on file changes:

```bash
bundle exec jekyll serve --livereload
```

> **Note:** Changes to `_config.yml` require a server restart to take effect.

## Deployment

Pushes to the `master` branch are automatically built and deployed by GitHub Pages. No manual steps needed.

## Site Structure

```
├── _config.yml          # Site settings (title, theme, plugins)
├── _layouts/
│   └── default.html     # Main layout (header, language switcher, footer)
├── assets/
│   ├── css/style.css    # Custom styles
│   └── images/          # Images referenced by pages
├── index.md             # Homepage (auto-links to all pages)
├── about.md             # About page
├── resume.md            # Resume (English)
├── cupholder.md         # Audi e-tron cupholder guide (English)
└── zh/                  # Chinese versions of pages
    ├── resume.md
    └── cupholder.md
```

## Adding a New Page

1. Create a `.md` file in the repo root (English) or under `zh/` (Chinese).
2. Add front matter:

```yaml
---
layout: default
title: My Page Title
permalink: /my-page/

# For bilingual pages, add these:
multiLangLink: my-page        # slug used to link between EN and ZH versions
languages: ["en", "zh"]       # list which languages have a version
---
```

3. The homepage will automatically include the new page in its listing.

## Language Switching

The header shows EN/ZH buttons on every page. To enable switching:

- Place the English version at `/my-page/` (root)
- Place the Chinese version at `/zh/my-page/`
- Set `multiLangLink: my-page` and `languages: ["en", "zh"]` in both files' front matter

If only one language exists, omit the missing language from the `languages` array — its button will be disabled automatically.
