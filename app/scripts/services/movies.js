app.factory('movies', ['$http', function($http) {
	  return $http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=579989834308dc1b0309510990ad9246');
}]);
