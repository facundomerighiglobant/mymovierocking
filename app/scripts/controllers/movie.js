(function (angular, undefined) { 'use strict';

	angular.module('mymovierockingApp')
	  .controller('MovieCtrl', function($scope, $routeParams, moviesSrv, $location) {

	  	var aMovie;
	   	var movie = moviesSrv.getCurrentMovieDetail();

	   	if (movie === undefined) {
	   		aMovie = moviesSrv.getMovie($routeParams.id);
	   		aMovie.$promise.then(function (infoFromApi){
					movie = new Movie(infoFromApi);
					moviesSrv.setCurrentMovieDetail(movie);
					$scope.movie = movie;
				}, function(){
					console.log('Error');
				});
	   	}

	    $scope.movie = movie;

	    $scope.goBackToMovies = function(){
			$location.path('/');
	    };

	  });

  }(angular));