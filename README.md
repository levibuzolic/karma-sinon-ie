karma-sinon-ie
==============

[Sinon](http://sinonjs.org/) for [Karma](http://karma-runner.github.io/) with `sinon-ie` included for IE compatibility.

Use this package over [karma-sinon](https://www.npmjs.com/package/karma-sinon) **only** if you require IE support when using fake timers, `XMLHttpRequest` or `XDomainRequest`.

Installation
------------

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
