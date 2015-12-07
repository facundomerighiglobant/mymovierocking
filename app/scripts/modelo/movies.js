var Movie = function(id,title,poster_path,overview){
    this.attributes = {"id":id,"title":title,"poster_path":poster_path,"overview":overview};
    this.isFav = this.isFavourite();
};
Movie.prototype = {
    constructor:Movie
    ,
    isFavourite:function(){
        var favData = localStorage["favs"] || "[]";
        var localFavs = JSON.parse(favData);
        return localFavs.indexOf(this.attributes.id)!=-1;
    },
    addAsFav:function(){
        if(!this.isFavourite()){
            var favData = localStorage["favs"] || "[]";
            var localFavs = JSON.parse(favData);
            localFavs.push(this.attributes.id);
            localStorage.setItem("favs", JSON.stringify(localFavs));
            console.log("add: "+localStorage["favs"]);
            this.isFav = true;
        }
    },
    deleteAsFav:function(){
        var favData = localStorage.favs || "[]";
        var localFavs = JSON.parse(favData);
        localFavs.splice(localFavs.indexOf(this.attributes.id));
        localStorage.setItem("favs", JSON.stringify(localFavs));
        this.isFav = false;
    }
};