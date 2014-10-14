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
 	$scope.alerts = [];
 	$scope.loading = false;
 	$scope.showadd = false;
 	$scope.name = '';


 	$scope.addAlert = function(message, type) {
 		$scope.alerts.push({type: type, msg: message});
 	};

 	$scope.closeAlert = function(index) {
 		$scope.alerts.splice(index, 1);
 	};

 	$scope.init = function(){
 		$scope.loading = true;
 		Categories
 		.getCategories()
 		.success(function(data){
 			$scope.categories = data;
 			$scope.loading = false;
 		}).
 		error(function(error){
 			$scope.addAlert('Não foi possível conectar na API, verifique a disponibilidade do serviço', 'danger');
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

 			$scope.addAlert($scope.name + ' adicionado com sucesso','success');
 			$scope.name = '';
 			$scope.showadd = false;
 		}).
 		error(function(error){
 			$scope.addAlert(error.message, 'danger');
 			$scope.loading = false;
 		});

 	};
 });
