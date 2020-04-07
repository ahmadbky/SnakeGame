class Game {

    constructor() {

        this.snake = new Snake();
        this.fruit = new Fruit();

        this.update();

    }

    update() {

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.fruit.spawn();

        this.snake.update();
        this.snake.draw();

        this.listenInputs();
        this.checkEating();

    }

    checkEating() {

        if (this.snake.x == this.fruit.x && this.snake.y == this.fruit.y) {
            this.fruit.randomizeCoordinates();
            this.snake.growUp(this.snake.x, this.snake.y);
        }

    }

    listenInputs() {

        document.body.addEventListener('keydown', (e) => {

            if (e.key == 'ArrowUp') {

                this.snake.moveUp();

            } else if (e.key == 'ArrowDown') {

                this.snake.moveDown();
                
            } else if (e.key == 'ArrowLeft') {

                this.snake.moveLeft();

            } else if (e.key == 'ArrowRight') {

                this.snake.moveRight();
                
            }

        });

    }

}
