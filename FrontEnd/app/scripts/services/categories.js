'use strict';

/**
 * @ngdoc service
 * @name spawesomeApp.Categories
 * @description
 * # Categories
 * Factory in the spawesomeApp.
 */
angular.module('spawesomeApp')
  .factory('Categories', function ($http, appConfig) {
    
    var urlBase = appConfig + '/Category';
    var dataFactory = {};

    dataFactory.getCategories = function () {
        return $http.get(urlBase);
    };

    dataFactory.getCategory = function (id) {
        if(id == null)
          throw 'Id não informado';
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCategory = function (category) {
        if(category == null)
          throw 'category não informada';
        return $http.post(urlBase, category);
    };

    dataFactory.updateCategory = function (category) {
        if(category == null)
          throw 'category não informada';
        return $http.put(urlBase + '/' + category.Id, category)
    };

    dataFactory.deleteCategory = function (id) {
        if(id == null)
          throw 'Id não informado';
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getSubCategories = function (id) {
        if(id == null)
          throw 'Id não informado';
        return $http.get(urlBase + '/' + id + '/SubCategories');
    };

    return dataFactory;

  });
