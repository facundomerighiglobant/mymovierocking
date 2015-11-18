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
    'movieHolderService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'MoviesCtrl',
        controllerAs: 'moviesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
