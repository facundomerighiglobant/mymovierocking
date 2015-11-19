'use strict';

angular.module('mymovierockingApp')
  .controller('MovieDetailCtrl', ['$scope', 'movieHolder', '$location', 'Favorites', function ($scope, movieHolder, $location, Favorites) {
    var movie = movieHolder.getSelectedMovie();
    $scope.movie = movie;
    var imgUrl = 'http://image.tmdb.org/t/p/w500/'+ movie.posterPath +'&api_key=579989834308dc1b0309510990ad9246';
    $scope.imgUrl = imgUrl;

    $scope.changeView = function(view){
      $location.path(view);
      movieHolder.selectMovie(null);
    };

    $scope.setFavorite = function(movie) {
      if(! Favorites.alreadyAdded(movie.title)) {
        Favorites.save(movie.title, movie);
        console.log('saved');
      }
      else {
        console.log('already saved');
      }
    };

  }]);
