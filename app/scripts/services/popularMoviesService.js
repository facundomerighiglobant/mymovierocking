'use strict';

angular.module('popularMoviesService', ['ngResource'])
.factory('PopularMovies', ['$resource',
  function ($resource){
      return $resource('http://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&page=1&api_key=579989834308dc1b0309510990ad9246', {}, {
        query: {method:'GET'}
      });
  }]);