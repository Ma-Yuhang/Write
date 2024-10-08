const arr = [2, 1, 5, 3, 6, 4, 8, 9, 7]
function getSeqence(arr) {
  let maxLength = 0
  let longestSeq = []

  /**
   * 递归获取最长递增子序列
   * @param {*} index 当前遍历的索引
   * @param {*} subSeq 当前递增子序列
   */
  function getSubSeqence(index, subSeq) {
    const newSeq = [...subSeq, arr[index]]

    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] > arr[index]) {
        getSubSeqence(i, newSeq)
      }
    }
    // 相当于找到了所有的递增子序列
    // console.log(newSeq)
    if (newSeq.length > maxLength) {
      maxLength = newSeq.length
      longestSeq = newSeq
    }
  }
  for (let i = 0; i < arr.length; i++) {
    getSubSeqence(i, [])
  }
  return longestSeq
}

console.log(getSeqence(arr))
