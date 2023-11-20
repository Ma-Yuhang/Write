const cache = new WeakMap()
let obj = {
    a: undefined,
    b: { name: 'mayuhang', age: 18 },
    c: [
        {
            e: 1,
            d: undefined
        },
        {
            f: 200,
            d: [1, 2, 3]
        }
    ]
}
function deepClone(source) {
    if (typeof source !== 'object' || source === null) {
        return source
    }
    if (cache.has(source)) {
        return cache.get(source)
    }
    const result = Array.isArray(source) ? [] : {}
    // 设置原型 跟source保持一致
    Object.setPrototypeOf(result, Object.getPrototypeOf(source))
    // 设置缓存
    cache.set(source, result)
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            result[key] = deepClone(source[key])
        }
    }
    return result
}
obj.f = obj
let newObj = deepClone(obj)

console.log(obj, newObj);
