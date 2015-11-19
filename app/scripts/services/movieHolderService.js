'use strict';

angular.module('movieHolderService', [])
  .service('movieHolder', function() {
  var selectedMovie = null;

  var save = function(movie) {
      selectedMovie = movie;
  };

  var get = function(){
      return selectedMovie;
  };

  return {
    save: save,
    get: get
  };

});
