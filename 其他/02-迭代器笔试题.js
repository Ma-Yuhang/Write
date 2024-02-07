// s1 > s2 return 1
// s1 === s2 return 0
// s1 < s2 return -1
let s1 = '1-4-45-32-5' // 1 4 45 32 5 和 1 4 44 32 5依次比较 最终45 > 44返回1
let s2 = '1-4-44-32-5'


function compare(s1, s2) {
  const iter1 = walk(s1)
  const iter2 = walk(s2)
  while (1) {
    // 取出s1的下一个数字
    const n1 = iter1.next()
    // 取出s2的下一个数字
    const n2 = iter2.next()
    if (n1.done && n2.done) {
      return 0
    } else if (n1.done) {
      return -1
    } else if (n2.done) {
      return 1
    } else if (n1.value > n2.value) {
      return 1
    } else if (n2.value > n1.value) {
      return -1
    }
  }
}

function* walk(str) {
  let part = ''
  for (const s of str) {
    if (s !== '-') {
      part += s
    } else {
      yield +part
      part = ''
    }
  }
  if (part) {
    yield +part
  }
}

console.log(compare(s1, s2));
// const iterator = walk('1-4-45-32-5')

// console.log(iterator.next()) // { value: 1, done: false }
// console.log(iterator.next()) // { value: 4, done: false }
// console.log(iterator.next()) // { value: 45, done: false }
// console.log(iterator.next()) // { value: 32, done: false }
// console.log(iterator.next()) // { value: 5, done: false }
// console.log(iterator.next()) // { value: undefined, done: true }