let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
console.log("🚀 ~ file: script.js:3 ~ ctx:", ctx);

// cnava config
const  CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// sprite
const playerImg = new Image();
playerImg.src = './shadow_dog.png';
const spriteWidth = 575     /* 6876px width / 12 cols = 573 */
const spriteHight = 523     /* 5230 img width / 10 rows = 523 */
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrame = 4;
let playerState = "dizzy";

// animation state
const animationState = {
    idle: {
        frameX: 6,
        frameY: 0,
    },
    jump:{
        frameX: 6,
        frameY:1,
    },
    fall:{
        frameX: 6,
        frameY:2,
    },
    run:{
        frameX: 8,
        frameY:3,
    },
    dizzy:{
        frameX: 10,
        frameY:4,
    },
    sit:{
        frameX: 4,
        frameY:5,
    },
    roll:{
        frameX: 6,
        frameY:6,
    },
    bite:{
        frameX: 6,
        frameY:7,
    },
    ko:{
        frameX: 11,
        frameY:8,
    },
    hit:{
        frameX: 3,
        frameY:9,
    }
}


// sprite loop/animation
function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImg, animationState[playerState].frameX * spriteWidth, animationState[playerState].frameY * spriteHight, spriteWidth, spriteHight, 0, 0, spriteWidth, spriteHight);
    
    // it will only run 5%5 =0 i.e after 5 loops/frameX
    if(gameFrame % staggerFrame == 0){
        if( animationState[playerState].frameX < 6) animationState[playerState].frameX++;
        else animationState[playerState].frameX = 0;
    }
    gameFrame++;

    requestAnimationFrame(animate);
}
// animate()
