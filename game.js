class Game {

    constructor() {

        this.snake = new Snake();
        this.fruit = new Fruit();

        this.update();

        this.availableCells = (canvas.height / cellHeight) * (canvas.width / cellWidth);

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

    checkWin() {
        return this.availableCells == 0;
    }

    checkLoose() {

        for (let i = 0; i < this.snake.tail.length - 1; i++) {

            const cell = this.snake.tail[i];
            if (this.snake.x == cell.x && this.snake.y == cell.y) {
                return true;
            }

        }

        return false;
    }

    checkEating() {

        if (this.snake.x == this.fruit.x && this.snake.y == this.fruit.y) {

            this.fruit.randomizeCoordinates();
            this.snake.growUp(this.snake.x, this.snake.y);
            this.availableCells -= 1;

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
