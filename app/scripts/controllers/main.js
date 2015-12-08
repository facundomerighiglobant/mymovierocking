'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovierockingApp
 */
var main = angular.module('mymovierockingApp');
  main.controller('MainCtrl', ['$scope','MovieService', function($scope,MovieService) {
    var searchMovie = function(idBuscado){
      for(var i=0;i<$scope.myMovies.length;i++){
          if($scope.myMovies[i].attributes.id==idBuscado){
            return $scope.myMovies[i];
          }
      }
    };
  	$scope.myMovies = $scope.myMovies||[];
   
    $scope.verDetallesPelicula = function(idBuscado){
        var selMovie = searchMovie(idBuscado);
        MovieService.saveMovie(selMovie);
        window.location.hash = "detailedView";
    };

    MovieService.getMovies(
  	    function (movies){
            $scope.myMovies = movies;
        },
      	function (){
    		    console.log("error");
        }
    );
    
  }]);
