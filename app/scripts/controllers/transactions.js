(function(){
  'use strict';
  /**
   * @ngdoc function
   * @name accountsApp.controller:TransactionsCtrl
   * @description
   * # TransactionsCtrl
   * Controller of the accountsApp
   */
  angular.module('accountsApp')
    .controller('TransactionsCtrl', function ($scope, $routeParams, $modal, UserService) {

      $scope.accountId = $routeParams.accountId;

      UserService.getAccountTransactions($scope.accountId).then(function(response){
        $scope.transactions = response;
      }, function(reason){});

      $scope.deleteTransaction = function(index){

        var modalInstance = $modal.open({
          templateUrl: 'views/modals/deleteModal.html',
          controller: 'DeleteModalCtrl'
        });

        modalInstance.result.then(function () {
          $scope.transactions.splice(index,1);
        }, function () {});

      };

      $scope.addTransaction = function(){

        var modalInstance = $modal.open({
          templateUrl: 'views/modals/addEditTransactionModal.html',
          controller: 'AddEditTransactionCtrl',
          resolve: { items: function () {} }
        });

        modalInstance.result.then(function (newTrans) {
          var lastIndex = $scope.transactions.length - 1;
          newTrans.transactionId = 1 + Number($scope.transactions[lastIndex].transactionId);
          $scope.transactions.push(newTrans);
        }, function () {});

      };

      $scope.editTransaction = function(index){

        var modalInstance = $modal.open({
          templateUrl: 'views/modals/addEditTransactionModal.html',
          controller: 'AddEditTransactionCtrl',
          resolve: {  items: function () {  return $scope.transactions[index]; }
          }
        });

        modalInstance.result.then(function (editTrans) {
          $scope.transactions[index] = editTrans;
        }, function () {});

      };

    });
  })();
