let x = 10;

// 호이스팅에 의해 정의문은 전역에서 접근 가능
foo();

function foo() {
    let myName = "junui";
    console.log(x);
}

// foo의 스코프는 끝났기 때문에 myName 식별자에 접근할 수 없음
console.log(myName);

