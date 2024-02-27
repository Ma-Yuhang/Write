const serial = ['Red', 'Yellow', 'Green']

function delay(duration = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
class SignalLamp {
  // 得到下一个信号灯
  get next() {
    return serial[(serial.indexOf(this.sig) + 1) % serial.length]
  }
  // 当前信号灯还剩多长时间
  get remain() {
    let diff = this.end - Date.now()
    if (diff < 0) {
      diff = 0
    }
    return diff / 1000
  }
  constructor(options) {
    this.sig = options.sig
    this.times = options.times
    this.eventMap = new Map()
    this.eventMap.set('change', new Set())
    this.eventMap.set('tick', new Set())
    this.setTime()
    this.exchange()
  }

  on(event, handler) {
    this.eventMap.get(event).add(handler)
  }
  off(event, handler) {
    this.eventMap.get(event).delete(handler)
  }
  emit(event) {
    this.eventMap.get(event).forEach(h => {
      h.call(this, this)
    })
  }

  async exchange() {
    await 1
    if (this.remain > 0) {
      this.emit('tick')
      // 等待一秒钟再判断
      await delay(1000)
    } else {
      this.sig = this.next
      this.setTime() // 重新记录时间
      this.emit('change')
    }
    this.exchange()
  }

  setTime() {
    this.start = Date.now()
    this.end = this.start + this.times[serial.indexOf(this.sig)] * 1000
  }
}
let s = new SignalLamp({
  sig: 'Green', // 当前信号灯
  times: [10, 3, 5] // 红灯10s 黄灯3s 绿灯5s
})
s.on('tick', (e) => {
  console.log(e.sig, Math.round(e.remain));
})
s.on('change', (e) => {
  console.log('切换了');
})