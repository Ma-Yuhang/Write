function add(a, b, c, d) {
  return a + b + c + d
}

function curry(...args) {
  let fn = args[0]
  let data = args.slice(1)
  if (data.length === fn.length) {
    // 说明参数已经够了
    return fn.apply(this, data)
  }
  function _curry(...params) {
    data.push(...params)
    if (data.length === fn.length) {
      return fn.apply(this, data)
    }
    return _curry
  }

  return _curry
}

console.log(curry(add, 1, 2, 3, 4));
console.log(curry(add, 1, 2)(3, 4));
console.log(curry(add)(1)(2)(3)(4));