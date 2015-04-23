'use strict';

/**
 * @ngdoc function
 * @name accountsApp.controller:DashCtrl
 * @description
 * # DashCtrl
 * Controller of the accountsApp
 */
angular.module('accountsApp')
  .controller('DashCtrl', function ($scope, UserService) {

     UserService.getUsers().success(function (response){
      $scope.users  =  response;
     });

    $scope.userClicked = function(index){
        $scope.users = UserService.removeUser(index);
    }
  });
