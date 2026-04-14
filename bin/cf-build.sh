#!/usr/bin/env bash
#
# Cloudflare Workers Builds wrapper for Jekyll.
#
# The CF dashboard env-var UI doesn't support distinct values per Production /
# Preview scope for this project, so we derive JEKYLL_ENV from the branch CF
# is building and export it here before invoking jekyll. Set the CF project's
# "Build command" to:   bash bin/cf-build.sh
#
# Branch → JEKYLL_ENV mapping:
#   master  → production   (matches GitHub Pages' default, for the
#                           parallel my-homepage.workers.dev build)
#   <any other branch / PR preview> → preview   (triggers the 🟧 PREVIEW
#                                                banner + [PREVIEW] title)
#
# CF exposes the branch via different env vars depending on which CI
# generation the project was created under. Support both:
#   - WORKERS_CI_BRANCH (new unified Workers Builds)
#   - CF_PAGES_BRANCH   (legacy Pages)

set -euo pipefail

BRANCH="${WORKERS_CI_BRANCH:-${CF_PAGES_BRANCH:-unknown}}"

if [ "$BRANCH" = "master" ]; then
  export JEKYLL_ENV=production
else
  export JEKYLL_ENV=preview
fi

echo "▶ cf-build: branch=$BRANCH  JEKYLL_ENV=$JEKYLL_ENV"
exec bundle exec jekyll build --trace
