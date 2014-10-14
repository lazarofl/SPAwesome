'use strict';

describe('Controller: CategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var CategoriesCtrl,
  httpBackend,
  Categories,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _Categories_) {
    scope = $rootScope.$new();
    Categories = _Categories_;
    CategoriesCtrl = $controller('CategoriesCtrl', {
      $scope: scope,
      Categories: _Categories_
    });
    httpBackend = $httpBackend;
  }));

  it('Serviço Categories não pode ser nulo ou undefined', function () {
    expect(Categories).not.toBe(null);
    expect(Categories).not.toBe(undefined);
  });

  it('Ao executar init() deve inserir as categorias no escopo "categories"', function () {
    //setup
    httpBackend.expectGET().respond(200,
     [ 
     {
      Id: 1,
      Name: 'Teste 1',
      Order: 1,
      Slug: 'teste-1'
    },
    {
      Id: 2,
      Name: 'Teste 2',
      Order: 2,
      Slug: 'teste-2'
    }
    ]
    );

    //act
    scope.init();
    httpBackend.flush();

    //expected
    expect(scope.categories.length).toBe(2);
  });

  it('Ao executar init() e não conseguir acessar a API deve ser registrado um erro', function () {
    //setup
    httpBackend.expectGET().respond(500, 'erro');

    scope.init();

    httpBackend.flush();

    //expected
    expect(scope.alerts.length).toBe(1);
  });

  it('Ao executar init() e não conseguir acessar a API deve ser registrado um erro', function () {
    //setup
    scope.name = 'categoria';
    httpBackend.expectPOST().respond(500, 'erro');

    //act
    scope.addCategory();
    httpBackend.flush();

    //expected
    expect(scope.alerts.length).toBe(1);
  });

  it('Ao remover uma categoria deve ser retirado da listagem a categoria correspondente e um alerta deve ser adicionado', function () {
    //setup
    scope.categories = [
      {Id: 1, Name: 'teste1', Order: 1},
      {Id: 2, Name: 'teste 2', Order: 2},
      {Id: 3, Name: 'teste 3', Order: 3},
      {Id: 4, Name: 'teste 4', Order: 4}
    ];

    httpBackend.expectDELETE().respond(200, {});
    spyOn(window, 'confirm').andReturn(true);

    //act
    scope.remove(2); //{Id: 3, Name: 'teste 3', Order: 3}
    httpBackend.flush();

    //expected
    expect(scope.categories.length).toBe(3);
    expect(scope.alerts.length).toBe(1);
  });

});
