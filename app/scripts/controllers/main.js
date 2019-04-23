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
      $scope.percent = function percent(rate){ return parseInt(rate * 10); };
      $scope.options = {
        animate:{
            duration:2000,
            enabled:true
        },
        barColor:'#21d07a',
        trackColor: '#081c22',
        scaleColor:false,
        lineWidth:5,
        size:22,
        lineCap:'circle'
      };

      themoviedbService.listGenre().get()
      .$promise.then(
        function(response){
          console.log(response);
        },
        function(response){
          $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
        }
      );

      themoviedbService.listMovie().get()
      .$promise.then(
        function(response){
          $scope.movies = response.results;
        },
        function(response){
          $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
        }
      );
    }
  ]);
