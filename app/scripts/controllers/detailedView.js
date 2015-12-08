'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mymovierockingApp
 */
angular.module('mymovierockingApp')
  .controller('detailedViewCtrl',['$scope','MovieService', function ($scope,MovieService) {
  	$scope.selMovie = MovieService.getSavedMovie();
    $scope.isFav = MovieService.isFav($scope.selMovie);
  	
	$scope.changeFav = function () {
		if(!$scope.isFav){
			MovieService.addAsFav($scope.selMovie);
      $scope.isFav = true;
		}else{
      MovieService.deleteAsFav($scope.selMovie);
			$scope.isFav = false;
		}
	}
}]);
