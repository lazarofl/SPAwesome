'use strict';

describe('Controller: SubcategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var SubcategoriesCtrl,
  subcategories,
  Categories,
  httpBackend,
  routeParams,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $routeParams, $httpBackend, _Categories_, _subcategories_) {
    scope = $rootScope.$new();
    routeParams = $routeParams;
    routeParams.category = 'fake-category';
    subcategories = _subcategories_;
    Categories = _Categories_;
    SubcategoriesCtrl = $controller('SubcategoriesCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      subcategories: _subcategories_,
      Categories: _Categories_
    });
    httpBackend = $httpBackend;
  }));

  it('Controller de sub-categorias sempre necessita de uma slug para obter a categoria correspondente', function () {
    expect(scope.slug).toBe('fake-category');
  });

  it('Controller de sub-categorias sempre necessita de uma slug para obter a categoria correspondente', function () {
    expect(scope.slug).toBe('fake-category');
  });

  it('Serviço subcategories não pode ser nulo ou undefined', function () {
    expect(subcategories).not.toBe(null);
    expect(subcategories).not.toBe(undefined);
  });

  it('Serviço Categories não pode ser nulo ou undefined', function () {
    expect(Categories).not.toBe(null);
    expect(Categories).not.toBe(undefined);
  });


  
});
