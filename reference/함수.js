// 아래와 달리 함수 정의문이다.
function myFunction(x) {
    return x + 100;
}


// 자바스크립트에서 함수는 식(=값)으로 취급된다.
const myFunction2 = function () {
    return x + 100;
};

myFunction2();

function sum(...args) {
    let s = 0;
    for(let i = 0; args.length; ++i){
        s += args[i];
    }
    return s;
}

const sumV2 = (a, b, ...args) => {
    let s = 0;
    for(let i = 0; args.length; ++i){
        s += args[i];
    }
    return s;
}


const arr = [1, 2];
// 자바스크립트에는 기본적으로 함수 호출하는 방법 3가지가 있다. 
// 그중 2가지
sum.apply(null, arr);
sum.call(null, 1, 2);

console.log(sum(1,2,3));

function* gen() {
    yield 10;
    yield 20;
    yield 30;
}

const g = gen();

g.next();
g.next();
g.next();