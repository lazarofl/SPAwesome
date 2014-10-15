'use strict';

describe('Service: subcategories', function () {

  // load the service's module
  beforeEach(module('spawesomeApp'));

  // instantiate service
  var subcategories,
    appConfig,
    httpBackend;

  beforeEach(inject(function (_subcategories_, _appConfig_, $httpBackend) {
    subcategories = _subcategories_;
    appConfig = _appConfig_;
    httpBackend = $httpBackend;
  }));

  it('should do something', function () {
    expect(!!subcategories).toBe(true);
  });

  it('Ao chamar getSubCategories é realizado um request do tipo GET', function () {
    httpBackend.expectGET().respond(200,{});
    subcategories.getSubCategories();
    httpBackend.flush();
  });

  it('Ao chamar getSubCategory é realizado um request do tipo GET', function () {
    httpBackend.expectGET().respond(200,{});
    subcategories.getSubCategory(1);
    httpBackend.flush();
  });

  it('Ao chamar getSubCategory sem parâmetro é retornado um erro', function () {
    expect( function(){ subcategories.getCategory() } ).toThrow();
  });

});
