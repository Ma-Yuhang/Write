// Function.prototype.myCall = function (ctx, ...args) {
//     // globalThis 在浏览器环境下是window 在node环境下是global
//     ctx = ctx == null ? globalThis : Object(ctx)
//     var key = Symbol('key')
//     Object.defineProperty(ctx, key, {
//         enumerable: false,
//         value: this
//     });
//     var result = ctx[key](...args);
//     delete ctx[key];
//     return result;
// }
// function aaa(a, b) {
//     console.log(this, a, b);
//     return a + b;
// };
// console.log(aaa.myCall({}, 2, 3));

Function.prototype.Call = function (ctx, ...args) {
    ctx = ctx == null ? globalThis : Object(ctx)
    let key = Symbol('key')
    // ctx[key] = this
    Object.defineProperty(ctx, key, {
        enumerable: false,
        value: this
    })
    let result = ctx[key](...args)
    delete ctx[key]
    return result
}
function aaa(a, b) {
    console.log(this, a, b);
    return a + b;
};
console.log(aaa.Call({}, 2, 3));