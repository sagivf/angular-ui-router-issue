'use strict';

describe('Service: Userinfo', function () {

  // load the service's module
  beforeEach(module('AngularuirouterissueApp'));

  // instantiate service
  var Userinfo;
  beforeEach(inject(function (_Userinfo_) {
    Userinfo = _Userinfo_;
  }));

  it('should do something', function () {
    expect(!!Userinfo).toBe(true);
  });

});
