const people = [
  { name: 'ma', age: 20, sex: '男' },
  { name: 'yu', age: 25, sex: '男' },
  { name: 'hang', age: 30, sex: '男' },
  { name: 'ma', age: 30, sex: '女' },
  { name: 'yu', age: 20, sex: '女' },
  { name: 'hang', age: 25, sex: '男' },
  { name: 'ma', age: 20, sex: '女' },
]

function groupBy(arr, generateKey) {
  if (typeof generateKey === 'string') {
    const propName = generateKey
    generateKey = (item) => item[propName]
  }
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    const propName = generateKey(arr[i], i, arr)
    if (!result[propName]) {
      result[propName] = []
    }
    result[propName].push(arr[i])
  }
  return result
}

console.log(groupBy(people, 'age'))
console.log(groupBy(people, 'sex'))
console.log(
  groupBy(people, (item) => (item.name.includes('m') ? '包含m' : '不包含m'))
)
