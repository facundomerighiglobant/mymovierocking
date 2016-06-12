'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovierockingApp
 */
var app = angular.module('mymovierockingApp');

app.controller('MainCtrl',['$scope', 'MovieSrv', function ($scope, MovieSrv) {

  MovieSrv.init();

  MovieSrv.getMovies(function(movies) {
    $scope.movies = movies;
  });
  
}]);
