[![browser support](https://ci.testling.com/BendingBender/MDN-Array.prototype.find.png)](https://ci.testling.com/BendingBender/MDN-Array.prototype.find)

[![Build Status](https://travis-ci.org/BendingBender/MDN-Array.prototype.find.svg?branch=master)](https://travis-ci.org/BendingBender/MDN-Array.prototype.find)

# ES6 `Array.prototype.find` shim

Simple ES6 [Array.prototype.find](http://people.mozilla.org/%7Ejorendorff/es6-draft.html#sec-array.prototype.find) polyfill for older environments taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill).

For browsers only, bower-friendly. Explicitly not meant to be used with node, use the following [shim](https://github.com/paulmillr/Array.prototype.find) if you wish a shim for node.

## Installation
* Just include repo before your scripts.
* `bower install mdn-array.prototype.find`

## Usage

* `Array.prototype.find(predicate[, thisArg])` returns first item that matches `predicate` function.
* `predicate(value, index, collection)`: takes three arguments
    * `value`: current collection element
    * `index`: current collection element index
    * `collection`: the collection

Code example:

```javascript
// Default:
[1, 5, 10, 15].find(function (a) { return a > 9; }) // 10
```


## Acknowledgements

Tests, readme and travis support gratefully taken from [Array.prototype.find](https://github.com/paulmillr/Array.prototype.find)

## License
CC0 1.0
