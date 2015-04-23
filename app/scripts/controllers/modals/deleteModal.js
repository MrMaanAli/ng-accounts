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
    .controller('DeleteModalCtrl', function ($scope, $modalInstance) {

      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });

})();
