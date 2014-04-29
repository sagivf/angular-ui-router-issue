'use strict';


angular.module('angularUiRouterIssueApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .state('users.user', {
        url: '/:userId',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        resolve: {
          userInfo: ['userHandler', '$stateParams', function (userHandler, $stateParams) {
            return userHandler.getAdvancedUserInfo($stateParams.userId);
          }]
        }
      })
  })
  .run(function ($rootScope, userHandler) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      $rootScope.loading = true;
      if(toParams.userId) {
        var user = userHandler.getBasicUserInfo(toParams.userId);
        $rootScope.name = user.name;
        $rootScope.image = user.image;
      }
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      $rootScope.loading = false;
    });

    $rootScope.$on('$stateChangeError', function () {
      $rootScope.loading = false;
    });
  });




