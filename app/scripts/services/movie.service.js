'use strict';

var app = angular.module('mymovierockingApp');

app.service('MovieSrv', ['$http', function($http) {
  var movies;

  this.init = function() {
    var url = 'http://api.themoviedb.org/3/movie/upcoming?api_key=579989834308dc1b0309510990ad9246';

    movies = $http({method: "GET", url: url}).then(function(reponse) {
      return reponse.data.results;
    })
  };

  this.getMovies = function(succes) {
    movies.then(function(movies) {
      console.log(movies);
      var movieList = [];

      for(var i = 0; i < movies.length; i++) {
        movieList[i] = new Movie(movies[i]);
      }

      succes(movieList);
    })
  };

}]);