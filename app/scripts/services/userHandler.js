'use strict';

angular.module('angularUiRouterIssueApp')
  .factory('userHandler', function ($timeout) {
    var userData = {
      maor: {
        basic: {
          id: 'maor',
          name: 'Maor Frankel',
          image: 'images/maor.jpg'
        },
        advanced: {
          id: 'maor',
          dateOfBirth: '17/11/83',
          works: 'Sysmic',
          town: 'Hadera',
          dog: 'Bell'
        }
      },
      sagiv: {
        basic: {
          id: 'sagiv',
          name: 'Sagiv Frankel',
          image: 'images/sagiv.jpg'
        },
        advanced: {
          id: 'sagiv',
          dateOfBirth: '29/11/81',
          works: 'Outbrain',
          town: 'Tel Aviv',
          dog: 'kC'
        }
      }
    };

    return {
      getBasicUserInfo: function(userId){
        return userData[userId].basic;
      },
      getAdvancedUserInfo: function(userId){
        //return a promise
        return $timeout(function(){
          return userData[userId].advanced;
        }, 5000);
      }
    }
  });
