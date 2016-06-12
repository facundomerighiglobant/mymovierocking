var Movie = function(data) {
  this.id = data.id;
  this.title = data.title;
  this.date = data.release_date;  
  this.overview = data.overview;
  this.poster = 'https://image.tmdb.org/t/p/w300' + data.poster_path;
};