import UI from './ui';
import Snake from './snake';

// Global Variables
const canvasElement = document.querySelector('canvas');
const canvasWidth = 600, canvasHeight = 600;
const scl = 15;
const fps = 10;
const foodUrl = [
    './src/assets/pill1.png',
    './src/assets/pill2.png',
    './src/assets/pill3.png',
    './src/assets/pill4.png'
];

// Game Objects
const ui = new UI(canvasElement, canvasWidth, canvasHeight);

// UI Variables
const score = document.querySelector('.score-num'); 


const foodImg = new Image();
foodImg.src = foodUrl[Math.floor(Math.random() * 4 + 1) - 1];
let food = {
    x: Math.floor(Math.random() * 40 + 1) * scl,
    y: Math.floor(Math.random() * 40 + 1) * scl
};

// Display loop
const steps = function (f1){
    return function (f2){
        if ((f2 - f1) > 100){

            ui.drawDisplay();
            window.requestAnimationFrame(steps(f2))
        } else {

            window.requestAnimationFrame(steps(f1))
        }
    }
}


// Running the game
window.onload = window.requestAnimationFrame(steps(0));


/** For drawing the game in a loop we're using the requestAnimationFrame API which
 * whenever the browser wants to perform an animation draw it calls the callback 
 * function to update the animation frame, and it passes a timestamp as the callback
 * argument, so here we're basically assigning two functions that compare those timestamps
 * in order to paint or to wait more, which simulates that classical slow framerate
*/