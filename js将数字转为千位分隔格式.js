let num = 1223
function fn(num) {
  let str = String(num)
  let index = 0
  let len = str.length - 1
  let res = ''
  while (len >= 0) {
    index % 3 === 0 && index !== 0 ? res += ',' + str[len] : res += str[len]
    len--
    index++
  }
  return res.split('').reverse().join('')
}
console.log(fn(num));

function fn1(num) {
  let str = String(num)
  return str.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
    return s + ','
  })
}
console.log(fn1(num));