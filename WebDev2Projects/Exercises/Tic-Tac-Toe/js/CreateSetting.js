class CreateSetting {
    created;
    parent = document.getElementById("gameArea");

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
     * This function will enable the 
     * the user clicked in the box
     * @param {plName,urlImage}
     */
    enableClick = (plName,urlImage) => {
        if (this.created) {
            this.cells = document.getElementsByClassName("box");

            for (let ctr = 0; ctr < this.cells.length; ctr++) {
                this.cells[ctr].addEventListener('click',()=>{
                    Player.setProperty(event.toElement,urlImage,plName);
                });
            }
        }
    }




}