'use strict';

/**
 * @ngdoc service
 * @name spawesomeApp.httpInterceptor
 * @description
 * # httpInterceptor
 * Factory in the spawesomeApp.
 */
angular.module('spawesomeApp')
  .factory('httpInterceptor', function ($q, $window, $location) {
    return function (promise) {
      var success = function (response) {
          return response;
      };

      var error = function (response) {
          if (response.status === 401) {
              $location.url('/login');
          }

          return $q.reject(response);
      };

      return promise.then(success, error);
    };
  });
