'use strict';

angular.module('angularUiRouterIssueApp').controller('UserCtrl', function ($scope, $timeout, userInfo, userHandler, $state, $stateParams) {
  $scope.info = userInfo;
});
