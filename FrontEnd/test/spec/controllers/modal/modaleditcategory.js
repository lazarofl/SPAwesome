'use strict';

describe('Controller: ModalEditCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));
  beforeEach(module('ui.bootstrap'));

  var ModalEditCategoryCtrl,
  category,
  modalInstanceFake,
  httpBackend,
  name,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _Categories_) {
    category = {Id: 1, Name: 'teste', Order: 1, Slug: 'teste'};
    name = 'teste';
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    modalInstanceFake = {
      open: function(){},
      close: function(){},
      dismiss: function(){}
    };
    ModalEditCategoryCtrl = $controller('ModalEditCategoryCtrl', {
      $scope: scope,
      $modalInstance: modalInstanceFake,
      Categories: _Categories_,
      category: category,
      name: name
    });
  }));

  it('Categoria nao pode ser nula no teste', function () {
    expect(scope.category).not.toBe(null);
  });

  it('Ao cancelar a edição da categoria o nome antigo deve ser preservado', function () {
    scope.category.Name = 'teste 12345';

    scope.cancel();

    expect(scope.category.Name).toBe(name);
  });

  it('Ao editar a categoria deve ser requisitado um PUT na API', function () {
    scope.category.Name = 'teste 12345';

    httpBackend.expectPUT().respond(200, {});
    scope.edit();
    httpBackend.flush()

  });

});
