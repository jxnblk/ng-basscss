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

