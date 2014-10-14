'use strict';

/**
 * @ngdoc service
 * @name spawesomeApp.appConfig
 * @description
 * # appConfig
 * Factory in the spawesomeApp.
 */
angular.module('spawesomeApp')
  .factory('appConfig', function () {

    var apiUrl = 'http://localhost:1685/api';

    return {
      API_URL: function () {
        return apiUrl;
      }
    };
  });
