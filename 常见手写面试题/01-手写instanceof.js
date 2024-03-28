let arr = []
console.log(arr instanceof Object)
console.log(arr instanceof RegExp)
console.log(arr instanceof Array)
console.log('s' instanceof Object)
function myInstanceof(example, type) {
  let typePrototype = type.prototype
  let proto = Object.getPrototypeOf(example)
  while (proto) {
    if (proto === typePrototype) {
      return true
    }
    // if (proto === null) {
    //     return false
    // }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
console.log(myInstanceof(arr, Object)) // true
console.log(myInstanceof(arr, RegExp)) // false
console.log(myInstanceof(arr, Array)) // true
