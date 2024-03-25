class MemoizeMap {
  constructor() {
    this._normalMap = new Map()
    this._objectMap = new WeakMap()
  }
  _isObject(value) {
    return !!(value && typeof value === 'object')
  }
  get(key) {
    if (this._isObject(key)) {
      return this._objectMap.get(key)
    }
    return this._normalMap.get(key)
  }
  set(key, value) {
    if (this._isObject(key)) {
      return this._objectMap.set(key, value)
    }
    return this._normalMap.set(key, value)
  }
  has(key) {
    if (this._isObject(key)) {
      return this._objectMap.has(key)
    }
    return this._normalMap.has(key)
  }
}
// 这是业务代码，经过了复杂计算，耗时4s
function delay(n1, n2) {
  const date = Date.now()
  while (Date.now() - date <= 4000) {}
  return n1 + n2
}

function memoize(func, resolver) {
  function memoized(...args) {
    // 确定缓存的键（用户可以自己设置缓存的键）
    const key = resolver ? resolver(...args) : args[0]
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key)
    }
    const result = func.apply(this, args)
    memoized.cache.set(key, result)
    return result
  }
  memoized.cache = new MemoizeMap()
  return memoized
}

const object = { a: 1, b: 2 }
const other = { a: 3, b: 4 }
const values = memoize(delay, () => object)
console.log(values(1,2))
console.log(values(1,2))
// const values = memoize((obj) => Object.values(obj))
// console.log(values(object)) // [1, 2]

// console.log(values(other)) // [3, 4]

// object.a = 11
// console.log(values(object)) // [1, 2]

// values.cache.set(object, { a: 'a', b: 'b' }) // {a: 'a', b: 'b'}
// console.log(values(object))
