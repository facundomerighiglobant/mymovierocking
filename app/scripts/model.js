'use strict';

	var Movie = function(movieFromApi){
		this.title = movieFromApi.title;
		this.id = movieFromApi.id;
		this.overview =  movieFromApi.overview;
		this.posterUrl = 'https://image.tmdb.org/t/p/w342' + movieFromApi.poster_path;
	};

	Movie.prototype.setFavorite = function(){
		var value = localStorage.getItem( this.id );		
		if ( value === null) {
			localStorage.setItem( this.id , 'It is one of my favorites');
		} 
		else { 
			localStorage.removeItem( this.id );
		}
	};

	Movie.prototype.getFavorite = function () {
		return  (localStorage.getItem( this.id )); 
	};
