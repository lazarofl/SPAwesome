'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:SubcategoriesCtrl
 * @description
 * # SubcategoriesCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('SubcategoriesCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.category = $routeParams.category;
  });
