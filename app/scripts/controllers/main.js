'use strict';

/**
 * @ngdoc function
 * @name mymovierockingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovierockingApp
 */
var main = angular.module('mymovierockingApp');
  main.controller('MainCtrl', ['$scope','$http', function($scope,$http) {
  	$scope.myMovies = $scope.myMovies||[];
    
    $scope.verDetallesPelicula = function(idBuscado){
      console.log("llega "+idBuscado);
      var selMovie = {};
      for(var i=0;i<$scope.myMovies.length;i++){
        if($scope.myMovies[i].attributes.id==idBuscado){
          selMovie = $scope.myMovies[i];
          break;
        }
      }
      var stringifiedMovie = JSON.stringify(selMovie);
      localStorage.setItem("selMovie", stringifiedMovie);
      window.location.href = "/#/about";
    }
  	function getPeliculasRecientesSuccess(response){
      var movies = [];
      localStorage.favs = localStorage.favs || [];
        for (var i = 0; i < response.data.results.length; i++) {
          movies[i] = new Movie(response.data.results[i].id,response.data.results[i].title,response.data.results[i].poster_path,response.data.results[i].overview);
      };
      $scope.myMovies = movies;
  	}
  	function getPeliculasRecientesError(){
		  console.log("error");
    }
    $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=579989834308dc1b0309510990ad9246")
          .then(getPeliculasRecientesSuccess,getPeliculasRecientesError);
  }]);
