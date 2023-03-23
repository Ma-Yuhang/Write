// forEach的第二个参数可以改变this指向
Array.prototype.myforEach = function (callback, content) {
    let self = this
    let len = this.length
    content = content == null ? window : content;
    for (let i = 0; i < len; i++) {
        typeof callback === 'function' ? callback.call(content, self[i], i, self) : null;
    }
    // console.log(this);
};
[1, 2, 3, 4].myforEach(function (item, i, arr) {
    console.log(item);
    // console.log(i);
    // console.log(arr);
    console.log(this);
}, {})