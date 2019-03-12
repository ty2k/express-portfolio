# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2019-03-11
### Added
- `CHANGELOG.md` added.
- `.nvmrc` added with Node v10.15.3.

### Changed
- Move from Bootstrap v4.0.0-alpha.6 to v4.3.1. Bootstrap, Popper, and jQuery scripts are linked in `views/partials/_head.ejs` and `views/partials/_bootstrap.ejs`, and are served statically from the included `public/dist` folder rather than from CDN links. If you have old EJS view/partial templates included in 1.x.x versions, you will need front-end HTML and CSS refactoring for things to look okay.
- `.travis.yml` updated to Node v10.15.3.
- Previous `dev` script in `package.json` renamed to `start:dev`.
- Content Security Policy in `server.js` updated to reflect removal of various CDN links.

### Removed
- Font Awesome v4 CDN link was previously included in `views/partial/_head.ejs` and has been removed. Replacement SVG icons are included in `public/dist` instead and referenced throughout EJS views/partials.
