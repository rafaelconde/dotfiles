<a name="0.38.0"></a>
# [0.38.0](https://github.com/prettier/prettier-atom/compare/v0.37.0...v0.38.0) (2017-08-27)


### Bug Fixes

* **display-of-errors:** show syntax errors for unsaved files ([cc402c9](https://github.com/prettier/prettier-atom/commit/cc402c9)), closes [#235](https://github.com/prettier/prettier-atom/issues/235)
* **statusTile:** Fix style scope ([1e563b6](https://github.com/prettier/prettier-atom/commit/1e563b6))


### Features

* **formatOnSave:** Added 'eslint-plugin-prettier' to list of packages to look for (#247) ([b3a6838](https://github.com/prettier/prettier-atom/commit/b3a6838))
* **prettier-eslint:** bump to 4.2.1 ([89bed30](https://github.com/prettier/prettier-atom/commit/89bed30))



<a name="0.37.0"></a>
# [0.37.0](https://github.com/prettier/prettier-atom/compare/v0.36.1...v0.37.0) (2017-07-22)


### Bug Fixes

* **errors:** handle errors that aren't syntax errors ([c3d02b0](https://github.com/prettier/prettier-atom/commit/c3d02b0)), closes [#231](https://github.com/prettier/prettier-atom/issues/231)


### Features

* **graphql:** add GraphQl query support (requires language-graphql) ([c3672ca](https://github.com/prettier/prettier-atom/commit/c3672ca)), closes [#237](https://github.com/prettier/prettier-atom/issues/237)
* **prettier:** update to 1.5.3 ([85b3d68](https://github.com/prettier/prettier-atom/commit/85b3d68))



<a name="0.36.1"></a>
## [0.36.1](https://github.com/prettier/prettier-atom/compare/v0.36.0...v0.36.1) (2017-07-07)


### Bug Fixes

* **handleError:** properly handle alternative loc in Prettier errors ([e2dce36](https://github.com/prettier/prettier-atom/commit/e2dce36)), closes [#229](https://github.com/prettier/prettier-atom/issues/229)



<a name="0.36.0"></a>
# [0.36.0](https://github.com/prettier/prettier-atom/compare/v0.35.0...v0.36.0) (2017-07-06)


### Bug Fixes

* **debug:** Fix usage of readPkgUp to fetch package info ([4c2561d](https://github.com/prettier/prettier-atom/commit/4c2561d)), closes [#217](https://github.com/prettier/prettier-atom/issues/217)
* **formatOnSave:** don't prevent user from saving if uncaught error ([8f3bfd9](https://github.com/prettier/prettier-atom/commit/8f3bfd9)), closes [#190](https://github.com/prettier/prettier-atom/issues/190)
* **main:** Subscribe to onDidChangeActivePaneItem when onDidChangeActiveTextEditor is not available ([2efe713](https://github.com/prettier/prettier-atom/commit/2efe713)), closes [#205](https://github.com/prettier/prettier-atom/issues/205)
* **prettierOptions:** Always disable trailingComma option for JSON ([600cbc0](https://github.com/prettier/prettier-atom/commit/600cbc0)), closes [#212](https://github.com/prettier/prettier-atom/issues/212)


### Features

* **errors:** use linter to display errors ([fc20a8c](https://github.com/prettier/prettier-atom/commit/fc20a8c)), closes [#146](https://github.com/prettier/prettier-atom/issues/146)



<a name="0.35.0"></a>
# [0.35.0](https://github.com/prettier/prettier-atom/compare/v0.34.0...v0.35.0) (2017-06-29)


### Features

* **json:** add JSON support ([112f58a](https://github.com/prettier/prettier-atom/commit/112f58a))
* **prettier:** bump to 1.5.2 ([3519fab](https://github.com/prettier/prettier-atom/commit/3519fab))



<a name="0.34.0"></a>
# [0.34.0](https://github.com/prettier/prettier-atom/compare/v0.33.0...v0.34.0) (2017-06-22)


### Bug Fixes

* **save:** On save, use editor provided by observer ([b93ec93](https://github.com/prettier/prettier-atom/commit/b93ec93)), closes [#96](https://github.com/prettier/prettier-atom/issues/96)


### Features

* **css:** Add LESS and SCSS to default scopes for CSS files ([d41a008](https://github.com/prettier/prettier-atom/commit/d41a008)), closes [#195](https://github.com/prettier/prettier-atom/issues/195)
* **statusTile:** Display status bar tile only if active file matches one of the scopes (file extens ([56467b9](https://github.com/prettier/prettier-atom/commit/56467b9)), closes [#170](https://github.com/prettier/prettier-atom/issues/170)



<a name="0.33.0"></a>
# [0.33.0](https://github.com/prettier/prettier-atom/compare/v0.32.0...v0.33.0) (2017-06-08)


### Bug Fixes

* **Settings:** Add missing parser options to settings screen ([7d9f22c](https://github.com/prettier/prettier-atom/commit/7d9f22c))


### Features

* **format-on-save:** add option to not format on save if prettier not in dependencies ([1a32d47](https://github.com/prettier/prettier-atom/commit/1a32d47)), closes [#43](https://github.com/prettier/prettier-atom/issues/43)
* **parsers:** add typescript and CSS support ([9882a0b](https://github.com/prettier/prettier-atom/commit/9882a0b)), closes [#183](https://github.com/prettier/prettier-atom/issues/183) [#184](https://github.com/prettier/prettier-atom/issues/184)
* **prettier:** bump to 1.4.4 ([aa701a0](https://github.com/prettier/prettier-atom/commit/aa701a0))
* **prettier-eslint:** bump to 6.3.0 ([103ca8b](https://github.com/prettier/prettier-atom/commit/103ca8b))



<a name="0.32.0"></a>
# [0.32.0](https://github.com/prettier/prettier-atom/compare/v0.31.1...v0.32.0) (2017-06-02)


### Bug Fixes

* **warnings:** Check if linter-eslint is actually active instead of reading user config ([88114c6](https://github.com/prettier/prettier-atom/commit/88114c6)), closes [#168](https://github.com/prettier/prettier-atom/issues/168)


### Features

* **prettier:** bump to 0.4.1 ([1791886](https://github.com/prettier/prettier-atom/commit/1791886))



<a name="0.31.1"></a>
## [0.31.1](https://github.com/prettier/prettier-atom/compare/v0.31.0...v0.31.1) (2017-05-17)


### Bug Fixes

* **debugCommand:** Provide package's absolute path to read package.json ([824dd47](https://github.com/prettier/prettier-atom/commit/824dd47)), closes [#156](https://github.com/prettier/prettier-atom/issues/156)



<a name="0.31.0"></a>
# [0.31.0](https://github.com/prettier/prettier-atom/compare/v0.30.0...v0.31.0) (2017-05-14)


### Bug Fixes

* **statusBar:** Avoid attaching the status bar tile in activate() ([54eb696](https://github.com/prettier/prettier-atom/commit/54eb696))


### Features

* **options:** add editorconfig option to package settings ([ad47fae](https://github.com/prettier/prettier-atom/commit/ad47fae))
* **statusBar:** Add an option to show/hide formatOnSave's state in the status bar ([1abded3](https://github.com/prettier/prettier-atom/commit/1abded3)), closes [#153](https://github.com/prettier/prettier-atom/issues/153)
* **statusBar:** Added click handler to toggle formatOnSave ([2710924](https://github.com/prettier/prettier-atom/commit/2710924))



<a name="0.30.0"></a>
# [0.30.0](https://github.com/prettier/prettier-atom/compare/v0.29.0...v0.30.0) (2017-05-03)


### Features

* **command:** Add a command to toggle "Format on Save" ([bc112c6](https://github.com/prettier/prettier-atom/commit/bc112c6)), closes [#117](https://github.com/prettier/prettier-atom/issues/117)
* **config:** add .editorconfig support ([e2aff36](https://github.com/prettier/prettier-atom/commit/e2aff36))
* **eslint-fallbacks:** fallback to user's prettier settings if cannot be inferred from eslint confi ([f4520ac](https://github.com/prettier/prettier-atom/commit/f4520ac))
* **statusBar:** Add status bar tile to show enabled/disabled state ([f36478b](https://github.com/prettier/prettier-atom/commit/f36478b))



<a name="0.29.0"></a>
# [0.29.0](https://github.com/prettier/prettier-atom/compare/v0.28.0...v0.29.0) (2017-04-22)


### Bug Fixes

* **contextMenu:** Enable context menu entry for JSX files ([06e9945](https://github.com/prettier/prettier-atom/commit/06e9945))
* **contextMenu:** Uppercase P for Prettier in context menu entries ([3376665](https://github.com/prettier/prettier-atom/commit/3376665))
* **embedded-scripts:** skip single-line script tags in html files ([4f5d1c6](https://github.com/prettier/prettier-atom/commit/4f5d1c6))
* **formatOnSave:** Don't format if file is saved for the first time ([2a7c0cd](https://github.com/prettier/prettier-atom/commit/2a7c0cd))
* **ignore-globs:** switch to using node-ignore instead of minimatch globs ([5122823](https://github.com/prettier/prettier-atom/commit/5122823)), closes [#133](https://github.com/prettier/prettier-atom/issues/133)


### Features

* **command:** Add a debug command ([63c91d1](https://github.com/prettier/prettier-atom/commit/63c91d1))


### Performance Improvements

* **main:** Lazy load displayDebugInfo() ([cac4403](https://github.com/prettier/prettier-atom/commit/cac4403))


### BREAKING CHANGES

* **ignore-globs:** Some files that were previously ignored may now no longer be ignored, and vice
versa.



<a name="0.28.0"></a>
# [0.28.0](https://github.com/prettier/prettier-atom/compare/v0.27.0...v0.28.0) (2017-04-15)


### Features

* **config:** Added config options for the Prettier options 'useTabs' and 'semi' ([b920be7](https://github.com/prettier/prettier-atom/commit/b920be7))
* **deps:** upgrade to latest prettier(-eslint) ([a13a732](https://github.com/prettier/prettier-atom/commit/a13a732))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/prettier/prettier-atom/compare/v0.26.0...v0.27.0) (2017-04-13)


### Features

* **deps:** upgrade to the latest prettier-eslint ([f3a0b7f](https://github.com/prettier/prettier-atom/commit/f3a0b7f))
* **useLocalPrettier:** Prefer local prettier over bundled ([98e2ea9](https://github.com/prettier/prettier-atom/commit/98e2ea9))



<a name="0.26.0"></a>
# [0.26.0](https://github.com/prettier/prettier-atom/compare/v0.25.0...v0.26.0) (2017-04-02)


### Features

* **error:** Cleanup error notification ([95ced9d](https://github.com/prettier/prettier-atom/commit/95ced9d))



<a name="0.25.0"></a>
# [0.25.0](https://github.com/prettier/prettier-atom/compare/v0.24.0...v0.25.0) (2017-04-02)


### Bug Fixes

* **config:** Updated description for bracketSpacing option ([9d7051a](https://github.com/prettier/prettier-atom/commit/9d7051a)), closes [#106](https://github.com/prettier/prettier-atom/issues/106)
* **prettier:** Don't alter text buffer if file is already pretty ([613f28e](https://github.com/prettier/prettier-atom/commit/613f28e))


### Features

* **options:** add prettierLast option for prettier-eslint ([0f2714d](https://github.com/prettier/prettier-atom/commit/0f2714d))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/prettier/prettier-atom/compare/v0.23.1...v0.24.0) (2017-03-25)


### Features

* **prettier-eslint:** bump to 4.3.2 ([f5fbb5d](https://github.com/prettier/prettier-atom/commit/f5fbb5d))



<a name="0.23.1"></a>
## [0.23.1](https://github.com/prettier/prettier-atom/compare/v0.23.0...v0.23.1) (2017-03-15)


### Bug Fixes

* **formatOnSave:** do not format on save after plugin is disabled ([1c7cd9b](https://github.com/prettier/prettier-atom/commit/1c7cd9b)), closes [#84](https://github.com/prettier/prettier-atom/issues/84)
* **linter:** refresh linter highlighting after format ([9a538e1](https://github.com/prettier/prettier-atom/commit/9a538e1)), closes [#86](https://github.com/prettier/prettier-atom/issues/86)



<a name="0.23.0"></a>
# [0.23.0](https://github.com/prettier/prettier-atom/compare/v0.22.0...v0.23.0) (2017-03-09)


### Features

* **whitelist:** force whitelist if provided ([c2a7054](https://github.com/prettier/prettier-atom/commit/c2a7054))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/prettier/prettier-atom/compare/v0.21.3...v0.22.0) (2017-03-07)


### Bug Fixes

* **formatOnSave:** don't error when saving a new file ([19b4d04](https://github.com/prettier/prettier-atom/commit/19b4d04)), closes [#79](https://github.com/prettier/prettier-atom/issues/79)


### Features

* **whitelist-globs:** add ability to whitelist globs ([2369c44](https://github.com/prettier/prettier-atom/commit/2369c44)), closes [#62](https://github.com/prettier/prettier-atom/issues/62)



<a name="0.21.3"></a>
## [0.21.3](https://github.com/prettier/prettier-atom/compare/v0.21.2...v0.21.3) (2017-03-06)


### Bug Fixes

* **$config:** Unset old config options causing errors ([5f221d5](https://github.com/prettier/prettier-atom/commit/5f221d5)), closes [#72](https://github.com/prettier/prettier-atom/issues/72)
* **excludedGlobs:** Respect excluded globs when formatting on save ([a178813](https://github.com/prettier/prettier-atom/commit/a178813)), closes [#73](https://github.com/prettier/prettier-atom/issues/73)



<a name="0.21.2"></a>
## [0.21.2](https://github.com/prettier/prettier-atom/compare/v0.21.1...v0.21.2) (2017-03-06)


### Bug Fixes

* **$formatOnSave:** Fix error when no .eslintignore is found ([94d7750](https://github.com/prettier/prettier-atom/commit/94d7750)), closes [#67](https://github.com/prettier/prettier-atom/issues/67)



<a name="0.21.1"></a>
## [0.21.1](https://github.com/prettier/prettier-atom/compare/v0.21.0...v0.21.1) (2017-03-05)


### Bug Fixes

* **$formatOnSave:** Handle null filePath ([2eb398c](https://github.com/prettier/prettier-atom/commit/2eb398c)), closes [#67](https://github.com/prettier/prettier-atom/issues/67)



<a name="0.21.0"></a>
# [0.21.0](https://github.com/prettier/prettier-atom/compare/v0.20.0...v0.21.0) (2017-03-05)


### Features

* **$linter-eslint:** Warn about linter-eslint "Format on Save" ([ac9b1d0](https://github.com/prettier/prettier-atom/commit/ac9b1d0))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/prettier/prettier-atom/compare/v0.19.1...v0.20.0) (2017-03-05)



<a name="0.19.1"></a>
## [0.19.1](https://github.com/prettier/prettier-atom/compare/v0.19.0...v0.19.1) (2017-03-05)


### Features

* **$prettier-eslint:** Integrate prettier-eslint ([002c2a7](https://github.com/prettier/prettier-atom/commit/002c2a7)), closes [#57](https://github.com/prettier/prettier-atom/issues/57)



<a name="0.19.0"></a>
# [0.19.0](https://github.com/prettier/prettier-atom/compare/v0.18.1...v0.19.0) (2017-02-24)



<a name="0.18.1"></a>
## [0.18.1](https://github.com/prettier/prettier-atom/compare/v0.18.0...v0.18.1) (2017-02-21)



<a name="0.18.0"></a>
# [0.18.0](https://github.com/prettier/prettier-atom/compare/v0.17.0...v0.18.0) (2017-02-17)



<a name="0.17.0"></a>
# [0.17.0](https://github.com/prettier/prettier-atom/compare/v0.16.0...v0.17.0) (2017-02-14)



<a name="0.16.0"></a>
# [0.16.0](https://github.com/prettier/prettier-atom/compare/v0.15.0...v0.16.0) (2017-02-06)



<a name="0.15.0"></a>
# [0.15.0](https://github.com/prettier/prettier-atom/compare/v0.11.0...v0.15.0) (2017-02-03)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/prettier/prettier-atom/compare/v0.0.10...v0.11.0) (2017-01-24)



<a name="0.0.10"></a>
## [0.0.10](https://github.com/prettier/prettier-atom/compare/v0.0.9...v0.0.10) (2017-01-20)



<a name="0.0.9"></a>
## [0.0.9](https://github.com/prettier/prettier-atom/compare/v0.0.8...v0.0.9) (2017-01-19)



<a name="0.0.8"></a>
## [0.0.8](https://github.com/prettier/prettier-atom/compare/v0.0.7...v0.0.8) (2017-01-17)



<a name="0.0.7"></a>
## [0.0.7](https://github.com/prettier/prettier-atom/compare/v0.0.6...v0.0.7) (2017-01-15)



<a name="0.0.6"></a>
## [0.0.6](https://github.com/prettier/prettier-atom/compare/v0.0.5...v0.0.6) (2017-01-13)



<a name="0.0.5"></a>
## [0.0.5](https://github.com/prettier/prettier-atom/compare/v0.0.4...v0.0.5) (2017-01-11)



<a name="0.0.4"></a>
## [0.0.4](https://github.com/prettier/prettier-atom/compare/v0.0.3...v0.0.4) (2017-01-11)



<a name="0.0.3"></a>
## 0.0.3 (2017-01-10)



