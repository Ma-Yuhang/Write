let str = '<div>asddivda</div>'

// ?= 右边是什么
// ?! 右边不是什么
// ?<= 左边是什么
// ?<! 左边不是什么

let res = str.replace(/div(?=(\d|[a-zA-Z]))/g,() => {
  return '哈哈'
})
console.log(res);