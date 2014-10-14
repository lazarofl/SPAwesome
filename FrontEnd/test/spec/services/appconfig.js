'use strict';

describe('Service: appConfig', function () {

  // load the service's module
  beforeEach(module('spawesomeApp'));

  // instantiate service
  var appConfig;
  beforeEach(inject(function (_appConfig_) {
    appConfig = _appConfig_;
  }));

  it('appConfig não deve ser nula', function () {
    expect(!!appConfig).toBe(true);
  });

  it('Deve retornar o endereço da API', function () {
    expect(appConfig.API_URL).not.toBe(null);
  });

});
