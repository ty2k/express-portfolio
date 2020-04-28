# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.2] - 2020-04-27
### Removed
- Removes unused route `./routes/signature-api.js`, references from `./server.js`, and fonts from `./public/fonts`. Also removes associated dependency `opentype.js`.
### Changed
- Bumps Node to v12.16.2 in `.nvmrc` and `.travis.yml`.
- Updates to dependencies:
  - `ejs` to v3.1.2
  - `knex` to v0.21.1
  - `pg` to v8.0.3
- Updates to devDependencies:
  - `mocha` to v7.1.2

## [4.0.1] - 2020-04-12
### Changed
- Updates to dependencies:
  - `ejs` to v3.0.2
  - `helmet` to v3.22.0
  - `knex` to v0.20.13
  - `nodemailer` to v6.4.6
  - `pg` to v8.0.2
- Updates to devDependencies:
  - `ejs-lint` to v1.1.0
  - `mocha` to v7.1.1
  - `nodemon` to v2.0.3
  - `standard` to v14.3.3

## [4.0.0] - 2020-03-02
### Changed
- Bumps `.nvmrc` to Node v12.16.1.
- `ejs` major version upgrade includes a breaking change to the `include` functionality. This resulted in a refactor to all EJS views/partials in the project.
- Upstream `node-sass` vulnerability fixed with `npm audit fix` in `package-lock.json`.
- Updates to dependencies:
  - `bcrypt` to v4.0.1
  - `cookie-session` to v1.4.0
  - `ejs` to v3.0.1
  - `helmet` to v3.21.3
  - `knex` to v0.20.10
  - `nodemailer` to v6.4.4
  - `pg` to v7.18.2
- Updates to devDependencies:
  - `ejs-lint` to v1.0.1
  - `mocha` to v7.1.0
  - `nodemon` to v2.0.2

## [3.1.3] - 2019-11-16
### Changed
- Updates to dependencies:
  - `ejs` to v2.7.2
  - `helmet` to v3.21.2
  - `knex` to v0.20.2
- Updates to devDependencies:
  - `mocha` to v6.2.2

## [3.1.2] - 2019-10-16
### Changed
- Updates to dependencies:
  - `dotenv` to v8.2.0
  - `knex` to v0.19.5
  - `nodemailer` to v6.3.1
- Updates to devDependencies:
  - `nodemon` to v1.19.4
- Updates `.nvmrc` and `.travis.yml` to Node v10.16.3

## [3.1.1] - 2019-10-05
### Changed
- Renamed `doc-ver-freshness.js` to `version-freshness.js`, added test to compare versions with `package-lock.json`.
- Updates to dependencies:
  - `ejs` to v2.7.1
  - `helmet` to v3.21.1
  - `knex` to v0.19.4
- Updates to devDependencies:
  - `mocha` to v6.2.1
  - `nodemon` to v1.19.3
  - `standard` to v14.3.1

## [3.1.0] - 2019-08-29
### Added
- Unit test `doc-ver-freshness.js` checks that the topmost version in this history file matches the current `package.json` version.

### Changed
- Updates to dependencies:
  - `dotenv` to v8.1.0
  - `helmet` to v3.20.1
  - `knex` to v0.19.3
  - `pg` to v7.12.1
- Updates to devDependencies:
  - `standard` to v14.1.0

## [3.0.0] - 2019-07-29
### Changed
- Switched dependencies:
  - `express-html-minifier` to `express-html-minifier-2` v1.0.1 due to [CVE-2018-16487](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-16487)
- Updates to dependencies:
  - `helmet` to v3.20.0
  - `knex` to v0.19.1
  - `nodemailer` to v6.3.0
  - `pg` to v7.12.0
- Updates to devDependencies:
  - `mocha` to v6.2.0
  - `standard` to v13.1.0

## [2.0.3] - 2019-06-27
### Changed
- Updates to dependencies:
  - `ejs` to v2.6.2
  - `knex` to v0.18.0

## [2.0.2] - 2019-06-01
### Changed
- Updates to dependencies:
  - `dotenv` to v8.0.0
  - `express` to v4.17.1
  - `helmet` to v3.18.0
  - `knex` to v0.17.2
  - `nodemailer` to v6.2.1
  - `opentype.js` to v1.1.0
  - `pg` to v7.11.0
- Updates to devDependencies
  - `nodemon` to v1.19.1

## [2.0.1] - 2019-04-24
### Changed
- Updates to dependencies:
  - `bcrypt` to v3.0.6
  - `compression` to v1.7.4
  - `dotenv` to v7.0.0
  - `nodemailer` to v6.1.1
  - `opentype.js` to v1.0.1
  - `pg` to v7.10.0
- Updates to devDependencies:
  - `mocha` to v6.1.4
  - `supertest` to v4.0.2

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
