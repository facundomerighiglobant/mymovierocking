'use strict';

angular.module('mymovierockingApp')
  .controller('MovieDetailCtrl', ['$scope', 'movieHolder', '$location', 'Favorites', function ($scope, movieHolder, $location, Favorites) {
    var movie = movieHolder.get();
    var starFullClass = 'glyphicon glyphicon-star';
    var starEmptyClass = 'glyphicon glyphicon-star-empty';
    
    $scope.movie = movie;
    var imgUrl = 'http://image.tmdb.org/t/p/w500/'+ movie.posterPath +'&api_key=579989834308dc1b0309510990ad9246';
    $scope.imgUrl = imgUrl;

    $scope.changeView = function(view){
      $location.path(view);
      movieHolder.save(null);
    };

    $scope.starClass = function(movie) {
      if(Favorites.alreadyAdded(movie.title)) {
        return starFullClass;
      }
      else {
        return starEmptyClass;
      }
    };

    $scope.setFavorite = function(movie) {
      if(!Favorites.alreadyAdded(movie.title)) {
        console.log('Saved');
        Favorites.save(movie.title, movie);
      }
      else {
        console.log('Unsaved');
        Favorites.delete(movie.title);
      }
    };

  }]);
