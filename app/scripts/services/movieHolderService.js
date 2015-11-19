'use strict';

angular.module('movieHolderService', [])
  .service('movieHolder', ['$window', function ($window) {

  var localStorage = $window.localStorage;
  var key = 'selectedMovie';

  return {
    save: function(movie) {
      var selectedMovie = movie;
      localStorage.setItem(key, JSON.stringify(selectedMovie));
    },

    get: function(){
      return JSON.parse(localStorage.getItem(key));
    },

    remove: function(){
      var selectedMovie = {};
      localStorage.setItem(key, JSON.stringify(selectedMovie));
    }
  };

}]);
