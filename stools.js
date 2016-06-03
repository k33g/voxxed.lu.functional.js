
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
