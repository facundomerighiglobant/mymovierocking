'use strict';

/**
 * @ngdoc overview
 * @name mymovierockingApp
 * @description
 * # mymovierockingApp
 *
 * Service of the application.
 */
var module = angular.module('mymovierockingApp');
module.service('MovieService',['$http',function($http){
    this.getMovies = function(getPeliculasRecientesSuccess,getPeliculasRecientesError){ 
      $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=579989834308dc1b0309510990ad9246")
          .then(function(response){
            var movies = [];
            for (var i = 0; i < response.data.results.length; i++) {
                movies[i] = new Movie(response.data.results[i]);
            };
            getPeliculasRecientesSuccess(movies);
          },getPeliculasRecientesError);
    };
    this.isFav = function(movie){
          var favData = localStorage["favs"] || "[]";
          var localFavs = JSON.parse(favData);
          return localFavs.indexOf(movie.attributes.id)!=-1;
    }
    this.saveMovie = function(movie){
        var stringifiedMovie = JSON.stringify(movie);
        localStorage.setItem("selMovie", stringifiedMovie);
    };
    this.getSavedMovie = function(){
        var movieData = JSON.parse(localStorage.getItem("selMovie"));
        var savedMovie = new Movie(movieData.attributes);
        return savedMovie;
    };
    this.addAsFav = function(movie){
        var favData = localStorage["favs"] || "[]";
        var localFavs = JSON.parse(favData);
        localFavs.push(movie.attributes.id);
        localStorage.setItem("favs", JSON.stringify(localFavs));
        console.log("add: "+localStorage["favs"]);
      
    };
    this.deleteAsFav = function(movie){
        var favData = localStorage.favs || "[]";
        var localFavs = JSON.parse(favData);
        localFavs.splice(localFavs.indexOf(movie.attributes.id));
        localStorage.setItem("favs", JSON.stringify(localFavs));
      
    };
    
}]);
