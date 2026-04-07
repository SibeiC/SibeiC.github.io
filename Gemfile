source "https://rubygems.org"

# Matches the gem set used by GitHub Pages for maximum compatibility.
# To update: bundle update github-pages
gem "github-pages", group: :jekyll_plugins

# Required for Jekyll's dev server on Ruby 3.x (webrick removed from stdlib in 3.0)
gem "webrick"

# Windows timezone support
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
