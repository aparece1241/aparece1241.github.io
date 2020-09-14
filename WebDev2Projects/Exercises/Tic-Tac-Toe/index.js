window.onload = () =>{
    let Player1 = new Player("PLAYER1","assets/O.svg",true);
    let Player2 = new Player("PLAYER2","assets/X.png",false);
    let Gameboard = new CreateSetting();
    Gameboard.createTable();

    let gameLoop = Gameboard.startLoop(update);

    function update(){

        if(Player1.MOVE <= 0 && Player2.MOVE < 0){
            //ends the game loop
            Gameboard.stopLoop(gameLoop);
        }

        if(Player1.turn){            
            alert(`${Player1.name}'s turn!`);
            Gameboard.enableClick(Player1,Player2);
            Gameboard.check(Player2.name, gameLoop);  
            Player1.setTurn(false);
            Player1.MOVE-=1;
        }

        if(Player2.turn){
            alert(`${Player2.name}'s turn!`);
            Gameboard.enableClick(Player2,Player1);
            Gameboard.check(Player1.name, gameLoop);
            Player2.setTurn(false);
            Player2.MOVE-=1;
        }
    }

}