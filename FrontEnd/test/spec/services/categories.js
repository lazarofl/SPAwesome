'use strict';

describe('Service: Categories', function () {

  // load the service's module
  beforeEach(module('spawesomeApp'));

  // instantiate service
  var Categories,
    appConfig,
    httpBackend;
  beforeEach(inject(function (_Categories_, _appConfig_, $httpBackend) {
    Categories = _Categories_;
    appConfig = _appConfig_;
    httpBackend = $httpBackend;
  }));

  it('should do something', function () {
    expect(!!Categories).toBe(true);
  });

  it('Ao chamar getCategories é realizado um request do tipo GET', function () {
    httpBackend.expectGET().respond(200,{});
    Categories.getCategories();
    httpBackend.flush();
  });

  it('Ao chamar getCategory é realizado um request do tipo GET', function () {
    httpBackend.expectGET().respond(200,{});
    Categories.getCategory(1);
    httpBackend.flush();
  });

  it('Ao chamar getCategory sem parâmetro é retornado um erro', function () {
    expect( function(){ Categories.getCategory() } ).toThrow();
  });



});
