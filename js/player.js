class Player{
    constructor(){




    }




    getPlayerCount(){
        database.ref("playerCount").on("value",(data)=>{
        playerCount=data.val();
        })}
        
        
        updatePlayerCount(count){
        database.ref("/").update({
        playerCount:count
        
        })
        
        }
       /* updateInfo(){
        var playerRef="players/player"+player.index 
        database.ref(playerRef).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
        })
        */
}