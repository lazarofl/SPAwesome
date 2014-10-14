'use strict';

describe('Controller: CategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var CategoriesCtrl,
    httpBackend,
    _Categories,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    _Categories = {};
    CategoriesCtrl = $controller('CategoriesCtrl', {
      $scope: scope,
      Categories: _Categories
    });
    httpBackend = $httpBackend;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(_Categories).not.toBe(null);
    expect(_Categories).not.toBe(undefined);
  });
});
