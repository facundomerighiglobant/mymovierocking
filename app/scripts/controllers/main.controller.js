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

  $scope.getMovies = function() {
    MovieSrv.getMovies().then(function(movies) {
      console.log(movies);
      return movies;
    })
  };

  $scope.getMovies();
  
}]);
