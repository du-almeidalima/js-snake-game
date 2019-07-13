
import snake from './snake';
// UI Variables
const score = document.querySelector('.score-num'); 

// Canvas Settings
const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width  = 600;
canvas.height = 600;
const canvasSettings = {
    canvas,
    c
}

// Global Variables
const scl = 15;
const fps = 10;
const foodUrl = [
    './src/assets/pill1.png',
    './src/assets/pill2.png',
    './src/assets/pill3.png',
    './src/assets/pill4.png'
]
const foodImg = new Image();
foodImg.src = foodUrl[Math.floor(Math.random() * 4 + 1) - 1];
let food = {
    x: Math.floor(Math.random() * 40 + 1) * scl,
    y: Math.floor(Math.random() * 40 + 1) * scl
};

// Snake
const snk = new snake(300,300,canvasSettings, scl);

// Event Listeners
document.addEventListener('keydown', e => snk.move(e.key));

// Screen
(function animate(){
    setTimeout(() => {
        requestAnimationFrame(animate);
        c.clearRect(0,0,canvas.width,canvas.height);
        snk.update();
        if(snk.eat(food)){
            food = snk.eat(food);
            foodImg.src = foodUrl[Math.floor(Math.random() * 4 + 1) - 1];
            score.innerHTML = 10 + parseInt(score.innerHTML);
        }
        snk.display();
        // Food Display
        c.drawImage(foodImg, food.x, food.y, scl, scl);
    }, 1000/fps)
})();
