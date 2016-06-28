/**
 * @ngdoc overview
 * @name mymovierockingApp
 * @description
 * # mymovierockingApp
 *
 * Main module of the application.
 */
var app = angular.module('mymovierockingApp', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/movies', {
      templateUrl: 'views/movies.html',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
    })
    .when('/movie-detail', {
      templateUrl: 'views/movie-detail.html',
    })
    .otherwise({
      redirectTo: 'views/404.html'
    });
});

angular.module('mymovierockingApp').directive('dataFavorite', [function() {
  return {
    restrict: 'E',
    templateUrl: 'views/dataFavorite.html',
    scope: {
      idMovie: '='
    },
    link: function(scope, element, attrs) {

      element.on('click', onClick);

      function onClick() {
        console.log('click');
        var data = JSON.parse(localStorage.getItem('favoriteMovies'));
        // data[attrs.idMovie]
        if (scope.favoriteMovie) {
          scope.favoriteMovie = false;
        } else {
          if (!data[idMovie]) {
            data.push(idMovie);
            localStorage.setItem('favoriteMovies', JSON.stringify(data));
          }

          scope.favoriteMovie = true;
        }
      }
      // var favoriteSelected = false; 
      // scope.selectFavorite = function() {
      //   console.log('favorito');
      // };
      // selectFavorite(id){ 
      //   // if (favoriteSelected) {
      //   //   //ALGO 
      //   // } else {
      //   //   favoriteSelected = true;
      //   //   localStorage.setItem(id);
      //   //   console.log(id);
      //   }
      // }
    }
  };
}]);
