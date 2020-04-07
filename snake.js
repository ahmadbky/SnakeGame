class Snake {

    constructor() {

        this.x = 50;
        this.y = 50;

        this.tail = [];

        this.moveRight();

    }

    growUp(x, y) {
        this.tail.push(new Cell(x, y));
    }

    checkBorders() {

        if (this.x < 0) {

            this.x = canvas.width;

        } else if (this.x >= canvas.width) {

            this.x = -cellSideLength;

        } else if (this.y < 0) {

            this.y = canvas.height;

        } else if (this.y >= canvas.height) {

            this.y = -cellSideLength;

        }

    }

    checkCollisions() {

        // todo

    }

    update() {

        this.checkBorders();
        this.checkCollisions();

        for (let i = this.tail.length-1; i > 0; i--) {
            this.tail[i].x = this.tail[i-1].x;
            this.tail[i].y = this.tail[i-1].y;
        }

        if (this.tail.length > 0) {
            this.tail[0].x = this.x;
            this.tail[0].y = this.y;
        }

        this.x += this.vectorX;
        this.y += this.vectorY;

    }

    draw() {

        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, cellSideLength, cellSideLength);

        for (const cell of this.tail) {
            ctx.fillRect(cell.x, cell.y, cellSideLength, cellSideLength);
        }

    }

    moveUp() {
        this.vectorX = 0;
        this.vectorY = -cellSideLength;
    }

    moveDown() {
        this.vectorX = 0;
        this.vectorY = cellSideLength;
    }

    moveRight() {
        this.vectorX = cellSideLength;
        this.vectorY = 0;
    }

    moveLeft() {
        this.vectorX = -cellSideLength;
        this.vectorY = 0;
    }

}