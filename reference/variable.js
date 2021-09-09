let a = 10;
let b = a;

let o = {
    isLoading: true,
}

function foo(o) {
    o.isLoading = false;
}
foo(o);
console.log("done");