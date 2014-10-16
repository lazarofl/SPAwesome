'use strict';

describe('Controller: ModalEditSubCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));
  beforeEach(module('ui.bootstrap'));

  var ModalEditSubCategoryCtrl,
  subcategory,
  modalInstanceFake,
  httpBackend,
  name,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _subcategories_) {
    subcategory = {Id: 1, Name: 'teste', Order: 1, Slug: 'teste'};
    name = 'teste';
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    modalInstanceFake = {
      open: function(){},
      close: function(){},
      dismiss: function(){}
    };
    ModalEditSubCategoryCtrl = $controller('ModalEditSubCategoryCtrl', {
      $scope: scope,
      $modalInstance: modalInstanceFake,
      SubCategories: _subcategories_,
      subcategory: subcategory,
      name: name
    });
  }));

  it('Sub sub-categoria nao pode ser nula no teste', function () {
    expect(scope.subcategory).not.toBe(null);
  });

  it('Ao cancelar a edição da sub-categoria o nome antigo deve ser preservado', function () {
    scope.subcategory.Name = 'teste 12345';

    scope.cancel();

    expect(scope.subcategory.Name).toBe(name);
  });

  it('Ao editar a sub-categoria deve ser requisitado um PUT na API', function () {
    scope.subcategory.Name = 'teste 12345';

    httpBackend.expectPUT().respond(200, {});
    scope.edit();
    httpBackend.flush()

  });

});
