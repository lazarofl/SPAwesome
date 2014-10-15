'use strict';

/**
 * @ngdoc service
 * @name spawesomeApp.subcategories
 * @description
 * # subcategories
 * Factory in the spawesomeApp.
 */
angular.module('spawesomeApp')
  .factory('subcategories', function ($http, appConfig) {

    var slug = '';
    var urlBase = appConfig.API_URL() + '/' + slug + '/SubCategory';
    var dataFactory = {};

    dataFactory.setCategory = function (category) {
      slug = category.Slug;
    };

    dataFactory.getSubCategories = function () {
      return $http.get(urlBase);
    };

    dataFactory.getSubCategory = function (id) {
      if(id == null)
        throw 'Id não informado';
      return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertSubCategory = function (subcategory) {
      if(subcategory == null)
        throw 'sub-categoria não informada';
      return $http.post(urlBase, subcategory);
    };

    dataFactory.updateSubCategory = function (subcategory) {
      if(subcategory == null)
        throw 'sub-categoria não informada';
      return $http.put(urlBase + '/' + subcategory.Id, subcategory)
    };

    dataFactory.deleteCategory = function (id) {
      if(id == null)
        throw 'Id não informado';
      return $http.delete(urlBase + '/' + id);
    };

    return dataFactory;

  });
