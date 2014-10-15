'use strict';

describe('Controller: SubcategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var SubcategoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubcategoriesCtrl = $controller('SubcategoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
