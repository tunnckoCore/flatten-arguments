# [flatten-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Fastest, simplest and smallest. Pass `arguments` object or list of arguments and get flattened array.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i flatten-arguments --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const flatten = require('flatten-arguments')

function fixture () {
  return flatten(arguments)
}

// passing arguments object directly
fixture(1, [2, 'a'], 3, {foo: 'bar'}) // => [1, 2, 'a', 3, {foo: 'bar'}]

// passing list of arguments
flatten('foo', 123, ['bar', 456], 7) // => ['foo', 123, 'bar', 456, 7]
```


## Related
* [arr-flatten](https://www.npmjs.com/package/arr-flatten): Recursively flatten an array or arrays. This is the fastest implementation of array flatten. | [homepage](https://github.com/jonschlinkert/arr-flatten)
* [handle-arguments](https://www.npmjs.com/package/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow. Used by `hybridify`. | [homepage](https://github.com/hybridables/handle-arguments)
* [is-arguments](https://www.npmjs.com/package/is-arguments): Is this an arguments object? It's a harder question than you think. | [homepage](https://github.com/ljharb/is-arguments)
* [manage-arguments](https://www.npmjs.com/package/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov. | [homepage](https://github.com/tunnckocore/manage-arguments)
* [sliced](https://www.npmjs.com/package/sliced): A faster Node.js alternative to Array.prototype.slice.call(arguments) | [homepage](https://github.com/aheckmann/sliced)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/flatten-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/flatten-arguments
[npmjs-img]: https://img.shields.io/npm/v/flatten-arguments.svg?label=flatten-arguments

[license-url]: https://github.com/tunnckoCore/flatten-arguments/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/flatten-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/flatten-arguments.svg

[travis-url]: https://travis-ci.org/tunnckoCore/flatten-arguments
[travis-img]: https://img.shields.io/travis/tunnckoCore/flatten-arguments.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/flatten-arguments
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/flatten-arguments.svg

[david-url]: https://david-dm.org/tunnckoCore/flatten-arguments
[david-img]: https://img.shields.io/david/tunnckoCore/flatten-arguments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg