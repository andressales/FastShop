'use strict';

describe('Service: themoviedb', function () {

  // load the service's module
  beforeEach(module('fastshopApp'));

  // instantiate service
  var themoviedb;
  beforeEach(inject(function (_themoviedb_) {
    themoviedb = _themoviedb_;
  }));

  it('should do something', function () {
    expect(!!themoviedb).toBe(true);
  });

});
