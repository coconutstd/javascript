const x = 1;

function outer() {
  const x = 10;
  const inner = function () { console.log(x); }
  return inner;
}

const innerFunc = outer();
// outer의 스코프를 벗어났지만 x를 출력할 수 있음. 단, x 값에 접근은 불가함
innerFunc();