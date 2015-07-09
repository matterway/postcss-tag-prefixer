# postcss-tag-prefixer

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]

[PostCSS](https://github.com/postcss/postcss) plugin which replaces tag names with classes.

## What is it created for?

Some CSS-libraries like Bootstrap or Foundation are using selectors matching
tag names, which could be in the conflict (they break CSS isolation) with your components.
`postcss-tag-prefixer` automatically appends prefixes to bare tag names.

```css
a b c,
d e f[g] {}
```

↓

```css
.b-a .b-b .b-c,
.b-d .b-e .b-f[g] {}
```

## Installation

[Use npm](https://www.npmjs.org/doc/cli/npm-install.html).

```
npm install postcss-tag-prefixer
```

## API

```javascript
var postcssTagPrefixer = require('postcss-tag-prefixer');
```

### postcssTagPrefixer({prefix: String})

Return: `Function`

It converts `tr td` into `.prefix-tr .prefix-td`.

```js
var postcss = require('postcss');
var postcssTagPrefixer = require('postcss-tag-prefixer');

postcss()
  .use(postcssTagPrefixer({prefix: 'prefix-'}))
  .process('tr td')
  .css;
//=> '.prefix-tr .prefix-td'
```

## License

Licensed under [the MIT License](./LICENSE).

[npm-image]: https://img.shields.io/npm/v/postcss-tag-prefixer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/postcss-tag-prefixer
[github-tag]: http://img.shields.io/github/tag/ProductiveMobile/postcss-tag-prefixer.svg?style=flat-square
[github-url]: https://github.com/ProductiveMobile/postcss-tag-prefixer/tags
[travis-image]: https://img.shields.io/travis/ProductiveMobile/postcss-tag-prefixer.svg?style=flat-square
[travis-url]: https://travis-ci.org/ProductiveMobile/postcss-tag-prefixer
[coveralls-image]: https://img.shields.io/coveralls/ProductiveMobile/postcss-tag-prefixer.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/ProductiveMobile/postcss-tag-prefixer
[david-image]: http://img.shields.io/david/ProductiveMobile/postcss-tag-prefixer.svg?style=flat-square
[david-url]: https://david-dm.org/ProductiveMobile/postcss-tag-prefixer
[license-image]: http://img.shields.io/npm/l/postcss-tag-prefixer.svg?style=flat-square
[license-url]: LICENSE
