var movieController = movieController||{};

movieController.isFavourite = function(movie){
	var favData = localStorage["favs"] || "[]";
  	var localFavs = JSON.parse(favData);
	return localFavs.indexOf(movie.attributes.id)!=-1;
}
movieController.addAsFav = function(movie){
	var favData = localStorage["favs"] || "[]";
  	var localFavs = JSON.parse(favData);
	localFavs.push(movie.attributes.id);
	localStorage.setItem("favs", JSON.stringify(localFavs));
	console.log("add: "+localStorage["favs"]);
}
movieController.deleteAsFav = function(movie){
	var favData = localStorage.favs || "[]";
  	var localFavs = JSON.parse(favData);

	localFavs.splice(localFavs.indexOf(movie.attributes.id));
	localStorage.setItem("favs", JSON.stringify(localFavs));
}
movieController.getPeliculasRecientes = function($http,success,error){	
	function getSuccess(response){
		//$scope.$apply(function(){
		movies = [];
		localStorage.favs = localStorage.favs || [];
    	for (var i = 0; i < response.data.results.length; i++) {
  			movies[i] = new Movie(response.data.results[i].id,response.data.results[i].title,response.data.results[i].poster_path,response.data.results[i].overview);
  			if(movieController.isFavourite(movies[i])){
  				movies[i].isFav=true;
  			}
		};
		success(movies);
		  //});
	}
	function getError(){
		error();
	}
	movieServices.getPeliculasRecientes($http,getSuccess,getError);
}