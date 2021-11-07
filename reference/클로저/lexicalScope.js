let x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 10?
bar(); // 1?



x = 2;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x);
  }

  innerFunc();
}

outerFunc();