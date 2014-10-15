'use strict';

/**
 * @ngdoc overview
 * @name spawesomeApp
 * @description
 * # spawesomeApp
 *
 * Main module of the application.
 */
angular
  .module('spawesomeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/categorias', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .when('/:category/subcategorias', {
        templateUrl: 'views/subcategories.html',
        controller: 'SubcategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/categorias'
      });
  });
