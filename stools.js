
/* Container */

class Container {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  static of(x) {
    return new Container(x);
  }
}

/* Functor */
class Functor {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  static of(x) {
    return new Functor(x);
  }
  /*
    A map function: used for chaining operations on Container
  */
  map (fn) {
    return Functor.of(fn(this.value));
  }
}

/*
  Applicative Functor
  An applicative functor is a pointed functor with an ap method
*/
class ApplicativeFunctor {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }
  static of(x) {
    return new ApplicativeFunctor(x);
  }

  map (fn) {
    return ApplicativeFunctor.of(fn(this.value));
  }

  /*
    ap is a function that can apply the function contents of one functor
    to the value contents of another.
  */
  ap(otherContainer) { // has to be a functor
    return otherContainer.map(this.value)
  }
}

class Monad {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  static of(x) {
    return new Monad(x);
  }

  map (fn) {
    return Monad.of(fn(this.value));
  }
  /* So, I'm a monad */
  fmap (fn) { // flatMap, bind
    return fn(this.value);
  }
}

// ================ MAYBE ================

class None {
  constructor() {
    const value = null;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  map() {
    return this;
  }

  fmap (fn) { // flatMap, fmap
    return this.value;
  }

  getOrElse(value) {
    return value;
  }

  isNone() {
    return true;
  }
  isSome() {
    return false;
  }

}

class Some {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  map(fn) {
    let res = fn(this.value);
    if(res == null || x == undefined) {
      return new None()
    }
    return new Some(res);
  }

  fmap (fn) { // flatMap, fmap
    return fn(this.value);
  }

  getOrElse() {
    return this.value;
  }

  isNone() {
    return false;
  }
  isSome() {
    return true;
  }
}

class Maybe {

  static Some(x) {
    return new Some(x)
  }

  static None() {
    return new None()
  }

  static fromNullable(x) {
    return (x !== null && x !== undefined) ? Maybe.Some(x) : Maybe.None();
  }

  static of(x) {
    return Maybe.Some(x);
  }
}

// ================ Either ================
class Left {
  constructor(err) {
    const value = err;
    Object.defineProperty(this, "value", { get: () => err }) // sortie
  }

  map() {
    return this;
  }

  fmap (fn) { // flatMap, fmap
    return this; // too verifiy
  }

  getOrElse(value) {
    return value;
  }

  orElse(fn) {
    return fn(this.value);
  }

  cata(leftFn, rightFn) {
    return leftFn(this.value)
  }
}

class Right {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  map(fn) {
    return new Right(fn(this.value));
  }

  fmap (fn) { // flatMap, fmap
    let res = fn(this.value);
    if(res == null || res == undefined) {
      return new Left(res)
    }
    return new Right(res);

  }

  getOrElse() {
    return this.value;
  }

  orElse() {
    return this;
  }

  cata(leftFn, rightFn) {
    return rightFn(this.value)
  }
}

class Either {

  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  static Left(x) {
    return new Left(x)
  }

  static Right(x) {
    return new Right(x)
  }

  static fromNullable(x) {
    return (x !== null && x !== undefined) ? Either.Right(x) : Either.Left();
  }

  static of(x) {
    return Either.Right(x);
  }

}


// ================ Validation ================


class Success {
  constructor(err) {
    const value = err;
    Object.defineProperty(this, "value", { get: () => err }) // sortie
  }

  map(fn) {
    return new Success(fn(this.value));
  }

  isSuccess() {
    return true;
  }

  isFail() {
    return false;
  }

  ap(otherContainer) { // has to be at least a functor
    return otherContainer instanceof Fail
      ? otherContainer
      : otherContainer.map(this.value)
  }

  cata(failureFn, successFn) {
    return successFn(this.value)
  }

}


class Fail {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  map() {
    return this;
  }

  fmap (fn) {
    return this;
  }

  isSuccess() {
    return false;
  }
  isFail() {
    return true;
  }

  ap(otherContainer) { // has to be a functor
    return otherContainer instanceof Fail
      ? new Fail(this.value.concat(otherContainer.value))
      : this
  }

  cata(failureFn, successFn) {
    return failureFn(this.value)
  }

}

class Validation {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }

  static Success(x) {
    return new Success(x)
  }

  static Fail(x) {
    return new Fail(x)
  }

  static of(x) {
    return Validation.Success(x);
  }
}
