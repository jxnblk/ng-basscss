
var fs = require('fs');

module.exports = function() {
  return {
    scope: {
      items: '=',
    },
    transclude: true,
    replace: true,
    template: fs.readFileSync(__dirname + '/nav.html', 'utf8'),
    //compile: require('./util/transcluder'),
    link: function(scope, elem, attr) {
    }
  };
};

