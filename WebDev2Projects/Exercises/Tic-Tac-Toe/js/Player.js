
class Player{
    score;
    turn;
    url;
    name;
    constructor(name = "AnonymousPlayers",url){
        this.name = name;
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

    static setProperty(parent, imageUrl, name){
        console.log(name,parent);
        parent.style = "background-image: "+ imageUrl;
        parent.removeEventListener("click",()=>{
            console.log(`box${parent.id} is clicked!`);
        });
     }
    
}