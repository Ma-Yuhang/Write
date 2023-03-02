/**
 * 将一个数组分割为指定大小的分组
 * 如果数组不能被均分，最后一个分组收纳剩余元素
 * @param {Array} array 待处理的数组
 * @param {number} [size] 每个分组的大小
 * @return {Array} 返回一个新数组
 * @example 
 * chunk(['a','b','c','d'], 2) => [['a','b'],['c','d']]
 * chunk(['a','b','c','d'], 3) => [['a','b','c'],['d']]
 */

function _chunk(arr, num) {
  let res = []
  for (let i = 0; i < arr.length; i += num) {
    res.push(arr.slice(i, i + num))
  }

  return res
}
console.log(_chunk(['a', 'b', 'c', 'd'], 3));
