// function createProxy(value = 0) {
//   const primitive = () => value
//   return new Proxy(
//     {},
//     {
//       get(target, key) {
//         if (key === Symbol.toPrimitive) {
//           return primitive
//         }
//         // 对象转原始 Symbol.toPrimitive -> valueOf -> toString
//         // 因为对象转原始 先看的是Symbol.toPrimitive方法
//         // 所以当key === Symbol.toPrimitive的时候就必须直接返回了
//         // 要不然Number(Symbol.toPrimitive) 的时候就报错，来不及运行valueOf和后边的toString方法
//         return createProxy(value + Number(key))
//       },
//     }
//   )
// }
function createProxy() {
  const proxy = new Proxy(
    { value: 0 },
    {
      get(target, key) {
        if (key === Symbol.toPrimitive) {
          const value = target.value
          target.value = 0
          return () => value
        }
        target.value = target.value + Number(key)
        return proxy
      },
    }
  )
  return proxy
}
const add = createProxy()

console.log(add[1][2] + 3) // 6
console.log(add[10][2] + 30) // 42
console.log(add[1] + 1) // 2
