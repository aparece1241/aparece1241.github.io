
/// <reference path = "../../typings/phaser.d.ts"/>

let score = 0;
let id;
let firstChoose;
let secondChoose;
let isSec = true;
let yoy = false;
let F0 = [];
let F1 = [];
let F2 = [];
let F3 = [];
let F4 = [];
let frameArray = [F0, F1, F2, F3, F4];
let PositionArray = [];
let color = ["red","orange","green","voilet","blue"];
let loaded = false;
class Play extends Phaser.Scene {

    constructor() {
        super("Play");
    }
    loaded = false;
    gems;
    create() {
        // this creates the platform of the game the color brown one
        this.platform = this.physics.add.staticGroup();


        //this makes the platform more bigger because the actual size of the image was small
        this.platform.create(400, 600, 'platform').setScale(5).refreshBody()
        // let firstIdChoosen; //this variable stores the id of the first gem that is being clicked
        let ids = 0;// this variable will store the future ids of the gems
        this.gems = this.physics.add.group(); // this is the initialization of the group of gems put inside a variable named gems

        for (let i = 0; i < 10; i++) { // this loop will iterate 10 times and will initialize some variables
            let f = i;// this variables is resposible for storing the 'i' value, that is used to check if the second counter in the second loop reach greater than four
            let y = i; // this is to store the value of i 

            for (let b = 0; b < 10; b++) {// this loop is responsible for making the gema to iterate 100 times by the use of the first loop
                if (i > 5) {// this if statement will check if the i value exceeds 4 and will retutn the value to 0 (if it reach 5)
                    f = i - 5;
                }
                let frame = Phaser.Math.Between(0, 4);
                this.gem = this.add.sprite(200 + (35 * (y + 1)), 200 + (35 * (b + 1)), "diamonds", frames = frame);
                PositionArray.push({ x: 200 + (35 * (y + 1)), y: 200 + (35 * (b + 1)), f: frame, id: ids, sprite: this.gem })
                this.gems.add(this.gem);
                ids++;
            }
        }
        // console.log(this.gems);

        // loaded = true;

        this.physics.add.collider(this.gems, this.platform);
        this.gems.world.gravity.y = 0;


        /**
         * this part here gets the mouse and calculate
         * if it hits one of the gems 
         * 
         * and if it does, then it will save the info of the click gems
         * 
         * 
         * params @pointer
         */

        this.input.on("pointerdown", function (pointer) {

            let counter = 0;

            /**
             * this loop will check if the mouse input is clicking
             * some of the 
             * gems 
            */

            PositionArray.forEach(element => {
                if (element.x - 16 <= pointer.position.x && element.x + 16 >= pointer.position.x) {

                    if (element.y - 16 <= pointer.position.y && element.y + 16 >= pointer.position.y) {
                        id = counter;
                        console.log("id:", PositionArray[counter].id, "couter", counter);

                        /**
                         * this consecutive if else statement is responsible for checking 
                         * the clicked input to be exact.
                         * 
                         * 
                         * It also check if the choosen variable
                         */
                        if (isSec) {
                            firstChoose = id;
                            isSec = false;
                        } else {
                            secondChoose = id;
                        }

                        console.log(firstChoose, secondChoose);
                        
                        if (secondChoose != undefined) {
                            if (valid_choose(PositionArray[firstChoose].id, PositionArray[secondChoose].id)) {
                                tween(firstChoose, secondChoose, PositionArray, this);
                                // firstChoose = undefined;
                                isSec = true;
                                // loaded = true;
                            } else {
                                // console.log(false);
                                isSec = valid_choose(PositionArray[firstChoose].id, PositionArray[secondChoose].id);
                            }
                        }

                    }

                }
                counter++;
            });
        }, this);
    }

    update() {
        if (loaded) {
            check(PositionArray);
            loaded = false;
        }
    }
}


