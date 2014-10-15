	'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('CategoriesCtrl', function ($scope, $log, $modal, Categories)
 {
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

 	$scope.editCategoryModal = function (index) {
 		var modalInstance = $modal.open({
 			templateUrl: 'editCategoryModalContent.html',
 			controller: 'ModalEditCategoryCtrl',
 			size: 'lg',
 			resolve: {
 				category: function () {
 					return $scope.categories[index];
 				},
 				name: function(){
 					return $scope.categories[index].Name;
 				}
 			}
 		});

 		modalInstance.result.then(function (category) {
 			$scope.addAlert('Categoria altera: "' + category.Name + '"','success');
 		}, function () {

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
 			if(!!error)
 				$scope.addAlert(error.ExceptionMessage, 'danger');
 			else
 				$scope.addAlert('Não foi possível adicionar a categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	};

 	$scope.remove = function(index){
 		
 		if(confirm('Deseja realmente remover a categoria "' + $scope.categories[index].Name + '"?'))
 		{

 			$scope.loading = true;

 			var toremove = $scope.categories[index];

 			Categories
 			.deleteCategory(toremove.Id)
 			.success(function(data){
 				$scope.addAlert(toremove.Name + ' removida com sucesso','success');
 				$scope.categories.splice(index, 1);
 				$scope.loading = false;
 			}).
 			error(function(error){
 				if(!!error)
 					$scope.addAlert(error.ExceptionMessage, 'danger');
 				else
 					$scope.addAlert('Não foi possível remover a categoria, verifique a disponibilidade do serviço', 'danger');
 				$scope.loading = false;
 			});
 		}

 	};


 });
