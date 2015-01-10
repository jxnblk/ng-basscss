
var fs = require('fs');

module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
    },
    template: fs.readFileSync(__dirname + '/panel.html', 'utf8'),
    link: function(scope, elem, attr) {
      console.log(attr);
      scope.header = attr.header;
      scope.footer = attr.footer;
    }
  };
};

