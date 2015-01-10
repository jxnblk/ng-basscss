
var fs = require('fs');

module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      dismiss: '='
    },
    template: fs.readFileSync(__dirname + '/message.html', 'utf8'),
    link: function(scope, elem, attr) {
      scope.message = {};
      scope.message.type = attr.type || 'default';
      scope.message.dismiss = attr.dismiss || null;
    }
  };
};

