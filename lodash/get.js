/**
 * 得到对象中的某个属性
 * @param {Object} 传入一个对象
 * @param {String|Array} 要取的属性
 * @param {any} 取不到时的默认值
 * @example
 * get(a:[{b:{c:3}}]},'a[0].b.c')
 * get(a:[{b:{c:3}}]},['a','0','b','c'])
 */
let obj = { a: [{ b: { c: 3 } }] }
function _get(object, path, defaultValue) {
  let obj = object
  if (typeof path == 'string') {
    path = path.match(/[^\[|\]\.]+/g)
  }
  for (const key of path) {
    if (!obj) {
      return defaultValue
    }
    obj = obj[key]
  }
  return obj || defaultValue
}
console.log(_get(obj, ['a', 0, 'b', 'k'], 'default'));
console.log(_get(obj, 'a[0].b.c', 'default'));
