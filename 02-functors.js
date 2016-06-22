panda = Functor.of('🐼')

addLapinouBuddy = (me) => me + '🐰'
addCatBuddy = (me) => me + '🐱'

panda.map(addLapinouBuddy)

panda
  .map(addLapinouBuddy)
  .map(addCatBuddy)

// -------------------------------

addOne = (value) => value + 1;
multiplyBy5 = (value) => value * 5;
divideByThree = (value) => value / 3;

a = Functor.of(23.2);

// chain
b = a
  .map(addOne)
  .map(addOne)
  .map(multiplyBy5)
  .map(divideByThree);
