(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name accountsApp.controller:AccountsCtrl
   * @description
   * # AccountsCtrl
   * Controller of the accountsApp
   */
  angular.module('accountsApp')
    .controller('AccountsCtrl', function ($scope, $routeParams, $modal, UserService) {

      $scope.userId = $routeParams.userId;

      UserService.getUserAccounts($scope.userId).then(function (response) {
        $scope.accounts = response;
      }, function(reason){});

      $scope.deleteAccount = function (index) {
        var modalInstance = $modal.open({
          templateUrl: 'views/modals/deleteModal.html',
          controller: 'DeleteModalCtrl'
        });

        modalInstance.result.then(function () {
          $scope.accounts = UserService.splice(index,1);
        }, function () {});
      };

      $scope.viewLastTransaction = function (index) {
        var accountId = $scope.accounts[index].accountId
        UserService.getAccountLatestTransaction(accountId).then(function (response) {
          var modalInstance = $modal.open({
            templateUrl: 'views/modals/viewLastTransactionModal.html',
            controller: 'ViewLastTransactionModal',
            resolve: { items: function() {return response } }

          });
        }, function(reason) {});
      };

    });
})();

