let apple = 10;

// 식별자는 숫자로 시작 할 수 없고, 공백을 포함할 수 없고, 특수문자를 포함할 수 없다.
// let 12apple = 10;
// let a pple = 10;
// let a@sdfe = 10;


// 객체 속성으로서의 식별자
const go = {
    apple : 10,
    ['apple juice'] : 11
};

const doubleAppleJuice = go.apple + go['apple juice'];