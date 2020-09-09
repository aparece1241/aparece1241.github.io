window.onload = () =>{
    let Gameboard = new CreateSetting();
    Gameboard.createTable();
    Gameboard.enableClick();

    let Player1 = new Player("PLAYER1","O.svg");
    let Player2 = new Player("PLAYER2","X.png");

    Player1.checkImageExist();
    

}