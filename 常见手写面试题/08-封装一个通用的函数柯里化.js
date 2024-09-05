function add(a, b, c, d) {
  return a + b + c + d
}

// function curry(fn, ...args) {
//   const data = [...args]
//   if (data.length === fn.length) {
//     // 说明参数已经够了
//     return fn.apply(this, data)
//   }
//   function _curry(...rest) {
//     data.push(...rest)
//     if (data.length === fn.length) {
//       return fn.apply(this, data)
//     }
//     return _curry
//   }

//   return _curry
// }
function curry(fn, ...args) {
  if (args.length === fn.length) {
    return fn.apply(this, args)
  }
  return function (...rest) {
    return curry(fn, ...args, ...rest)
  }
}

console.log(curry(add, 1, 2, 3, 4))
console.log(curry(add, 1, 2)(3, 4))
console.log(curry(add)(1)(2)(5)(4))
