'use strict';

describe('Controller: SubcategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var SubcategoriesCtrl,
    routeParams,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $routeParams) {
    scope = $rootScope.$new();
    routeParams = $routeParams;
    routeParams.category = 'fake-category';
    SubcategoriesCtrl = $controller('SubcategoriesCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });
  }));

  it('Controller de sub-categorias sempre necessita de uma slug para obter a categoria correspondente', function () {
    expect(scope.slug).toBe('fake-category');
  });
  
});
