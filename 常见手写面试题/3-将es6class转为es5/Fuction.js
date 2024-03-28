'use strict' // 1.es6中class使用严格模式
function Person(name) {
  // 2.在class中Person不可直接调用,必须new调用
  if (!new.target) {
    throw new TypeError(
      "Class constructor Person cannot be invoked without 'new'"
    )
  }
  this.name = name
}
Object.defineProperty(Person.prototype, 'greet', {
  value: function () {
    // 4.在class中实例原型上的方法不可new调用
    if (new.target) {
      throw new TypeError('xxx.greet is not a constructor')
    }
    console.log(`Hi, my name is ${this.name}`)
  },
  // 3.class中实例原型上的属性和方法不可枚举
  enumerable: false,
})
Object.defineProperty(Person.prototype, 'greetDelay', {
  value: function (time) {
    // 4.在class中实例原型上的方法不可new调用
    if (new.target) {
      throw new TypeError('xxx.greetDelay is not a constructor')
    }
    var _this = this
    setTimeout(function () {
      console.log(`Hi, my name is ${_this.name}`)
    }, time)
  },
  // 3.class中实例原型上的属性和方法不可枚举
  enumerable: false,
})
var e = new Person('zs')
e.greetDelay(1000)
