'use strict';

angular.module('angularUiRouterIssueApp')
  .controller('UsersCtrl', function ($scope, userHandler) {
    $scope.users = [
      userHandler.getBasicUserInfo('sagiv'),
      userHandler.getBasicUserInfo('maor')
    ];
  });
