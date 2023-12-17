Function.prototype.myBind = function (ctx, ...params) {
    let fn = this;
    // return function () {
    //     return _this.myCall(ctx, ...args)
    // }
    return function (...args) {
        if (new.target) {
            return new fn(...params, ...args)
        } else {
            return fn.apply(ctx, [...params, ...args])
        }
    }
}
// Function.prototype.myCall = function (ctx, ...args) {
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
function aa(a, b, c, d) {
    console.log(this, a, b, c, d);
}
var bb = aa.myBind({}, 2, 3)
console.log(new bb(4, 5));
