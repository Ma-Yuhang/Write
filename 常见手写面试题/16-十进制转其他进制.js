// 十进制转成其他进制
// num 十进制的数
// n进制
function tenToOther(num, n) {
  if (typeof num !== 'number') return
  let res = []
  while (num > 0) {
    res.unshift(num % n)
    num = parseInt(num / n)
  }
  return res.join('')
}
console.log(tenToOther(10, 8))
