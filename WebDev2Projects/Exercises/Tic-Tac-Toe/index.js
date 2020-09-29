window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
});

window.onload = () =>{
    //My form//
  let Gameboard = new CreateSetting();
 
  let prepared = false;
  let Player1;

  document.getElementById("name").addEventListener('click',()=>{
    console.log("im here");
    Player1 = new Player(document.getElementById("playerName").value,"assets/O.svg",true);
    document.getElementById("modal").style = "display: none;";
    document.getElementById("contain").style = "display: block;";
    prepared = true;
  });
  let Player2 = new Player("Player2","assets/X.png",false);
  Gameboard.createTable();


  let gameLoop = Gameboard.startLoop(update);
  
  

    function update(){
      if(!prepared){
        return;
      }else{
        if(Gameboard.GameOver){
            Gameboard.setInfoTurn("Game Over");
            Swal.fire({
                title: `${Gameboard.victorous.message}`,
                text: "Would you like to play again?",
                icon: `${Gameboard.victorous.icon}`,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Please'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Ok let's start again!",
                    text: "Ready?",
                    icon: "success",
                    timer: 3000 
                  });
                }else{
                  window.open('','_parent',''); 
                  window.close();
                }
              })
            Gameboard.reset(Player1,Player2);
            Gameboard.GameOver = false;
        }

        if(Player1.turn){            
            Gameboard.enableClick(Player1,Player2,gameLoop,"PLAYER1");
            Player1.setTurn(false);
            Player1.MOVE-=1;
        }

        if(Player2.turn){
            Gameboard.enableClick(Player2,Player1,gameLoop,"PLAYER2");
            Player2.setTurn(false);
            Player2.MOVE-=1;
        }
      }
    }

}
