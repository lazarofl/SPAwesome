'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:SubcategoriesCtrl
 * @description
 * # SubcategoriesCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('SubcategoriesCtrl', function ($scope, $location, $routeParams) {

 	$scope.go = function ( path ) {
 		$location.path( path );
 	};

 	$scope.slug = $routeParams.category;
 });
