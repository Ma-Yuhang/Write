let str = 'AdMa bad'
function fn(str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      res += ' '
    }
    // 小写变大写
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt(0) <= 122) {
      res += str[i].toUpperCase()
    }
    // 大写变小写
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt(0) <= 90) {
      res += str[i].toLowerCase()
    }
  }
  return res
}
console.log(fn(str));
console.log('A'.charCodeAt()); // 65
console.log('A'.charCodeAt()); // 90
console.log('a'.charCodeAt()); // 97
console.log('z'.charCodeAt()); // 122
console.log(' '.charCodeAt()); // 32