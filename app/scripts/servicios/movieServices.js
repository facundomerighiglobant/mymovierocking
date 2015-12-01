var movieServices = movieServices||{};
movieServices.getPeliculasRecientes = function($http,successHndlr,errorHndlr){
	$http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=579989834308dc1b0309510990ad9246")
	.then(successHndlr,errorHndlr);
    //.then(function(response) {successHndlr()});
	//return $.ajax("").success(successHndlr.bind()).fail(errorHndlr);
}