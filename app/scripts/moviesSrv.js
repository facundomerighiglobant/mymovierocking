(function (angular, undefined) { 'use strict';

angular.module('mymovierockingApp')
	.service('moviesSrv', ['$resource', function($resource) {
	
	var movies ;
	var currentMovieDetail;

	this.getFromApi = function(){
		return $resource('https://api.themoviedb.org/3/movie/popular?api_key=579989834308dc1b0309510990ad9246').get();
	};
	this.setMovies = function(moviesArray){ 
		movies = moviesArray;
	};

	this.getMovies = function(){ 
		return movies;
	};

	this.setCurrentMovieDetail = function(movie){
		currentMovieDetail = movie;
	};
	this.getCurrentMovieDetail = function() {
		return currentMovieDetail;
	};

	this.getMovie = function (id) {
		return $resource('https://api.themoviedb.org/3/movie/:id?api_key=579989834308dc1b0309510990ad9246', { id: '@id'}).get({ id: id });
	};
	
}]);

  }(angular));