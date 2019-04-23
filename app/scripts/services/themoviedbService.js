'use strict';

/**
 * @ngdoc service
 * @name fastshopApp.themoviedbService
 * @description
 * # themoviedbService
 * Factory in the fastshopApp.
 */
angular.module('fastshopApp')
  .constant('hostname', 'http://api.themoviedb.org/3')
  .constant('query_string', '?api_key=726c2fe10accffc8639e3217c4c80852&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  .service('themoviedbService', ['$resource', 'hostname', 'query_string', function ($resource, hostname, query_string) {
      this.listMovie = function listMovie() {
        return $resource(`${hostname}/discover/movie${query_string}`, null, {'update': { method: 'PUT'}});
      };

      this.listGenre = function listGenre() {
        return $resource(`${hostname}/genre/movie/list${query_string}`, null, {'update': { method: 'PUT'}});
      };
  }]);