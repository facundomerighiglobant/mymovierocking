(function (angular, undefined) { 'use strict';  

  angular.module('mymovierockingApp')
    .controller('MainCtrl', function($scope, moviesSrv, $location ){
    
      var movies = moviesSrv.getMovies();      
      if ( movies === undefined) {
          var moviesArray = [];
          var promise = moviesSrv.getFromApi();
          promise.$promise.then(function (infoFromApi){   
              infoFromApi.results.forEach(function(elem){
                moviesArray.push(new Movie(elem));
              });
              $scope.movies = moviesArray;
              moviesSrv.setMovies(moviesArray);
          }, function(){
              console.log('Error');
          });
      }else{
        $scope.movies = movies;
      }

      $scope.changeToDetailView = function(movie) {
          moviesSrv.setCurrentMovieDetail(movie);
          $location.path('/movie/' + movie.id);
       };

    });
}(angular));