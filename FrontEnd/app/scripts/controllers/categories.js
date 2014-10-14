	'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('CategoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
