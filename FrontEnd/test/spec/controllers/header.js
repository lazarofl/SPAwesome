'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('spawesomeApp'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
    });
  }));

  it('menu principal deve conter 3 itens', function () {
    expect(scope.menu.length).toBe(3);
  });

  it('menu principal deve iniciar com o Logout com a propriedade visible: false', function () {
    var expected_visible = false;
    var expected_name = 'Logout';

    var item = scope.menu[2];

    expect(item.visible).toBe(expected_visible);
    expect(item.name).toBe(expected_name);
  });

});
