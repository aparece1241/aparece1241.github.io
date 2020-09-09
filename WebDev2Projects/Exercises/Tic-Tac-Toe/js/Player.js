class Player{
    score;
    constructor(name = "AnonymousPlayers",url){
        this.name = name;
        this.url = url;
    }

    /**
     * check if the image exist
     */
    checkImageExist = () => {
        let image = new File(this.image);
        if(image.exists()){
            console.log(`The image exists of ${this.name}!`);
        }else{
            console.log(`The image doesn't exists of ${this.name}!`);
        }
    }
    
}