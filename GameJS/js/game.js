
/// <reference path="../typings/phaser.d.ts" />

let config = {
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
    parent: 'gameArea',
    backgroundColor: 0xfffff,
    physics: {
        default: "arcade",
        arcade:{
            gravity: {y: 100},
            debug: false,
        }
    },
    scene: [Boot,Menu,Play,GameOver],
}
window.onload = function () {
    var game = new Phaser.Game(config);
}

// https://phaser.io/examples/v3/view/actions/grid-align    
// https://www.youtube.com/watch?v=U0K0YTifb1w
// https://www.youtube.com/watch?v=9sWrGohw9qo