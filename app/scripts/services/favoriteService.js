'use strict';

angular.module('favoriteService', [])
.factory('Favorites', ['$window',
  function ($window) {

  return {
    save: function(key, movie) {
      $window.localStorage[key] = JSON.stringify(movie);
    },

    alreadyAdded: function(title) {
      for(var key in $window.localStorage) {
        if(key === title) {
          return true;
        }
      }
      return false;
    },

    delete: function(key) {
      $window.localStorage.removeItem(key);
    }
  };

}]);
