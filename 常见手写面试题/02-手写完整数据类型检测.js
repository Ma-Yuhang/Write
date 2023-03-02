// ; (function () {
//     var class2type = {};
//     var toString = class2type.toString;
//     // ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol']
//     //     .forEach(name => {
//     //         class2type[`[object ${name}]`] = name.toLowerCase();
//     //     });
//     // console.log(class2type);
//     // function toType(obj) {
//     //     if (obj == null) {
//     //         return obj + '';
//     //     }
//     //     return typeof obj === 'object' || typeof obj === 'function' ?
//     //         class2type[toString.call(obj)] || 'object' : typeof obj;
//     // }

//     ['Array', 'Date', 'RegExp', 'Object', 'Error']
//         .forEach(name => {
//             class2type[`[object ${name}]`] = name.toLowerCase();
//         });
//     console.log(class2type);
//     function toType(obj) {
//         if (obj === null) {
//             return obj + '';
//         }
//         return typeof obj === 'object' ?
//             class2type[toString.call(obj)] : typeof obj;
//     }

//     window.toType = toType
// })()
function toType(obj) {
    if (obj === null) {
        return null + ''
    }
    return typeof obj === 'object' ? Object.prototype.toString.call(obj).slice(8, -1) : typeof obj
}
console.log(toType(undefined));