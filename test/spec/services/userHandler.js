'use strict';

describe('Service: Userhandler', function () {

  // load the service's module
  beforeEach(module('AngularuirouterissueApp'));

  // instantiate service
  var Userhandler;
  beforeEach(inject(function (_Userhandler_) {
    Userhandler = _Userhandler_;
  }));

  it('should do something', function () {
    expect(!!Userhandler).toBe(true);
  });

});
