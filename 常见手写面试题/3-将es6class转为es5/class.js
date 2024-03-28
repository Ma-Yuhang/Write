class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`Hi, my name is ${this.name}`)
  }
  greetDelay(time) {
    setTimeout(() => {
      console.log(`Hi, my name is ${this.name}`)
    }, time)
  }
}
let e = new Person('zs')
e.greetDelay(1000)
