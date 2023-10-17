const people = [
  { name: 'ma', age: 20, sex: '男' },
  { name: 'yu', age: 25, sex: '男' },
  { name: 'hang', age: 30, sex: '男' },
  { name: 'ma', age: 30, sex: '女' },
  { name: 'yu', age: 20, sex: '女' },
  { name: 'hang', age: 25, sex: '男' },
  { name: 'ma', age: 20, sex: '女' }
]

function groupBy(arr, fn) {
  let result = {}
  for (const person of arr) {
    const key = fn(person)
    if(!result[key]) {
      result[key] = []
    }
    result[key].push(person)
  }
  return result
}

console.log(groupBy(people, (item) => item.age));
console.log(groupBy(people, (item) => item.sex));
console.log(groupBy(people, (item) => item.name.includes('m') ? '包含m' : '不包含m'));