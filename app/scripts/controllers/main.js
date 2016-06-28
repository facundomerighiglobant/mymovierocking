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
    movies.success(function(data) {
      $scope.allMovies = data.results;
    });
    $scope.movieDetail = function() {
    	let path = $location.path(['/movie-detail']);
    };
  }]);
