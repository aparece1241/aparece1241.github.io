
class CreateSetting {
    
    created;
    parent = document.getElementById("gameArea");
    state = true;
    temp;

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
     * @param {*} Player1
     * @param {*} Player2
     */
    enableClick = (Player1,Player2,gameLoop) => {
        if (this.created) {
            this.cells = document.getElementsByClassName("box");
            for (let ctr = 0; ctr < this.cells.length; ctr++) {
                this.cells[ctr].addEventListener('click',()=>{
                    if(Player1.MOVE > -1){
                        Player2.setTurn(true);
                    }
                
                    Player.setProperty(event.toElement,Player1);
                });
            }
            this.check(Player1.name,gameLoop);
        }
    }



    /**
     * This function will
     * Who wins
     * @param {String} id
     * @param {Function} gameBoardLoop
     */

    occupiedCells = {
        "PLAYER1":[],
        "PLAYER2":[]
    };
    tempo = [];
    check(id, gameBoardLoop){
        let winningCombination = [
            //this is the horizontal part
            [1,2,3],
            [4,5,6],
            [7,8,9],
            //this is the vertical part
            [1,4,7],
            [2,5,8],
            [3,6,9],
            //this is the diagonal part
            [1,5,9],
            [3,5,7]
        ];
        
        this.temp = document.getElementsByClassName("box1");
        if(this.temp.length > 0){
            this.occupiedCells[id].push(this.temp[this.temp.length - 1].id);
            this.tempo.push(this.temp[this.temp.length - 1].id);
        }

        if(this.tempo.length >= 8){
            console.log("Im here!");
            for(let i = 0; i < 10; i++){
                if(!this.customizedIn(this.tempo,i)){
                    console.log(i);
                }
            }    
        }
        
        if(this.temp.length > 3){
            for(let ctr = 0;ctr < winningCombination.length; ctr++){
                let counter = 0;
                for( let combination of winningCombination[ctr]){
                    if(this.customizedIn(this.occupiedCells[id],combination)){
                        counter++;
                    }
                }
                console.log(`${id}: `,counter);
                if(counter > 2){
                    console.log(winningCombination[ctr]);
                }
            }
        }
        console.log(this.tempo);
    }

    customizedIn(arr, val){
        for(let el of arr){
            if(el == val){
                return true;
            }
        }
    }
}