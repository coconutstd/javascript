const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('성공');
    }, 2000);
})

p.then(function(ok) {
    console.log(ok);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('성공2');
        }, 3000);
    })
})
.then(function(ok){
    console.log(ok);
})
.catch(function(error){
    console.log(error);
})

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
