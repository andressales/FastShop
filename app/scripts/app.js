'use strict';

/**
 * @ngdoc overview
 * @name fastshopApp
 * @description
 * # fastshopApp
 *
 * Main module of the application.
 */
angular
  .module('fastshopApp', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
