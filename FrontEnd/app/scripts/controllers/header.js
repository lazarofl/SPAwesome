'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
