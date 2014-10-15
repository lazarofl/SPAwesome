'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the spawesomeApp
 */
 angular.module('spawesomeApp')
 .controller('HeaderCtrl', function ($scope, $location) {
 	$scope.menu = [
 	{name: 'Categorias', location: '/categorias', visible: true},
 	{name: 'Login', location: '/login', visible: true},
 	{name: 'Logout', location: '/logout', visible: false}
 	];

	$scope.go = function ( path ) {
 		$location.path( path );
 	};

 	$scope.isActive = function (viewLocation) { 
 		console.log(viewLocation);
 		console.log($location.path());

        return viewLocation === $location.path();
    };
 });
