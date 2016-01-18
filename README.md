# Karma Sinon with IE patches

[![Version](https://img.shields.io/npm/v/karma-sinon-ie.svg)](https://www.npmjs.com/package/karma-sinon-ie) [![Downloads](https://img.shields.io/npm/dm/karma-sinon-ie.svg)](https://www.npmjs.com/package/karma-sinon-ie)

[Sinon](http://sinonjs.org/) for [Karma](http://karma-runner.github.io/) with `sinon-ie` included for IE compatibility.

Use this package instead of [karma-sinon](https://www.npmjs.com/package/karma-sinon) **only** if you require IE support when using fake timers, `XMLHttpRequest` or `XDomainRequest`.

## Version 2.x

Previously in `1.x` this package just loaded `sinon-ie.js` (see [util-ie](https://github.com/sinonjs/sinon/tree/master/lib/sinon/util-ie)) from the [sinon](https://www.npmjs.com/package/sinon) module -- this worked fine, however recently I noticed some strange issues in Internet Explorer 11 and Microsoft Edge. Somehow the patched timers (and other objects) would no longer have their native methods present and we'd see things like `TypeError: undefined is not a function (evaluating 'Date.parse()')`.

It seems IE11 and Edge don't like the way `sinon-ie.js` overrides the native methods, so I've wrapped the application of the patch in a user agent conditional -- it's not the best fix, but it's the best I've been able to come up with so far. 

Please [create an issue](https://github.com/levibuzolic/karma-sinon-ie/issues/new) if you encounter any issues!

## Installation

Install the module via npm

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
