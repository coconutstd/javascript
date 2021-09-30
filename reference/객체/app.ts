type Box = {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    borderWidth?: number;
    ['className']?: string;
};

let box: Box = {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: 'red'
};