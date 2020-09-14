window.onload = () =>{
    let Player1 = new Player("PLAYER1","assets/O.svg",true);
    let Player2 = new Player("PLAYER2","assets/X.png",false);
    let Gameboard = new CreateSetting();
    Gameboard.createTable();

    let gameLoop = Gameboard.startLoop(update);

    function update(){
        console.log("Repeating!");
        if(Player1.turn){            
            Gameboard.enableClick(Player1,Player2);  
            Player1.setTurn(false);
            Player1.MOVE-=1;
        }

        if(Player2.turn){
            Gameboard.enableClick(Player2,Player1);
            Player2.setTurn(false);
            Player2.MOVE-=1;
        }
    }

}