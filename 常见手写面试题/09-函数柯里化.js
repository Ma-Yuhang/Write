/**
 * 累加函数
 * @param {*} arr
 * @returns
 */
function selfAdd(arr) {
  return arr.reduce((res, ele) => {
    return res + ele
  }, 0)
}

/**
 * 柯里化函数
 * @param  {...any} args
 * @returns
 */
function add(...args) {
  function inner(...rest) {
    args.push(...rest)
    return inner
  }

  // toString() valueOf()都可以
  inner[Symbol.toPrimitive] = () => {
    return selfAdd(args)
  }

  return inner
}
const res = add(1, 2, 3)(4, 5, 6, 7)(8, 9, 10)
console.log(res + '')
