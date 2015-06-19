
var jack = require('jack-stack')
  , app = jack.app
  , wrap = jack.wrap;

var _ = require('lodash')
  , stylus = require('stylus');


module.exports = function(stylusConfig) {

  return {
    event: 'after.config',
    handler: handler,
  };

  function handler(config) {
    wrap('stylus', function() {
      var dirs = config.dirnames.static;

      if (!Array.isArray(dirs)) dirs = [ dirs ];

      dirs.map(function(dir) {
        var config = _.assign({}, { src: dir }, stylusConfig);

        app.use(stylus.middleware(config));
      });
    });
  }

};
