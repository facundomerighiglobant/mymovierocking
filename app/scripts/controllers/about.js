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
  	$scope.selMovie = savedMovie;
  	$scope.favText = "";
  	$scope.selMovie.isFav = movieController.isFavourite($scope.selMovie);
  	if($scope.selMovie.isFav)
  		$scope.favText = "Delete from my favourites";
  	else
  		$scope.favText = "Add to my favourites";

	$scope.changeFav = function () {
		if(!$scope.selMovie.isFav){
			savedMovie.isFav=true;
			movieController.addAsFav($scope.selMovie);
			$scope.favText = "Delete from my favourites";
		}else{
			savedMovie.isFav=false;
			movieController.deleteAsFav($scope.selMovie);
			$scope.favText = "Add to my favourites";
		}
	}

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
