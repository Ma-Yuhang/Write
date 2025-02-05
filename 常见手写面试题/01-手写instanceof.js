let arr = []
console.log(arr instanceof Object)
console.log(arr instanceof RegExp)
console.log(arr instanceof Array)
console.log('s' instanceof Object)
function myInstanceof(example, type) {
  // 如果不是对象或函数，直接返回 false（原始值不在原型链上）
  if (example === null || typeof example !== 'object') return false
  const typePrototype = type.prototype
  let proto = Object.getPrototypeOf(example)
  while (proto) {
    if (proto === typePrototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
console.log(myInstanceof(arr, Object)) // true
console.log(myInstanceof(arr, RegExp)) // false
console.log(myInstanceof(arr, Array)) // true
