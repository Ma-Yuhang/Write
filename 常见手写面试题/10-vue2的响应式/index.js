
// 1.订阅器模型
let Dep = {
    clientList: {},
    // 添加订阅者
    listen: function (key, fn) {
        // if (!this.clientList[key]) {
        //     this.clientList[key] = []
        // }
        // this.clientList[key].push(fn)
        (this.clientList[key] || (this.clientList[key] = [])).push(fn)
    },
    // 推送方法
    trigger: function () {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key]
        console.log(key);
        if (!fns || fns.length === 0) {
            return false
        }
        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }
}

let dataHijack = function ({ data, tag, datakey, selector }) {
    let value = '',
        el = document.querySelector(selector);
    Object.defineProperty(data, datakey, {
        get() {
            console.log('访问了');
            return value
        },
        set(val) {
            console.log('修改了');
            value = val
            Dep.trigger(tag, val)
        }
    })
    // 添加订阅者
    Dep.listen(tag, function (text) {
        el.innerHTML = text
    })
}