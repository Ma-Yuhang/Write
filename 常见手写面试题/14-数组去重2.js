// 数组去重(如果对象的属性和值都相等，则看做这个对象相等)
let arr = [
  'a',
  { a: 1, b: undefined },
  [1, 2],
  [1, 2],
  { a: 1, c: undefined },
  'a',
  1,
  1,
]

function isObject(val) {
  // return typeof val === 'object' && val !== null
  return val === Object(val)
}

function equals(val1, val2) {
  if (isObject(val1) && isObject(val2)) {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false
    }
    for (const key in val1) {
      if (!Object.keys(val2).includes(key)) {
        return false
      }
      if (!equals(val1[key], val2[key])) {
        return false
      }
    }
    return true
  } else {
    return Object.is(val1, val2)
  }
}

function fn1(arr) {
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (equals(newArr[i], newArr[j])) {
        newArr.splice(j, 1)
        j--
      }
    }
  }
  return newArr
}

function fn2(arr) {
  const result = []
  // 为外层循环打上标记（原生js就有的语法）
  outer: for (const item of arr) {
    for (const r of result) {
      if (equals(r, item)) {
        // 外层循环继续下一次
        continue outer
      }
    }
    result.push(item)
  }
  return result
}

console.log(fn2(arr))
