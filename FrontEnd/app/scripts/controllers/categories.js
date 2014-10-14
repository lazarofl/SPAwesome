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
 	$scope.loading = false;
 	$scope.showadd = false;
 	$scope.name = '';

 	$scope.init = function(){
 		$scope.loading = true;
 		Categories
 			.getCategories()
			.success(function(data){
 				$scope.categories = data;
 				$scope.loading = false;
			}).
 			error(function(error){
 				$scope.errors.push(error);
 				$scope.loading = false;
 			});
 	};

 	$scope.addCategory = function(){
 		$scope.loading = true;

 		var category = {
 			Name: $scope.name
 		};

 		Categories
 			.insertCategory(category)
			.success(function(data){
 				$scope.init();

 				$scope.name = '';
 				$scope.showadd = false;
			}).
 			error(function(error){
 				$scope.errors.push(error);
 				$scope.loading = false;
 			});

 	};
 });
