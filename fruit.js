class Fruit extends Cell {

    constructor() {

        Array.prototype.randomChoice = function() {
            return this[Math.floor(Math.random() * this.length)];
        }

        super(Fruit.randomCoordinate, Fruit.randomCoordinate);

    }

    static get randomCoordinate() {

        let grades = [];

        for (let i = 0; i < canvas.height; i += cellSideLength) {
            grades.push(i);
        }

        return grades.randomChoice();

    }

    randomizeCoordinates() {
        this.x = Fruit.randomCoordinate;
        this.y = Fruit.randomCoordinate;
    }

    spawn() {

        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, cellSideLength, cellSideLength);

    }

}