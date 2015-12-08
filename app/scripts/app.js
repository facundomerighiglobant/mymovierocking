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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detailedView', {
        templateUrl: 'views/detailedView.html',
        controller: 'detailedViewCtrl',
        controllerAs: 'detailedView'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 