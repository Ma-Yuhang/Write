// 1 1 2 3 5 8 13 21 34 55
// 输入一个数，返回这个下标的数字
function fn(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return fn(n - 1) + fn(n - 2)
}
console.log(fn(2));

function fib1(n) {
    let top = 1, bottom = 0, res = 1
    for (let i = 0; i < n; i++) {
        res = top + bottom
        bottom = top
        top = res
    }
    return res
}
console.log(fib1(2));

// 输入一个数，返回一个数组(例如： 输入4 返回：[1,1,2,3])
function fib2(n) {
    if (n == 0) return []
    let arr = []
    let top = 1, bottom = 0, res = 1
    for (let i = 0; i < n - 1; i++) {
        res = top + bottom
        bottom = top
        top = res
        arr.push(res)
    }
    arr.unshift(1)
    return arr
}
console.log(fib2(2));