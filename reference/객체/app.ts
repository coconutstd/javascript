type Box = {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    borderWidth?: number;
    ['className']?: string;
    color?: string;
};

let box: Box = {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: 'red'
};

function makeBox(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string,
): Box {
    return {
        width,
        height,
        borderRadius,
        backgroundColor
    }
}

const box1 = makeBox(100, 200, 10, 'blue');

class Shape implements Box {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    color: string;

    constructor(
        width: number,
        height: number,
        borderRadius: number,
        backgroundColor: string
    ){
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(100,200,30,'red');
boxShape.color = 'black';

const box2 = Object.assign({}, box);
const box3 = {...box2, color : 'yellow'};
