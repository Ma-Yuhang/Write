function request(time, value) {
  console.time(value)
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value)
      }, time)
    }).then(() => {
      console.timeEnd(value)
    })
}
class TaskSheduler {
  constructor(max = 2) {
    this.maxTaskNum = max
    this.tasks = []
    this.runningTask = 0
  }
  run() {
    if (this.runningTask >= this.maxTaskNum) {
      return
    }
    if (this.tasks.length <= 0) {
      return
    }
    // 方法1：push一个对象，包含task，resolve，reject
    // const { task, resolve, reject } = this.tasks.shift()
    // this.runningTask++
    // task()
    //   .then(resolve, reject)
    //   .finally(() => {
    //     this.runningTask--
    //     this.run()
    //   })
    // 方法2：push一个函数，函数返回一个Promise
    const task = this.tasks.shift()
    this.runningTask++
    // task有可能不是Promise，所以需要用Promise.resolve包装一下
    Promise.resolve()
      .then(task)
      .finally(() => {
        this.runningTask--
        this.run()
      })
  }
  addTask(task) {
    return new Promise((resolve, reject) => {
      // 方法1.可以push一个对象，包含task，resolve，reject
      // this.tasks.push({
      //   task,
      //   resolve,
      //   reject,
      // })
      // 方法2.可以push一个函数，函数返回一个Promise
      this.tasks.push(() => task().then(resolve, reject))
      this.run()
    })
  }
}

const sheduler = new TaskSheduler()
// 完成TaskSheduler类，实现并发控制

// 如果设置并发数为2，则1秒后打印商品1，2秒后打印商品2，3秒后打印商品3，4秒后打印商品4
// 1秒后打印商品1
sheduler.addTask(request(1000, '商品1'))
// 2秒后打印商品2
sheduler.addTask(request(2000, '商品2'))
// 4秒后打印商品3
sheduler.addTask(request(3000, '商品3'))
// 6秒后打印商品4
sheduler.addTask(request(4000, '商品4'))
