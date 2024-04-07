globalThis.increase = function increase(a, b) {
  return a + b
}

globalThis.decrease = function decrease(a, b) {
  return a - b
}

function chain(initialValue) {
  let result = initialValue;

  return {
      increase: function(amount) {
          result = increase(result, amount);
          return this;
      },
      decrease: function(amount) {
          result = decrease(result, amount);
          return this;
      },
      end: function() {
          return result;
      }
  };
}

console.log(chain(3).increase(2).decrease(5).end()) // 0
console.log(chain(2).decrease(1).end()) // 1
