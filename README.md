[![browser support](https://ci.testling.com/BendingBender/MDN-Array.prototype.find.png)](https://ci.testling.com/BendingBender/MDN-Array.prototype.find)

[![Build Status](https://travis-ci.org/BendingBender/MDN-Array.prototype.find.svg?branch=master)](https://travis-ci.org/BendingBender/MDN-Array.prototype.find)

# ES6 `Array.prototype.find` shim

[![Greenkeeper badge](https://badges.greenkeeper.io/BendingBender/MDN-Array.prototype.find.svg)](https://greenkeeper.io/)

Simple ES6 [Array.prototype.find](https://tc39.github.io/ecma262/#sec-array.prototype.find) polyfill for older environments taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill).

For browsers only, bower-friendly. Explicitly not meant to be used with node, use [Array.prototype.find](https://github.com/paulmillr/Array.prototype.find) if you wish a shim for node.

## Installation
* Just include repo before your scripts.
* `bower install mdn-array.prototype.find`

## Usage

* `Array.prototype.find(predicate[, thisArg])` returns first item that matches `predicate` function.

#### Parameters

* `predicate(value, index, collection)`: takes three arguments
    * `value`: current collection element
    * `index`: current collection element index
    * `collection`: the collection
* `thisArg`: Optional. Object to use as `this` when executing `predicate`.

#### Code example

```javascript
[1, 5, 10, 15].find(function (a) { return a > 9; }) // 10
```


## Acknowledgements

Tests, readme and travis support gratefully taken from [Array.prototype.find](https://github.com/paulmillr/Array.prototype.find)

## License
CC0 1.0
