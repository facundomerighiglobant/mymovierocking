'use strict';

angular.module('mymovierockingApp')
  .controller('MoviesCtrl', ['$scope', 
    'PopularMovies', 
    'Movie', 
    '$location', 
    'movieHolder', 
    function ($scope, PopularMovies, Movie, $location, movieHolder) {

    PopularMovies.query(function(data){ //callback
      var moviesData = data.results;
      $scope.movies = [];
      for(var i=0; i<moviesData.length; i++) {
        var newMovie = new Movie(moviesData[i]);
        $scope.movies.push(newMovie);
      }
    });

    $scope.changeView = function(view, movie){
      $location.path(view); // path not hash
      movieHolder.selectMovie(movie);
    };

  }]);
