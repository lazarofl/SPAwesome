'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:ModalModaleditcategoryCtrl
 * @description
 * # ModalModaleditcategoryCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('ModalEditCategoryCtrl', function ($scope, $modalInstance, Categories, category, name) {
 	$scope.category = category;
 	$scope.alerts = [];

 	$scope.addAlert = function(message, type) {
 		$scope.alerts.push({type: type, msg: message});
 	};

 	$scope.closeAlert = function(index) {
 		$scope.alerts.splice(index, 1);
 	};

 	$scope.edit = function(){
 		$scope.loading = true;

 		Categories
 		.updateCategory($scope.category)
 		.success(function(data){
 			$scope.category = data;
 			$scope.loading = false;
 			$modalInstance.close($scope.category);    	
 		}).
 		error(function(error){
 			$scope.category.Name = name;
 			if(!!error)
 				$scope.addAlert(error.ExceptionMessage, 'danger');
 			else
 				$scope.addAlert('Não foi possível adicionar a categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	}

 	$scope.cancel = function(){
 		$scope.category.Name = name;
 		$modalInstance.dismiss('cancel');    	
 	}


 });
