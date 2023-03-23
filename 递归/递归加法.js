// 使用递归从1到某个数
function fn(n) {
  if (n === 1) return 1
  return n + fn(n - 1)
}
console.log(fn(100));

// 使用递归从一个数加到另一个数
let x = 2, y = 100
function fn2(x, y) {
  if (x === y) return x
  return y + fn2(x, y - 1)
}
console.log(fn2(x, y));