function valid_choose(first, second) {
    /**
     * check the posiblity of what the player 
     * will choose in the second choose
     */

    let boundaries = [[1, 2, 3, 4, 5, 6, 7, 8, 91, 92, 93, 94, 95, 96, 97, 98], [10, 20, 30, 40, 50, 60, 70, 80, 19, 29, 39, 49, 59, 69, 79, 89], [0, 9, 90, 99]];
    let left = true;
    let right = true;
    let down = true;
    let up = true;

    if (second == undefined) {
        return false;
    }
    for (let ctr = 0; ctr < boundaries.length; ctr++) {
        if (customizedIn(boundaries[ctr], first)) {
            switch (ctr) {
                case 0:
                    if (0 < first < 9) {
                        left = false;
                    } else if (90 < first < 99) {
                        right = false;
                    }
                    break;

                case 1:
                    if (first % 2 == 0) {
                        up = false;
                    } else {
                        down = false;
                    }
                    break;

                case 2:
                    switch (first) {
                        case 0:
                            left = false;
                            up = false;
                            break;

                        case 9:
                            left = false;
                            down = false;
                            break;
                        case 90:
                            right = false;
                            up = false;
                            break;
                        case 99:
                            right = false;
                            down = false;
                    }

                    break;
            }
            break;
        }
    }

    if (validate_extention(left, right, up, down, first, second)) {
        return true;
    } else {
        return false;
    }

}
function validate_extention(left, right, up, down, first, second) {
    if (left) {
        if (first - 10 == second) { return true; }
    }
    if (right) {
        if (first + 10 == second) { return true; }
    }
    if (up) {
        if (first - 1 == second) { return true; }
    }
    if (down) {
        if (first + 1 == second) { return true; }
    }
}


function addGems() {
    //in this function whenever there is a culomn that is break this function will be called
    //this function will create gems and put in the top part of the puzzle

}


function check(positionArray) {
    /**
     * this function is called whenever the user click the gem(it is just for now)
     * this function does was to extract,check, and segregate
     * the different kind of frames (i'm reffernig frames as colors )
     */
    for (let ctr = 0; ctr < 5; ctr++) {
        for (let i = 0; i < positionArray.length; i++) {
            if (ctr == positionArray[i].f) {
                frameArray[ctr].push(positionArray[i].id);
            }
        }
    }
    find(frameArray, positionArray);
}
function modifiedFind(positionArray, choosen) {


    let x_axis = [];
    let y_axis = [];
    for(let id of choosen){
        let modIdy = 10 * Math.floor(id * 0.1);
        let modIdx = 10 + id % 10;  
        for(let ctr = 0; ctr < 10; ctr++){
            if(positionArray[id] == positionArray[modIdy + ctr].f){
                console.log(modIdy + ctr);
            }else{
                if(positionArray[id].f == positionArray[modIdy + ctr].f){
                    y_axis.push(modIdy + ctr);
                }
            }

            if(positionArray[modIdx + ctr * 10] == undefined){
                console.log(modIdx + ctr * 10);
            }else {
                if(positionArray[id].f == positionArray[modIdx + ctr * 10].f){
                    x_axis.push(modIdx + ctr * 10);
                }
            }   
        }
        console.log("Color1: ",color[positionArray[choosen[0]].f]);
        console.log("Color2: ",color[positionArray[choosen[1]].f]);
    
        console.log("X: ",modifieldFind_extention(x_axis,10),color[positionArray[id].f]);
        console.log("Y :",modifieldFind_extention(y_axis,1),color[positionArray[id].f]);
    }
}

function modifieldFind_extention(clonedArray,by){
    let Counter=0;
    let By = clonedArray[0];
    console.log(by);
    for(let ctr = 0;ctr < clonedArray.length;ctr++){
        
        while (customizedIn(clonedArray, By)) {
            console.log(customizedIn(clonedArray, By));
            // for decription of this loop see the loop 
            // for x axis above

            /**
             * this statement will check if the value of
             * ByOne is in the boundary
             * if it does then it will break the loop
             * to stop the counter from iterating
             */

            By = By + by;
            Counter++;
        }
        if(Counter > 2){
            tintChoosen(Counter,clonedArray[ctr],PositionArray,By,clonedArray);
            return true;
        }else {
            return false;
        }
    }    
}

