globalThis.increase = function increase(n) {
  return n + 1
}

globalThis.decrease = function decrease(n) {
  return n - 1
}

globalThis.double = function double(n) {
  return n * 2
}

// function chain(n) {
//   return {
//     get increase() {
//       return chain(n + 1)
//     },
//     get decrease() {
//       return chain(n - 1)
//     },
//     get double() {
//       return chain(n * 2)
//     },
//     get end() {
//       return n
//     }
//   }
// }
function chain(num) {
  return new Proxy(
    {},
    {
      get(target, key) {
        if (key === 'end') {
          return num
        }
        if (typeof globalThis[key] === 'function') {
          return chain(Number(globalThis[key](num)))
        }
        return target[key]
      },
    }
  )
}
// function chain(n) {
//   const proxy = new Proxy(
//     { n },
//     {
//       get(target, key) {
//         if (key === 'end') {
//           return target.n
//         }
//         if (typeof globalThis[key] === 'function') {
//           target.n = globalThis[key](target.n)
//           return proxy
//         }
//         return target[key]
//       },
//     }
//   )
//   return proxy
// }

console.log(chain(3).increase.double.end) // 8
console.log(chain(2).decrease.double.end) // 2
