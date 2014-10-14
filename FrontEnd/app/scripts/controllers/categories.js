	'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('CategoriesCtrl', function ($scope, Categories) {
 	$scope.categories;
 	$scope.errors = [];

 	$scope.init = function(){
 		Categories
 		.getCategories()
 		.success(function(data){
 			$scope.categories = data;
 		}).
 		error(function(error){
 			$scope.errors.push(error);
 		});
 		
 	};
 });
