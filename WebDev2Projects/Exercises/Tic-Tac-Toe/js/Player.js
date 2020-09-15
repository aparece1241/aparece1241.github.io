
class Player{
    score;
    turn;
    url;
    name;
    MOVE = 4;
    constructor(name = "AnonymousPlayers",url,turn = false){
        this.name = name;
        this.turn = turn;
        this.url = url;
    }


    /**
     * This function will 
     * set image url
     * 
     * @param {newUrl} 
     */
    static setUrl(newUrl){
        this.url = newUrl;
    }
    
    /**
     * this function will
     * set the name
     * @param {newName} 
     */
    static setName(newName){
        this.name = newName;
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
     * This function is a static function 
     * used to set image on the element
     * it will also disable the clickability 
     * of the box
     * @param {parent imageUrl, turn}
     */

    static setProperty(parent, Player){
        parent.style = "background-image: url("+Player.url+"); background-size: cover;pointer-events: none;";
        parent.className = "box1";
        Player.setTurn(false);
        return true;
    }   
     
    
}