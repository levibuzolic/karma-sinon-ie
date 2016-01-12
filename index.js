var path = require('path');

var createPattern = function(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

var initSinon = function(files) {
  var sinonPath = path.resolve(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');
  files.unshift(createPattern(path.resolve(__dirname, 'sinon-ie.js')));
  files.unshift(createPattern(sinonPath));
};

initSinon.$inject = ['config.files'];

module.exports = {
  'framework:sinon': ['factory', initSinon]
};
