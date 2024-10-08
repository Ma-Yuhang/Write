const arr = [2, 1, 5, 3, 6, 4, 8, 9, 7]
function getSequence(arr) {
  let maxLength = 0
  let longestSeq = []

  const sequence = new Array(arr.length).fill([])
  for (let i = 0; i < arr.length; i++) {
    // 创建一个数组，用来存储以arr[i]结尾的递增子序列
    let seq = [arr[i]]
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        seq = [...sequence[j], arr[i]]
      }
    }
    sequence[i] = seq

    if (seq.length > maxLength) {
      maxLength = seq.length
      longestSeq = seq
    }
  }

  return longestSeq
}

console.log(getSequence(arr))