function find(frameArray, positionArray) {

    /**
     * this function will be called whenever the check function is done
     * this function does a very important role in checking
     * when there are three or more gems that are align
     */

    // this is a variable that will holds the cloned frame array. Its porpuse was for checking 
    let clonedArrayX;
    // same goes with this variable
    let clonedArrayY;

    for (let index = 0; index < frameArray.length; index++) {

        clonedArrayX = frameArray[index]; // intializing the variable for clone array
        clonedArrayY = frameArray[index];
        for (let ctr = 0; ctr < clonedArrayX.length; ctr++) { //looping througth the cloned array


            //====================================//
            //====================================//
            //====================================//
            // this is for the x axis of the game
            //====================================//
            //====================================//
            //====================================//


            // this will count the aligned colors. If its greater than three then it will be qualified 

            let Counter = 1;

            // in x axis the the id number of the frames is iterated by ten

            let ByTen = clonedArrayX[ctr] + 10;

            // this loop will continue to loop until this parameter is true "customizedIn(clonedArrayX, ByTen)"

            while (customizedIn(clonedArrayX, ByTen)) {
                //if the parameter is true 
                //it will iterate Byten and the counter
                ByTen = ByTen + 10;
                Counter++;
            }

            //checking if the counter is greater than 2
            if (Counter > 2) {
                // if its true then it will call
                // the temporary function "tintChoose()"
                tintChoosen(Counter, clonedArrayX[ctr], positionArray, 10, clonedArrayX);
            }


        }

        for (let ctr = 0; ctr < clonedArrayY.length; ctr++) {


            //====================================//
            //====================================//
            //====================================//
            //this is for the y axis of the game
            //====================================//
            //====================================//
            //====================================//


            let yCounter = 1;

            // initialized the variable ByOne
            let ByOne = clonedArrayY[ctr] + 1;

            // this variable holds the the indexes of the boundary
            let boudary = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

            while (customizedIn(clonedArrayY, ByOne)) {
                // for decription of this loop see the loop 
                // for x axis above

                /**
                 * this statement will check if the value of
                 * ByOne is in the boundary
                 * if it does then it will break the loop
                 * to stop the counter from iterating
                 */

                if (customizedIn(boudary, ByOne - 1)) {
                    break;
                }
                ByOne = ByOne + 1;
                yCounter++;
            }
            if (yCounter > 2) {
                tintChoosen(yCounter, clonedArrayY[ctr], positionArray, 1, clonedArrayY);
            }


        }
    }



}


function customizedIn(frame, val) {

    // this function will check if the val param
    // is in the frame (frame here is an array)
    // if it does then this function will return true

    for (let fs of frame) {
        if (fs == val) {
            return true;
        }
    }
    return false;

}



function tintChoosen(counter, id, positionArray, by, clonedArray) {
    console.log("This is the id ",positionArray[id]);
    /**
     * this function is a temporary function
     * the parameter counter,id, and by are integer
     * positionArray and clonedArray are array
     * this function will just change the color of the gem 
     * (supposed to erase the gems)
     */

    // this for loop will destroy the the choosen gems by its id
    for (let ctr = 0; ctr < counter; ctr++) {
        
        // this part will destroy the choosen gems
        positionArray[id].sprite.destroy(true);
        positionArray[id].sprite = "";
        positionArray[id].f = undefined;
        if(clonedArray != undefined){
            clonedArray.splice(clonedArray.findIndex(arrElem => { return arrElem == id; }), 1);
        }
        id = id + by;

    }
}




function tween(first, second, positionArray, game) {

    /**
     * this function is resposible for the movement in gems
     * this will be called when the mouse clicks in the gems
     */

    let Fid = positionArray[first].id;
    let Sid = positionArray[second].id;

    let sprite1 = positionArray[Fid].sprite;
    let sprite2 = positionArray[Sid].sprite;


    let Fx = positionArray[first].x;
    let Fy = positionArray[first].y;

    let Sx = positionArray[second].x;
    let Sy = positionArray[second].y;

    let Frx = positionArray[first].f;
    let Fry = positionArray[second].f;
    
    console.log(positionArray);

    game.add.tween({
        targets: [sprite1],
        x: Sx,
        y: Sy,
        duration: 250,
        ease: 'Linear',
        yoyo: yoy,
        onComplete: function () {
            // firstChoose = undefined;
            if (yoy == false) {
                positionArray[first] = {x: Sx,y: Sy,f: Fry, id: Sid, sprite: sprite2}
                positionArray[second] = {x: Fx,y: Fy,f: Frx, id: Fid, sprite: sprite1}
            }

            yoy = false;

        }
    });

    game.add.tween({
        targets: [sprite2],
        x: Fx,
        y: Fy,
        duration: 250,
        ease: 'Linear',
        yoyo: yoy,
        onComplete: function () {
            modifiedFind(PositionArray, [PositionArray[firstChoose].id, PositionArray[secondChoose].id]);                    
            secondChoose = undefined;
            yoy = false;
        }
    });

    // PositionArray[first] = { x: Sx, y: Sy, f: Ff, id: Sid, sprite: sprite2 }
    // PositionArray[second] = { x: Fx, y: Fy, f: Sf, id: Fid, sprite: sprite1 }
    // console.log("x:", Fx, "y:", Fy);
    // console.log("x:", Sx, "y:", Sy);
    // console.log(PositionArray, positionArray);
}
