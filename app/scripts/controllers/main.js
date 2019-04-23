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
            duration:3000,
            enabled:true
        },
        barColor:'#21d07a',
        trackColor: '#081c22',
        scaleColor:false,
        lineWidth:3,
        size:22,
        lineCap:'circle'
    };
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
