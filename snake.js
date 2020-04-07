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

            this.x = 0;

        } else if (this.y < 0) {

            this.y = canvas.height;

        } else if (this.y >= canvas.height) {

            this.y = 0;

        }

    }

    update() {

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

        this.checkBorders();

    }

    draw() {

        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, cellWidth, cellHeight);

        for (const cell of this.tail) {
            ctx.fillRect(cell.x, cell.y, cellWidth, cellHeight);
        }

    }

    moveUp() {
        this.vectorX = 0;
        this.vectorY = -cellHeight;
    }

    moveDown() {
        this.vectorX = 0;
        this.vectorY = cellHeight;
    }

    moveRight() {
        this.vectorX = cellWidth;
        this.vectorY = 0;
    }

    moveLeft() {
        this.vectorX = -cellWidth;
        this.vectorY = 0;
    }

}