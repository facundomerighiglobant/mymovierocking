/**
 * @ngdoc function
 * @name mymovierockingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovierockingApp
 */
angular.module('mymovierockingApp')
  .controller('MainCtrl', ['$scope', 'movies', '$location', function($scope, movies, $location) {
    
    $scope.test = 'testin';
    movies.then(function(resp) {
      $scope.allMovies = resp.data.results;
    });
    $scope.movieDetail = function(movie) {
    	$scope.movie = movie;
    	$location.path('/movie-detail');
    };
  }]);
