class CreateSetting
{
    parent = document.getElementById("gameArea");
    
    createTable = () => {
        this.data = "";    
        let ctr = 1;
        while(ctr <= 9){
            this.data += "<div class= 'box' id="+ctr+"></div>";
            ctr++;
        }
        this.parent.innerHTML = this.data;
    }
    getClicked = () => {
        console.log(event.toElement);
    }
    enableClick = () =>{
        this.cells = document.getElementsByClassName("box");
            
        for(let ctr = 0; ctr < this.cells.length; ctr++){
            this.cells[ctr].addEventListener('click',this.getClicked);
        }
    }
}