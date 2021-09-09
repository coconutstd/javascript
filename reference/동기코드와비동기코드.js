function double(x) {
    return x * 2;
}

function calcVal(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 100)
}

let a = double(100);
let b = a;

const r = calcVal(1, 2, (result) => {
    console.log(result);
});
const q = r;
