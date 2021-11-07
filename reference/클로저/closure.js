const x = 1;

function outer() {
  const x = 10;
  const inner = function () { console.log(x); }
  return inner;
}

const innerFunc = outer();
// outer의 스코프를 벗어났지만 x를 출력할 수 있음. 단, x 값에 접근은 불가함
innerFunc();


// outer는 함수이다. 함수의 내부 속성인 inner는 왜 호출이 되지 않는가?
outer.inner();