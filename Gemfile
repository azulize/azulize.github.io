source "https://rubygems.org"

# GitHub Pages — pins Jekyll and all supported plugins to the versions
# GitHub's build environment actually runs, so local builds match production.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows / JRuby timezone data
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Faster file watching on macOS
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]

# Ruby 3.4+ no longer bundles these as default gems
gem "webrick", "~> 1.8"
gem "csv"
gem "base64"
gem "bigdecimal"
