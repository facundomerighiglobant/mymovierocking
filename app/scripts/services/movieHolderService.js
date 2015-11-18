'use strict';

angular.module('movieHolderService', [])
  .service('movieHolder', function() {
  var selectedMovie = null;

  var selectMovie = function(movie) {
      selectedMovie = movie;
  };

  var getSelectedMovie = function(){
      return selectedMovie;
  };

  return {
    selectMovie: selectMovie,
    getSelectedMovie: getSelectedMovie
  };

});