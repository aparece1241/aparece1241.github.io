class CreateSetting
{
    parent = document.getElementById("gameArea");
    
    /**
     * This function will
     * create the Table board
     * @param "none"
     */
    createTable = () => {
        this.data = "";    
        let ctr = 1;
        while(ctr <= 9){
            this.data += "<div class= 'box' id="+ctr+"></div>";
            ctr++;
        }
        this.parent.innerHTML = this.data;
    }
 
    /**
     * This function will enable the 
     * the user clicked in the box
     * @param "none"
     */
    enableClick = () =>{
        this.cells = document.getElementsByClassName("box");
            
        for(let ctr = 0; ctr < this.cells.length; ctr++){
            this.cells[ctr].addEventListener('click',Player.clickBox);
        }
    }

    /**
     * This function 
     */

}