# Karma Sinon with IE patches

[![Version](https://img.shields.io/npm/v/karma-sinon-ie.svg)](https://www.npmjs.com/package/karma-sinon-ie) [![Downloads](https://img.shields.io/npm/dm/karma-sinon-ie.svg)](https://www.npmjs.com/package/karma-sinon-ie)

[Sinon](http://sinonjs.org/) for [Karma](http://karma-runner.github.io/) with `sinon-ie` included for IE compatibility.

Use this package instead of [karma-sinon](https://www.npmjs.com/package/karma-sinon) **only** if you require IE support when using fake timers, `XMLHttpRequest` or `XDomainRequest`.

## Version 2.x

Previously in `1.x` this package just loaded `sinon-ie.js` (see [util-ie](https://github.com/sinonjs/sinon/tree/master/lib/sinon/util-ie)) from the [sinon](https://www.npmjs.com/package/sinon) module -- this worked fine, however newer browsers like Chrome 49+ and Microsoft Edge seem to have issues with the redfined global function hack so I've rewritten the way the hack gets applied to prevent it being applied in environments which don't need it.

Please [create an issue](https://github.com/levibuzolic/karma-sinon-ie/issues/new) if you find any bugs or browsers that don't behave correctly.

## Installation

Install the module via npm and remove `karma-sinon` if you already have it installed.

```sh
$ npm install karma-sinon-ie --save-dev
```

Add `sinon` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    #...
    frameworks: ['jasmine', 'sinon'],
    #...
  });
}
```

**Example**
```javascript
describe("sinon example test", function () {
    var time2013_10_01;

    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();

    before(function() {
        // sinon was defined in global scope
        this.fakeTimer = new sinon.useFakeTimers(time2013_10_01);
    });

    it("some test", function() {
        //test
    });

    after(function() {
        this.fakeTimer.restore();
    });

});
```
