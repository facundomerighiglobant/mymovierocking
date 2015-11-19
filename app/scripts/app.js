'use strict';

/**
 * @ngdoc overview
 * @name mymovierockingApp
 * @description
 * # mymovierockingApp
 *
 * Main module of the application.
 */
angular
  .module('mymovierockingApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'popularMoviesService',
    'movieCreatorService',
    'movieHolderService',
    'favoriteService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/popular.html',
        controller: 'MoviesCtrl',
        controllerAs: 'moviesCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'MovieDetailCtrl',
        controllerAs: 'movieDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
