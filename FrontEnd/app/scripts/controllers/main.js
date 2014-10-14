'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
