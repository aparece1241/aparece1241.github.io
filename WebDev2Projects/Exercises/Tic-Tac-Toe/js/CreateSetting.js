class CreateSetting {
    created;
    parent = document.getElementById("gameArea");
    state = true;

    /**
     * This function will
     * create the Table board
     * @param "none"
     */
    createTable = () => {
        this.data = "";
        let ctr = 1;
        while (ctr <= 9) {
            this.data += "<div class= 'box' id=" + ctr + "></div>";
            ctr++;
        }
        this.parent.innerHTML = this.data;
        this.created = true;
    }
    /**
     * This function will 
     * start the game loop
     * @param {*} update
     */
    startLoop(update){
        return setInterval(update, 60);
    }

    /**
     * This function will 
     * pause the game loop
     * @param {*} loop 
     */
    stopLoop(loop){
        clearInterval(loop);
    }

    /**
     * This function will enable the 
     * the user clicked in the box
     * @param {Player1,Player2}
     */
    enableClick = (Player1,Player2) => {
        if (this.created) {
            this.cells = document.getElementsByClassName("box");

            for (let ctr = 0; ctr < this.cells.length; ctr++) {
                this.cells[ctr].addEventListener('click',()=>{
                    console.log("This is "+ Player1.name, Player1.MOVE+"left.");
                    Player2.setTurn(true);
                    Player.setProperty(event.toElement,Player1);
                });
            }
        }
    }




}