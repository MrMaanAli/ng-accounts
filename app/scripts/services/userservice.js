'use strict';

/**
 * @ngdoc service
 * @name accountsApp.UserService
 * @description
 * # UserService
 * Factory in the accountsApp.
 */
angular.module('accountsApp')
  .factory('UserService', function ($http, $q) {
    // Service logic
    // ...

    var users = [{name:"Usman Ali", id:1},{name:"Shah Fahad", id:2},{name:"Humam Nameer", id:3}];

    function filterResponse(defaults, userId) {
      defaults = angular.isArray(defaults) ? defaults : [defaults];

      return defaults.forEach(function(entry){
        if(entry.userId == userId)
            return entry;
      });
      //return defaults.concat(transform);
    }

    // Public API here
    return {
      getUsers: function () {
        return $http.get('../../data/users.json');
      },

      getUserAccounts: function (userId) {
        return $q(function(resolve,reject){

          $http.get('../../data/accounts.json')
            .success(function(response){
              response.forEach(function (userAccountsEntry) {
                if (userAccountsEntry.userId == userId) {
                    resolve(userAccountsEntry.accounts);
                }
              })
          }).error(function(reason){
              reject(reason);
            });


        });
      },

      getAccountTransactions: function (accountId) {
        return $q(function(resolve, reject) {

          $http.get('../../data/transactions.json').success(function (response) {
            response.forEach(function(accountTransactionsEntry){
              if ( accountTransactionsEntry.accountId == accountId ) {
                resolve(accountTransactionsEntry.transactions);
              }
            });

          }).error(function (reason) {
            reject(reason);
          });

        });

      },

      getAccountLatestTransaction: function (accountId) {
        return $q(function(resolve, reject) {

            $http.get('../../data/transactions.json').success(function (response) {
                response.forEach(function(accountTransactionsEntry){
                  if ( accountTransactionsEntry.accountId == accountId ) {
                      resolve(accountTransactionsEntry.transactions[accountTransactionsEntry.transactions.length - 1]);
                    }
                  });

            }).error(function (reason) {
                reject(reason);
            });

        });
      },

      removeUser: function(index){
        users.splice( index, 1 );
        return users;
      }
    };
  });
