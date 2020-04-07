class Fruit extends Cell {

    constructor() {

        Array.prototype.randomChoice = function() {
            return this[Math.floor(Math.random() * this.length)];
        }

        super(Cell.randomCoordinate(canvas.width, cellWidth),
            Cell.randomCoordinate(canvas.height, cellHeight));

    }

    randomizeCoordinates() {
        this.x = Cell.randomCoordinate(canvas.width, cellWidth);
        this.y = Cell.randomCoordinate(canvas.height, cellHeight);
    }

    spawn() {

        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, cellWidth, cellHeight);

    }

}