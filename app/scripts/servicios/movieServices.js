var movieServices = movieServices||{};
movieServices.getPeliculasRecientes = function(successHndlr,errorHndlr){
	return $.ajax("https://api.themoviedb.org/3/movie/upcoming?api_key=579989834308dc1b0309510990ad9246").success(successHndlr.bind()).fail(errorHndlr);
}