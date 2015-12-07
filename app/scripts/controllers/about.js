'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mymovierockingApp
 */
angular.module('mymovierockingApp')
  .controller('AboutCtrl', function ($scope) {
  	var savedMovie = JSON.parse(localStorage.getItem("selMovie"));
    console.log(savedMovie);
  	$scope.selMovie = new Movie(savedMovie.attributes.id,savedMovie.attributes.title,savedMovie.attributes.poster_path,savedMovie.attributes.overview);
  	$scope.favText = "";
  	if($scope.selMovie.isFavourite())
  		$scope.favText = "Delete from my favourites";
  	else
  		$scope.favText = "Add to my favourites";

	$scope.changeFav = function () {
		if(!$scope.selMovie.isFavourite()){
			$scope.selMovie.addAsFav($scope.selMovie);
			$scope.favText = "Delete from my favourites";
		}else{
			$scope.selMovie.deleteAsFav($scope.selMovie);
			$scope.favText = "Add to my favourites";
		}
	}
  });
