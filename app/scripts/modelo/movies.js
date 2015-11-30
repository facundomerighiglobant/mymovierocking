var Movie = function(id,title,poster_path,overview){
    this.attributes = {"id":id,"title":title,"poster_path":poster_path,"overview":overview};
    this.isFav=false;
};
Movie.prototype = {
    constructor:Movie
    /*,
    play:function(){
        console.log("Playing "+this.attributes["title"]);
    },
    stop:function(){
        console.log("stopped");
    },
    set:function(string, value){
        this.attributes[string]=value;
    },
    get:function(string){

    },
    subscribe: function(observer) {
        this.handlers.push(observer);
    },
    unsubscribe: function(observer) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== observer) {
                    return item;
                }
            }
        );
    },

    notify: function() {
        for( i = 0; i < this.handlers.length; i++) { 
            handlers[i].update(); 
        }
    }
    */
};