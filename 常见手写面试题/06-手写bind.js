Function.prototype.myBind = function (ctx, ...params) {
    let _this = this;
    // return function () {
    //     return _this.myCall(ctx, ...args)
    // }
    return function (...args) {
        console.log(args);
        console.log(params);
        console.log(params.concat(args));
        return _this.apply(ctx, params.concat(args))
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
bb(4, 5)