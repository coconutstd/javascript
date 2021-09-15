const colors = ['yellow', 'red', 'blue'];
const Colors = {
    yellow: 'yellow',
    red: 'red',
    blue: 'blue',
};


// 구조분해할당
// 우측이 배열이면 왼쪽도 배열, 우측이 객체이면 왼쪽도 객체
const [, red] = colors;
const { yellow } = Colors;

// 삼항연산자
x = (x === y) ? 0 : 1;

(function foo() {

})