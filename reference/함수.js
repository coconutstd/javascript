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


console.log(sum(1,2,3));