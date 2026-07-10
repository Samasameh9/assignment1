let createCounter = function (init) {
  let current = init;
  return {
    increment() {
      return ++current;
    },
    decrement() {
      return --current;
    },
    reset() {
      current = init;
      return current;
    },
  };
};
const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement());     