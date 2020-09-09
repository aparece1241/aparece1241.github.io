class Player{
    score;
    turn;
    constructor(name = "AnonymousPlayers",url){
        this.name = name;
        this.url = url;
    }

    /**
     * This function will get the user clicked 
     * in each box
     * @param "none"
     */
    static clickBox = () => {
        this.setBackgroundImage(event.toElement);
    }

    /**
     * This function will
     * set the turn property
     * @param {t} 
     */
    setTurn(t){
        this.turn = t;
    }
    /**
     * This function will get 
     * the turn property
     * @param none
     */
    getTurn(){
        return this.turn;
    }
    /**
     * This function will set a bacground image into 
     * the box when ever the clicked into it
     * @param {parent}
     */

    static setBackgroundImage(parent){
        console.log(this.url);
        parent.style.backgroundImage = this.url;
    }
    
}