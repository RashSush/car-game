class Player{
    constructor(){

    }
    getCount(){
        var playercountref=database.ref('playercount');
        playercountref.on("value",function(data){
            playercount=data.val();
        })
    }
    updataCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    update(name){
        var playerindex="player"+playercount;
        database.ref(playerindex).set({
            name:name
        })
    }
}
