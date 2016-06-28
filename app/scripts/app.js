(function (angular, undefined) { 'use strict';
angular
  .module('mymovierockingApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',        
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  }(angular));
