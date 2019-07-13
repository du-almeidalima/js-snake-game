export default class Ui {

    constructor(canvas,  width, height) {
        // Canvas Settings
        this.canvas = canvas;
        this.canvas.width  = width;
        this.canvas.height = height;
        this.canvas.color

        // Starting Canvas
        this.ctx = this.canvas.getContext('2');

        this.scoreElement = null;
    };

    // Setters
    setScoreElement(scoreElement){
        this.scoreElement = scoreElement;
    }

    // Methods
    drawDisplay() {
        
    }

    drawnFood(food){
        this.ctx.drawImage(
            food.image,
            food.x,
            food.y,
            food.width,
            food.height
        );
    }

}
