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
    .controller('AddEditTransactionCtrl', function ($scope, $modalInstance, $filter, items) {

      $scope.transaction = items;

     function initalizeModal() {
        if ($scope.transaction !== undefined) {
          $scope.dt = $scope.transaction.date;
          $scope.transactionType = $scope.transaction.type;
          $scope.transactionAmount = $scope.transaction.amount;
        }
        else {
          $scope.transaction = {};
          $scope.dt = "";
          $scope.transactionType = "credit";
          $scope.transactionAmount = "";
        }
      };

      initalizeModal();

      $scope.format = 'MM/dd/yyyy';

      $scope.clear = function () {
        $scope.dt = null;
      };

      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.ok = function () {
        $scope.transaction.amount = $scope.transactionAmount;
        $scope.transaction.type = $scope.transactionType;
        $scope.transaction.date = $filter('date')($scope.dt, $scope.format);

        $modalInstance.close($scope.transaction);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });

})();
