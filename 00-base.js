




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
