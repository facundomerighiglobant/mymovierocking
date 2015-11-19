'use strict';

angular.module('favoriteService', [])
.factory('Favorites', ['$window',
  function ($window) {

    var localStorage = $window.localStorage;
    var key = 'myFavoriteMovies';
    var myMovies = [];
    localStorage.setItem(key, JSON.stringify(myMovies));

  return {
    save: function(movie) {
      var movies = [];
      movies = JSON.parse(localStorage.getItem(key));
      movies.push(movie);
      localStorage.setItem(key, JSON.stringify(movies));
    },

    alreadyAdded: function(title) {
      var movies = [];
      movies = JSON.parse(localStorage.getItem(key));
      for(var i=0; i<movies.length; i++) {
        if(movies[i].title === title) {
          return true;
        }
      }
      return false;
    },

    delete: function(title) {
      var movies = [];
      movies = JSON.parse(localStorage.getItem(key));
      for (var i =0; i < movies.length; i++){
        if (movies[i].title === title) {
          movies.splice(i,1);
          localStorage.setItem(key, JSON.stringify(movies));
          break;
        }
      }
    }

  };

}]);
