'use strict'
function Person(name) {
  if (!(this instanceof Person)) {
    throw new TypeError('只能new调用')
  }
  this.name = name
}

Object.defineProperty(Person.prototype, 'greet', {
  value: function () {
    if (!(this instanceof Person)) {
      throw new TypeError('只能new调用')
    }
    console.log(`Hi, my name is ${this.name}`);
  },
  enumerable: false
})
Object.defineProperty(Person.prototype, 'greetDelay', {
  value: function (time) {
    if (!(this instanceof Person)) {
      throw new TypeError('只能new调用')
    }
    var _this = this
    setTimeout(function () {
      console.log(`Hi, my name is ${_this.name}`);
    }, time)
  },
  enumerable: false
})

let p = Person('aa')
p.greetDelay(10000)