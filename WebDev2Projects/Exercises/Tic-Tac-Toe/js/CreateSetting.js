
class CreateSetting {

    created;
    parent = document.getElementById("gameArea");
    GameOver = false;
    cells;
    victorous;


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
    startLoop(update) {
        return setInterval(update, 60);
    }



    /**
     * This function will 
     * pause the game loop
     * @param {*} loop 
     */
    stopLoop(loop) {
        clearInterval(loop);
    }

    /**
     * This function will display the message
     * @param {String} message 
     */
    setInfoTurn(message) {
        let parent = document.getElementById("turn");
        parent.innerText = message;
    }

    /**
     * This function will reset all the 
     * changes the players do
     * @param {*} Player1 
     * @param {*} Player2 
     */

    reset(Player1, Player2) {
        let cells = document.getElementById("gameArea").children;
        for (let cell of cells) {
            cell.remove();
        }
        this.createTable();
        Player1.MOVE = 4;
        Player2.MOVE = 4;
        this.occupiedCells.PLAYER1 = [];
        this.occupiedCells.PLAYER2 = [];
    }

    /**
     * This function will enable the 
     * the user clicked in the box
     * @param {*} Player1
     * @param {*} Player2
     * @param {*} gameLoop
     */
    enableClick = (Player1, Player2, gameLoop, keyName) => {

        if (this.created) {
            this.cells = document.getElementsByClassName("box");
            this.setInfoTurn(`${Player1.name}'s turn!`);



            let get = true;
            for (let cell of this.cells) {

                cell.addEventListener('click', () => {
                    Player2.setTurn(true);
                    if (get) {
                        if (Player1.MOVE < 0 && Player2.MOVE <= 0) {
                            this.GameOver = true;
                            this.victorous = {
                                "message": "That was a tough game, tied!",
                                "icon": "info"
                            };
                        }
                        Player.setProperty(event.toElement, Player1)
                        this.check(keyName,event.target.getAttribute("id"),Player1.name);
                        get = false;
                    }

                });

            }
        }
    }

    /**
     * This function will return the 
     * winner and return 
     * nothing if there is no winner
     * @param "none"
     */

    getVictorous() {
        console.log(this.victorous);
        return this.victorous;
    }


    occupiedCells = {
        "PLAYER1": [],
        "PLAYER2": []
    };
    /**
     * This function will check if someone wins
     * @param {*} name 
     * @param {*} id 
     */
    check(keyname, id, name) {

        let winningCombination = [
            //this is the horizontal part
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            //this is the vertical part
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            //this is the diagonal part
            [1, 5, 9],
            [3, 5, 7]
        ];
        this.occupiedCells[keyname].push(id);
        for (let combination of winningCombination) {
            if (this.customizedIn(this.occupiedCells[keyname], combination[0]) &&
                this.customizedIn(this.occupiedCells[keyname], combination[1]) &&
                this.customizedIn(this.occupiedCells[keyname], combination[2])) {
                this.GameOver = true;
                this.victorous = {
                    "message": `${name} wins!`,
                    "icon": "success"
                };
            }
        }


    }

    /**
     * This function will check if 
     * the value exist in the array
     * @param {Array} arr 
     * @param {Number} val 
     */
    customizedIn(arr, val) {
        for (let el of arr) {
            if (el == val) {
                return true;
            }
        }
        return false;
    }

}

