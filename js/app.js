(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



module.exports = function() {
  return {
    scope: {
      items: '=?items'
    },
    transclude: true,
    replace: true,
    template: "<div class=\"Dropdown inline-block relative\">\n  <button class=\"Dropdown-button\"\n    ng-click=\"dropdown.toggle()\"\n    ng-class=\"buttonClass || 'button-light-gray'\">\n    {{ label }}\n    &#9662;\n  </button>\n  <div ng-if=\"dropdown.isOpen\"\n    ng-click=\"dropdown.isOpen = false\"\n    class=\"fixed top-0 right-0 bottom-0 left-0\"></div>\n  <bass-nav ng-if=\"dropdown.isOpen\" class=\"Dropdown-body absolute z1\">\n    <div ng-if=\"!items\" ng-click=\"dropdown.isOpen = false\" ng-transclude></div>\n    <bass-nav-item class=\"button block button-nav-light\"\n      ng-if=\"items\"\n      ng-repeat=\"item in items\"\n      ng-click=\"dropdown.isOpen = false\"\n      ng-transclude>\n        {{ item.name }}\n    </bass-nav-item>\n  </bass-nav>\n</div>\n",
    link: function(scope, elem, attr) {
      scope.label = attr.label;
      scope.buttonClass = attr.buttonClass;
      scope.dropdown = {
        isOpen: attr.isOpen || false,
        toggle: function() {
          this.isOpen = !this.isOpen;
        }
      };
    }
  };
};

},{}],2:[function(require,module,exports){



module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      dismiss: '='
    },
    template: "<div\n  class=\"table bold mb2 rounded\"\n  ng-class=\"{\n    'bg-light-gray': message.type == 'default',\n    'white bg-green': message.type == 'success',\n    'white bg-blue': message.type == 'info',\n    'bg-yellow': message.type == 'warning',\n    'white bg-red': message.type == 'error'\n  }\">\n  <div ng-transclude class=\"p2 table-cell full-width\"></div>\n  <a class=\"h3 table-cell button py2 button-nav-dark\"\n    ng-if=\"message.dismiss\"\n    ng-click=\"message.dismiss\">&times;</a>\n</div>\n",
    link: function(scope, elem, attr) {
      scope.message = {};
      scope.message.type = attr.type || 'default';
      scope.message.dismiss = attr.dismiss || null;
    }
  };
};


},{}],3:[function(require,module,exports){



module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      //href: '='
    },
    template: "<a ng-transclude class=\"NavItem button block button-nav-light\">\n</a>\n",
    link: function(scope, elem, attr) {
    }
  };
};


},{}],4:[function(require,module,exports){



module.exports = function() {
  return {
    scope: {
      items: '=',
    },
    transclude: true,
    replace: true,
    template: "<div>\n  <div ng-if=\"!items\" class=\"bg-white border rounded\" ng-transclude></div>\n  <div ng-if=\"items\" class=\"bg-white border rounded\">\n    <bass-nav-item ng-repeat=\"item in items\" ng-transclude class=\"\">\n      {{ item.name }}\n    </bass-nav-item>\n  </div>\n</div>\n",
    //compile: require('./util/transcluder'),
    link: function(scope, elem, attr) {
    }
  };
};


},{}],5:[function(require,module,exports){



module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
    },
    template: "<div class=\"overflow-hidden bg-white border rounded\">\n  <div class=\"p2 bg-lighter-gray border-bottom\">\n    <h1 class=\"h3 m0\">{{ header }}</h1>\n  </div>\n  <div class=\"p2\" ng-transclude></div>\n  <div class=\"p2 bg-lighter-gray border-top\">\n    <p class=\"m0 h5\">{{ footer }}</p>\n  </div>\n</div>\n",
    link: function(scope, elem, attr) {
      console.log(attr);
      scope.header = attr.header;
      scope.footer = attr.footer;
    }
  };
};


},{}],6:[function(require,module,exports){
// App

//global.angular = require('angular');

var basscss = angular.module('basscss', []);

basscss.controller('MainCtrl', function($scope) {
  $scope.herro = 'Warld';
  $scope.dropdownItems = [
    { name: 'Action' },
    { name: 'Save' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];
  $scope.dismissMessage = function() {
    console.log('close it');
  };
});

basscss.directive('bassNavItem', require('../components/nav-item'));
basscss.directive('bassNav', require('../components/nav'));
basscss.directive('bassDropdown', require('../components/dropdown'));
basscss.directive('bassPanel', require('../components/panel'));
basscss.directive('bassMessage', require('../components/message'));


},{"../components/dropdown":1,"../components/message":2,"../components/nav":4,"../components/nav-item":3,"../components/panel":5}]},{},[6]);
