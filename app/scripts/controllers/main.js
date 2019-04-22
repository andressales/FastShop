'use strict';

/**
 * @ngdoc function
 * @name fastshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fastshopApp
 */
angular.module('fastshopApp')
  .controller('MainCtrl', [
    '$scope', 
    'themoviedbService', 
    function ($scope, themoviedbService) {
      $scope.movies = [];
      themoviedbService.listMovie().get()
      .$promise.then(
        function(response){
          $scope.movies = response.results;
        },
        function(response){
          scope.message = 'Error: ' + response.status + ' ' + response.statusText;
        }
      );
    }
  ]);
