let str = '<div>asdivvvvdivda</div>'

// ?= 右边是什么
// ?! 右边不是什么
// ?<= 左边是什么
// ?<! 左边不是什么

let res1 = str.replace(/div(?=(\d|[a-zA-Z]))/g,() => {
  return '哈哈'
})
console.log(res1);

// 只匹配第一个div(只匹配左边是s的)
let res2 = str.replace(/(?<=(s))div/g, '第一个')

console.log(res2);