'use strict';

/**
 * @ngdoc function
 * @name spawesomeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the spawesomeApp
 */
angular.module('spawesomeApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.menu = [
      {name: 'Categorias', location: '/#categorias', selected: true, visible: true},
      {name: 'Login', location: '/#login', selected: false, visible: true},
      {name: 'Logout', location: '/#logout', selected: false, visible: false}
    ];
  });
