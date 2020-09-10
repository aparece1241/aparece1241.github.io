window.onload = () =>{
    let Player1 = new Player("PLAYER1","../assets/O.svg");
    let Player2 = new Player("PLAYER2","../assets/X.png");
    let Gameboard = new CreateSetting();
    Gameboard.createTable();
    Gameboard.enableClick(Player1.name, Player1.url);

    


}