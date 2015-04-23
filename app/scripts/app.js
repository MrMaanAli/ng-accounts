'use strict';

/**
 * @ngdoc overview
 * @name accountsApp
 * @description
 * # accountsApp
 *
 * Main module of the application.
 */
angular
  .module('accountsApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .when('/:userId/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl'
      })
      .when('/:accountId/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'TransactionsCtrl'
      })
      .otherwise({
        redirectTo: '/users'
      });
  });
