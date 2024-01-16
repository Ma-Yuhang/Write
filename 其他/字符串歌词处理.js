const str = `[00:01.06]刘德华
[03:03.16]哈哈哈哈哈`
// 将字符串转成数组，然后里边是一个一个的对象
// [
//   {
//     time: 1.06,
//     word: '刘德华'
//   }
//   {
//     time: 183.06,
//     word: '刘德华'
//   }
// ]
function parseStr(str) {
  let arr = str.split('\n').map(item => item.split(']'))
  console.log(arr);
  let newArr = arr.map(item => {
    let timeArr = item[0].slice(1).split(':')
    return {
      time: timeArr[0] * 60 + +timeArr[1],
      word: item[1]
    }
  });
  return newArr
}
console.log(parseStr(str));