# Jack-Stack-Stylus
<!-- [![Build Status][build-image]][build-url] -->
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Tips][gratipay-image]][gratipay-url]

Stylus module for jack-stack. Processes stylus in all config.dirnames.static.

## Installation
```bash
$ npm install --save jack-stack-stylus
```

## Usage
Any [stylus configuration](https://learnboost.github.io/stylus/docs/middleware.html#options) can be passed during initialization.

### ES6

```js
// Replace with your actual Stylus Config
import jack from 'jack-stack';
import jackStylus from 'jack-stack-stylus';

const stylusConfig = {
  dest: 'something',
};

jack.use(jackStylus(stylusConfig));
```

### ES5

```js
// Replace with your actual stylus Config
var stylusConfig = {
  dest: 'something',
};
var jack = require('jack-stack');
var jackStylus = require('jack-stack-stylus')(stylusConfig);

jack.use(jackStylus);
```

[build-image]: https://travis-ci.org/dncrews/jack-stack-stylus.svg?branch=master
[build-url]: https://travis-ci.org/dncrews/jack-stack-stylus
[npm-image]: https://img.shields.io/npm/v/jack-stack-stylus.svg
[npm-url]: https://www.npmjs.org/package/jack-stack-stylus
[downloads-image]: https://img.shields.io/npm/dm/jack-stack-stylus.svg
[downloads-url]: https://www.npmjs.org/package/jack-stack-stylus
[gratipay-image]: https://img.shields.io/gratipay/dncrews.svg
[gratipay-url]: https://www.gratipay.com/dncrews/
