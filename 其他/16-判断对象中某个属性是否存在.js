const symbol = Symbol('key')


const obj = {
  a: 1,
  [symbol]: 2
}

Object.defineProperty(obj, 'b', {
  value: 2,
  enumerable: false
})

obj.__proto__.c = 3

// console.log('c' in obj); // 原型上的、自身的所有属性 底层使用的Reflect.has()
// console.log(obj.hasOwnProperty(symbol)); // 自身的所有属性
// console.log(Object.keys(obj));   // 不包括原型上的、自身可遍历的属性(不包括symbol类型)
// // 自身和原型上的可遍历属性（不包括symbol）
// for (const key in obj) {
//   console.log(key);
// }
console.log(Reflect.ownKeys(obj)); // 不包括原型上的、自身所有的属性（包括symbol）
