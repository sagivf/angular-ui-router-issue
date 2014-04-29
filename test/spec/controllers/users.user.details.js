'use strict';

describe('Controller: UsersUserDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularUiRouterIssueApp'));

  var UsersUserDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersUserDetailsCtrl = $controller('UsersUserDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
