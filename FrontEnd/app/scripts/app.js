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
      .when('/', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
