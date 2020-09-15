window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
});

window.onload = () =>{

    let Player1 = new Player("PLAYER1","assets/O.svg",true);
    let Player2 = new Player("PLAYER2","assets/X.png",false);
    let Gameboard = new CreateSetting();
    Gameboard.createTable();

    let gameLoop = Gameboard.startLoop(update);

    function update(){
        if(Gameboard.GameOver){
            console.log(Gameboard.victorous);
            Gameboard.setInfoTurn("Game Over");
            Swal.fire({
                title: ``,
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Continue'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            Gameboard.reset(Player1,Player2);
            Gameboard.GameOver = false;
        }

        if(Player1.turn){            
            // alert(`${Player1.name}'s turn!`);
            Gameboard.enableClick(Player1,Player2,gameLoop);
            Player1.setTurn(false);
            Player1.MOVE-=1;
        }

        if(Player2.turn){
            // alert(`${Player2.name}'s turn!`);
            Gameboard.enableClick(Player2,Player1,gameLoop);
            Player2.setTurn(false);
            Player2.MOVE-=1;
        }
    }

}
