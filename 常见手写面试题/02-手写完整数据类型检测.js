function toType(obj) {
  if (obj === null) {
    return null + ''
  }
  return typeof obj === 'object'
    ? Object.prototype.toString.call(obj).slice(8, -1)
    : typeof obj
}
console.log(toType(undefined))
