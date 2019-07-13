export default class Snake {
    constructor(x, y, canvasSettings, scl){
        this.dx     = 0;
        this.dy     = 0;
        this.c      = canvasSettings.c;
        this.canvas = canvasSettings.canvas; 
        this.scl    = scl;
        this.body = [
            {
                x: x,
                y: y
            }
        ]
    };

    update(){
        // If exceed the canvas size or touches the border
        if(this.body[0].x >= this.canvas.width 
        || this.body[0].x < 0
        || this.body[0].y >= this.canvas.height
        || this.body[0].y < 0)
        {
            // Game Over
            this.dx = 0;
            this.dy = 0;
        }
        // If it touches another part of the body
        else if(this.body.length > 1) {
            this.body.forEach(segment => {
                if (this.body[0].x === segment.x && this.body[0].y === segment.y) {
                    console.log(this.body)
                    // Game Over
                    this.dx = 0;
                    this.dy = 0;
                }
            });
        }else{
            let aux = {
                x: undefined,
                y: undefined
            };
            let past = {
                x: undefined,
                y: undefined
            }
            this.body.forEach((segment, index) => {
                if(index === 0){
                    segment.x = this.body[0].x;
                    segment.y = this.body[0].y;
                    aux = this.body[0];
                    this.body[0].x = this.body[0].x + this.dx;
                    this.body[0].y = this.body[0].y + this.dy;
                }else{
                    past.x = segment.x;
                    past.y = segment.y;
                    segment.x = aux.x;
                    segment.y = aux.y;
                    aux.x = past.x;
                    aux.y = past.y;
                }
            });
        }
    }

    eat(food){
        if(this.body[0].x === food.x && this.body[0].y === food.y){
            this.body.push({
                x: food.x,
                y: food.y
            });

            food = {
                x: (Math.floor(Math.random() * 40 + 1) * this.scl) - this.scl,
                y: (Math.floor(Math.random() * 40 + 1) * this.scl) - this.scl
            };

            return {x: food.x, y: food.y};
        }
    }
    display(){
        this.body.forEach((t, index) => {
            this.c.beginPath();
            index === 0 ? this.c.fillStyle = "black" : this.c.fillStyle = "white";
            this.c.fillRect(t.x, t.y, this.scl, this.scl);
            this.c.closePath();
        });
    }

    move(key){
        switch (key) {
            case 'ArrowUp':
                if(this.dy !== this.scl)
                {
                    this.dy = -1 * this.scl;
                    this.dx = 0;
                }
                break;
    
            case 'ArrowLeft':
            if(this.dx !== this.scl)
            {
                this.dx = -1 * this.scl;
                this.dy = 0;
            }
            break;
        
            case 'ArrowDown':
            if(this.dy !== -this.scl)
            {
                this.dy = 1 * this.scl;
                this.dx = 0;
            }
                break;
    
            case 'ArrowRight':
            if(this.dx !== -this.scl)
            {
                this.dx = 1 * this.scl;
                this.dy = 0;
            }
                break;
        };
    }
}
