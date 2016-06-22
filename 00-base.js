let addition = function(a,b) {  return a+b;  };

    // currying addition 
let add = function(a) { 
  return function(b) { 
    return a + b; 
  }
 };

console.log(add(40)(2))
  incrementBy1 = add(1)
 incrementBy2 = add(2)
  incrementBy1(41)  

let arr1 = [100, 200, 300, 400, 500];
  arr1.map((x)=>{ return x + 1 })
console.log(  arr1.map(incrementBy1))

// === composition ===

compose2 = (f, g) => {
  return function(x) {
    return f(g(x));
  }
};

compose3 = (f, g, h) => {
  return function(x) {
    return f(g(h(x)));
  }
};

addOne = n => n + 1
multiplyByFive = n => n * 5

a1m5 = compose2(multiplyByFive, addOne)
m5a1 = compose2(addOne, multiplyByFive)
