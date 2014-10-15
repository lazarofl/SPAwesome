'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
