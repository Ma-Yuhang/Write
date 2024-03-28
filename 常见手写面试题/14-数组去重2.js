// 数组去重(如果对象的属性和值都相等，则看做这个对象相等)
let arr = ['a', { a: 1 }, { a: 1 }, 'a', 1, 1]

function fn(arr) {
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (equals(newArr[i], newArr[j])) {
        newArr.splice(j, 1)
        j--
      }
    }
  }
  function equals(val1, val2) {
    if (
      typeof val1 === 'object' &&
      val1 !== null &&
      typeof val2 === 'object' &&
      val2 !== null
    ) {
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
      return val1 === val2
    }
  }
  return newArr
}
console.log(fn(arr))
