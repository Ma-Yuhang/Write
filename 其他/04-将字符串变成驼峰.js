// 使用正则
let str = 'get_element_by_id'

function fn(str) {
  return str.replace(/_[a-z]/g, (target, index, self) => {
    console.log(target, index, self)
    return str[index + 1].toUpperCase()
  })
}
console.log(fn(str))
