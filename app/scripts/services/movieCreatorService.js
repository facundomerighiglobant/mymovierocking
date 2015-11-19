'use strict';
/*jshint sub:true*/

angular.module('movieCreatorService', [])
  .factory('Movie', [function () {
    function Movie(data) {
      this.title = data.title;
      this.overview = data.overview;
      this.imgUrl = 'http://image.tmdb.org/t/p/w500/'+ data['poster_path'] +'&api_key=579989834308dc1b0309510990ad9246';
    }
  return Movie;
}]);
