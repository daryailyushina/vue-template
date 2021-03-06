# NPM packages

## Scripts

There are several scripts that will support you during the development and deploy process. In the end you'll probably only need two or three of them, since they often call each other.

### Common

#### `npm run build`

Creates the production build of the current code and moves it to the `/dist` folder. This will also perform **code splitting**, **critical CSS splitting** and **minification/uglyfication**. `npm run test` **MUST** be executed before building!

#### `npm run dev`

Starts the development-environment with styleguide example pages. Please note, that for performance reasons no minification, uglyfication and CSS extraction is performed.

#### `npm run dev:styleguide`

Starts [Vue-Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) in a separate webpack and localhost instance.

#### `npm run test`

This will test the current state of CSS and JS code. Tests **MUST** be executed before creating a build.

#### All scripts

* `npm run clean` - Cross platform removal of `/dist` folder.
* `npm run build` - See above.
* `npm run build:monitor` will run a normal build but also open a statistics page after the build, where you can review the package size development for all created builds. Please note, that the data can become invalid if the webpack configuration is changed.
* `npm run build:profile` creates a `profile.json` in the `stats` folder which you can use to find the source of unexpected build size increases. There are []several tools](https://survivejs.com/webpack/optimizing/build-analysis/) you can use to examine the data.
* `npm run build:styleguide` will create a build which looks exactly like your development environment. You can use this to deploy the living styleguide to a remote server. Please note, that you can only view the export inside a server instance where the provided `.htaccess` must be installed or merged.
* `npm run build:watch` creates a build and then watches the source code for changes. This can be used when developing inside a vendor environment.
* `npm run eslint` performs the ESLint tests.
* `npm run eslint:fix` performs the ESLint tests and automatic issue fixing where possible. **Only use this if you know what you're doing!** Always check and rerun the application before committing!
* `npm run stylelint` performs the Stylelint tests.
* `npm run lint` performs ESLint and Stylelint tests.
* `npm run license` logs a summary of the used npm package licenses.
* `npm run license:stats` creates a CSV file inside `/stats` with a detailed list of used npm package licenses.
* `npm run test` - See above.
* `npm run test:unit` runs unit tests.
* `npm run dev` - See above.
* `npm run dev:styleguide` - See above.

## Dependencies

### Project

* [intersection-observer](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) - A polyfill for intersectionObserver. Required by `v-lazy-image` plugin.
* [lazysizes](https://github.com/aFarkas/lazysizes) - Lazy loader for images and iframes. Required by `e-picture`.
* [picturefill](https://github.com/scottjehl/picturefill) - A polyfill for picture and srcset. Required by `e-picture`.

### Template

* [axios](https://github.com/axios/axios) - Promise based HTTP client for browser and node.js.
* [vue](https://github.com/vuejs/vue) - A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [vue-bem-cn](http://codepen.io/c01nd01r/pen/Qdeovv)- Simple BEM class name generator for Vue.JS.
* [vue-i18n](https://github.com/kazupon/vue-i18n) - Internationalization plugin for Vue.js
* [vue-router](https://github.com/vuejs/vue-router) - The official router for Vue.js.
* [vuex](https://github.com/vuejs/vuex) - Centralized State Management for Vue.js.

## Dev-Dependencies

### Project

None

### Template

* [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) - Axios adapter that allows to easily mock requests.
* [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) - Babel compiler core.
* [babel-eslint](https://github.com/babel/babel-eslint) - babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.
* [babel-jest](https://www.npmjs.com/package/babel-jest) - Babel compiler plugin for Jest testing.
* [babel-loader](https://github.com/babel/babel-loader) - This package allows transpiling JavaScript files using Babel and webpack.
* [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) - A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.
* [babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node) - Babel plugin to transpile import() to a deferred require(), for node.
* [babel-plugin-transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) - Transform rest properties for object destructuring assignment and spread properties for object literals
* [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) - webpack plugin to copie individual files or entire directories to the build directory.
* [css-loader](https://github.com/webpack-contrib/css-loader) - The webpack css-loader interprets @import and url() like import/require() and will resolve them.
* [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) - :horse: IE Polyfill for CSS Variables (used for themes)
* [eslint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.
* [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.
* [syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/) - This plugin only allows Babel to parse import syntax. **Don't use babel-plugin-dynamic-import-node since it breaks code splitting!**
* [eslint-loader](https://github.com/webpack-contrib/eslint-loader) - eslint loader for webpack.
* [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) - Official ESLint plugin for Vue.js.
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - Extract text from bundle into a file.
* [file-loader](https://github.com/webpack-contrib/file-loader) - Instructs webpack to emit the required object as file and to return its public URL.
* [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin) - Friendly-errors-webpack-plugin recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
* [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) - Image optimizer module for webpack.
* [jest](https://github.com/facebook/jest) - Delightful JavaScript Testing.
* [license-checker](https://github.com/davglass/license-checker) - Allows us to check the whole project for use licenses (see scripts).
* [launch-editor-middleware](https://github.com/yyx990803/launch-editor) - Allows to open Vue components in editor from Vue inspector.
* [node-sass](https://github.com/sass/node-sass) - Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
* [postcss-critical-split](https://github.com/mrnocreativity/postcss-critical-split) - A PostCSS plugin that takes existing CSS files and splits out the annotated critical styles into a separate file.
* [postcss-html](https://github.com/gucong3000/postcss-html) - PostCSS Syntax for parsing HTML / Markdown / Vue component
* [postcss-pipeline-webpack-plugin](https://github.com/mistakster/postcss-pipeline-webpack-plugin) - A webpack plugin to process generated assets with PostCSS pipeline.
* [rimraf](https://github.com/isaacs/rimraf) - A `rm -rf` util for nodejs.
* [sass-loader](https://github.com/webpack-contrib/sass-loader) - Sass loader for webpack. Compiles Sass to CSS. 
* [stylelint](https://github.com/stylelint/stylelint) - A mighty, modern CSS linter and fixer that helps you avoid errors and enforce consistent conventions in your stylesheets.
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint .
* [stylelint-webpack-plugin](https://github.com/JaKXz/stylelint-webpack-plugin) -  A webpack plugin to lint your CSS/Sass code using stylelint.
* [typescript](https://github.com/Microsoft/TypeScript) -  TypeScript is a superset of JavaScript that compiles to clean JavaScript output. - Needed by `vue-styleguidist`
* [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) - This plugin uses UglifyJS v3 (`uglify-es`) to minify your JavaScript.
* [url-loader](https://github.com/webpack-contrib/url-loader) - Loads files as `base64` encoded URL.
* [swiper](https://github.com/nolimits4web/swiper) - Mobile touch slider (swiper) with hardware accelerated transitions. 
* [vue-jest](https://github.com/vuejs/vue-jest) - Jest Vue transformer.
* [vue-loader](https://github.com/vuejs/vue-loader) - Vue.js component loader for Webpack.
* [vue-styleguidist]() - Created from react styleguidist for Vue Components with a living style guide.
* [webpack](https://github.com/webpack/webpack) - webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
* [webpack-auto-inject-version](https://github.com/radswiat/webpack-auto-inject-version) - Webpack plugin to auto inject version into html or file.
* [webpack-clean](https://www.npmjs.com/package/webpack-clean) - Plugin let's remove specific files after the build process.
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Serves a webpack app. Updates the browser on changes.
* [webpack-monitor](https://github.com/webpackmonitor/webpackmonitor) - Webpack Monitor is a configurable Webpack plugin that captures relevant statistics on your production builds.
