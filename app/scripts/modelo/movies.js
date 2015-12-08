var Movie = function(data){
    this.attributes = {"id":data.id,"title":data.title,"poster_path":data.poster_path,"overview":data.overview};
};
Movie.prototype = {
    constructor:Movie
    ,
    getPosterUrl:function(){
        return "https://image.tmdb.org/t/p/w300/"+this.attributes.poster_path;
    }

};