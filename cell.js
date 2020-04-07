class Cell {

    constructor(x=0, y=0) {

        this.x = x;
        this.y = y;

    }

    static randomCoordinate(side, cellSide) {

        let grades = [];

        for (let i = 0; i < side; i += cellSide) {
            grades.push(i);
        }

        return grades.randomChoice();

    }

}