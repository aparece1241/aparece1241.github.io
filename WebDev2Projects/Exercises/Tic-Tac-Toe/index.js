window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
});

window.onload = () =>{
    //My form//
  let Gameboard = new CreateSetting();
  let Player1 = new Player("Player1","assets/O.svg",true);
  let Player2 = new Player("Player2","assets/X.png",false);
  let prepared = false;

  let firstLoop = Gameboard.startLoop(getName);

  function getName(){
    console.log("Repeating");
  }


    
  Gameboard.createTable();



  let gameLoop;
  if(prepared){
    gameLoop = Gameboard.startLoop(update);
  }

    function update(){
        if(Gameboard.GameOver){
            Gameboard.setInfoTurn("Game Over");
            Swal.fire({
                title: `${Gameboard.victorous.message}`,
                text: "Would you like to play again?",
                input: "text",
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
            Gameboard.enableClick(Player1,Player2,gameLoop);
            Player1.setTurn(false);
            Player1.MOVE-=1;
        }

        if(Player2.turn){
            Gameboard.enableClick(Player2,Player1,gameLoop);
            Player2.setTurn(false);
            Player2.MOVE-=1;
        }
    }

}
