Function.prototype.myApply = function (ctx, arr) {
  ctx = ctx == null ? globalThis : Object(ctx)
  const key = Symbol('key')
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this,
  })
  var result = ctx[key](...arr)
  delete ctx[key]
  return result
}
function aaa(a, b) {
  console.log(this, a, b)
  return a + b
}
console.log(aaa.myApply({}, [1, 2]))
