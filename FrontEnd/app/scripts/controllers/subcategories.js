'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:SubcategoriesCtrl
 * @description
 * # SubcategoriesCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('SubcategoriesCtrl', function ($scope, $location, $routeParams, Categories, subcategories) {

 	$scope.subcategories;
 	$scope.alerts = [];
 	$scope.loading = false;
 	$scope.showadd = false;
 	$scope.category;
 	$scope.name = '';

 	$scope.go = function ( path ) {
 		$location.path( path );
 	};

 	$scope.loadCategory = function(slug){
 		Categories
 		.getCategoryBySlug(slug)
 		.success(function(data){
 			$scope.category = data;
 			$scope.loadSubCategories(slug);
 		})
 		.error(function(error){
 			if(!!error)
 				$scope.addAlert(error.ExceptionMessage, 'danger');
 			else
 				$scope.addAlert('Não foi possível adicionar a categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	};

 	$scope.loadSubCategories = function(slug){
 		subcategories.setCategory(slug);

 		subcategories
 		.getSubCategories()
 		.success(function(data){
 			$scope.subcategories = data;
 			$scope.loading = false;
 		}).
 		error(function(error){
 			if(!!error)
 				$scope.addAlert(error.ExceptionMessage, 'danger');
 			else
 				$scope.addAlert('Não foi possível adicionar a categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	};

 	$scope.init = function(){
 		$scope.loading = true;
 		$scope.slug = $routeParams.category;
 		
 		$scope.loadCategory($scope.slug);
 	};

 	$scope.addAlert = function(message, type) {
 		$scope.alerts.push({type: type, msg: message});
 	};

 	$scope.closeAlert = function(index) {
 		$scope.alerts.splice(index, 1);
 	};

 	$scope.init();

 	$scope.addSubCategory = function(){
 		$scope.loading = true;

 		var subcategory = {
 			Name: $scope.name
 		};

 		subcategories
 		.insertSubCategory(subcategory)
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
 				$scope.addAlert('Não foi possível adicionar a sub-categoria, verifique a disponibilidade do serviço', 'danger');
 			$scope.loading = false;
 		});
 	};

 	$scope.remove = function(index){
 		
 		if(confirm('Deseja realmente remover a sub-categoria "' + $scope.subcategories[index].Name + '"?'))
 		{

 			$scope.loading = true;

 			var toremove = $scope.subcategories[index];

 			subcategories
 			.deleteSubCategory(toremove.Id)
 			.success(function(data){
 				$scope.addAlert('Sub-categoria removida: ' + toremove.Name, 'success');
 				$scope.subcategories.splice(index, 1);
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

 	$scope.editSubCategoryModal = function (index) {
 		var modalInstance = $modal.open({
 			templateUrl: 'editSubCategoryModalContent.html',
 			controller: 'ModalEditSubCategoryCtrl',
 			size: 'lg',
 			resolve: {
 				subcategory: function () {
 					return $scope.subcategories[index];
 				},
 				name: function(){
 					return $scope.subcategories[index].Name;
 				}
 			}
 		});

 		modalInstance.result.then(function (category) {
 			$scope.addAlert('Sub-categoria alterada: ' + category.Name,'success');
 		}, function () {

 		});
 	};


 });
