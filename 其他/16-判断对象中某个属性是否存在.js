const symbol = Symbol('key')

const obj = {
  a: 1,
  [symbol]: 2,
}

Object.defineProperty(obj, 'b', {
  value: 2,
  enumerable: false,
})

obj.__proto__.c = 3

// 可以判断 原型上的、自身的 所有属性中某个属性是否存在 Reflect.has()
console.log('c' in obj, 'in操作符');

// 可以判断 自身的 所有属性中某个属性是否存在（Object.hasOwn() 取代 hasOwnProperty）
console.log(Object.hasOwn(obj, symbol), 'Object.hasOwn()');

// 自身的 可遍历属性，不包括symbol类型
console.log(Object.keys(obj), 'Object.keys()');

// 自身和原型上的 可遍历属性，不包括symbol类型
// for (const key in obj) {
//   console.log(key);
// }

// 自身所有的属性（包括symbol）
console.log(Reflect.ownKeys(obj), 'Reflect.ownKeys()')

// 自身的 除了symbol类型以外的 所有属性
console.log(Object.getOwnPropertyNames(obj), 'Object.getOwnPropertyNames()')
