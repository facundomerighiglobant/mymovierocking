'use strict';
/*jshint sub:true*/

angular.module('movieCreatorService', [])
  .factory('Movie', [function () {
    function Movie(data) {
      this.title = data.title;
      this.overview = data.overview;
      this.posterPath = data['poster_path'];
    }
  return Movie;
}]);
