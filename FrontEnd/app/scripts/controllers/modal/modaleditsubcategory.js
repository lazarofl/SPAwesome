'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:ModalModaleditsubcategoryctrlCtrl
 * @description
 * # ModalModaleditsubcategoryctrlCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('ModalEditSubCategoryCtrl', function ($scope, $modalInstance, subcategories, subcategory, name) {

 	$scope.subcategory = subcategory;
 	$scope.alerts = [];

 	$scope.addAlert = function(message, type) {
 		$scope.alerts.push({type: type, msg: message});
 	};

 	$scope.closeAlert = function(index) {
 		$scope.alerts.splice(index, 1);
 	};

 	$scope.edit = function(){
 		$scope.loading = true;

 		subcategories
 		.updateSubCategory($scope.subcategory)
 		.success(function(data){
 			$scope.subcategory = data;
 			$scope.loading = false;
 			$modalInstance.close($scope.subcategory);    	
 		}).
 		error(function(error){
 			$scope.subcategory.Name = name;
 			if(!!error)
 				$scope.addAlert(error.ExceptionMessage, 'danger');
 			else
 				$scope.addAlert('Não foi possível adicionar a sub-categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	}

 	$scope.cancel = function(){
 		$scope.subcategory.Name = name;
 		$modalInstance.dismiss('cancel');    	
 	}

  });
