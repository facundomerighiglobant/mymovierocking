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
      controller: 'MoviesCtrl',
      controllerAs: 'movies'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: 'views/404.html'
    });
});

// app.directive('dataFavorite', [function() {
//   return {
//     restrict: 'E',
//     template: 'datafavorite.html',
//     link: function() {
//       let favoriteSelected = false; 
//       selectFavorite(id) { 
//         if (favoriteSelected) {
//           //ALGO 
//         } else {
//           favoriteSelected = true;
//           localStorage.setItem(,id);
//           console.log(id);
//         }
//       }
//     },
//     scope: {
//       key1: '=',
//       key2: '&'
//     }
//   };
// }]);
