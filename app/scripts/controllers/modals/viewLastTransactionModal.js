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
    .controller('ViewLastTransactionModal', function ($scope, $modalInstance, items) {

      $scope.transaction = items;

      $scope.ok = function () {
        $modalInstance.close();
      };

    });

})();
