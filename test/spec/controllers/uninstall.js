'use strict';

describe('Controller: UninstallCtrl', function () {

  // load the controller's module
  beforeEach(module('angularUiRouterIssueApp'));

  var UninstallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UninstallCtrl = $controller('UninstallCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
