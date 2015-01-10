
var fs = require('fs');

module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      //href: '='
    },
    template: fs.readFileSync(__dirname + '/nav-item.html', 'utf8'),
    link: function(scope, elem, attr) {
    }
  };
};

