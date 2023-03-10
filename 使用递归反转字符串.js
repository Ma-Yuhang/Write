// 递归反转字符串
let str = 'Hello, World!'
// abc  
// reverseStr(bc) + a
// reverseStr(c) + a + b
// c + a + b
function reverseStr(str) {
  return str.length === 1 ? str : reverseStr(str.slice(1)) + str.slice(0, 1)
}
console.log(reverseStr(str));