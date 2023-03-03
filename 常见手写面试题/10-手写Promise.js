class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.value = value;
        this.status = 'fulfilled';
        queueMicrotask(() => {
          this.onFulfilledCallbacks.forEach((cb) => cb());
        })
      }
    };

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        queueMicrotask(() => {
          this.onRejectedCallbacks.forEach((cb) => cb());
        })
      }
    };

    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          let x = onFulfilled(this.value);
          x instanceof Promise ? x.then(resolve, reject) : resolve(x);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason);
          x instanceof Promise ? x : reject(x);
        });
      } else if (this.status === 'fulfilled') {
        queueMicrotask(() => { // 放入微队列中
          let x = onFulfilled(this.value);
          x instanceof Promise ? x.then(resolve, reject) : resolve(x);
        })
      } else if (this.status === 'rejected') {
        queueMicrotask(() => { // 放入微队列中
          let x = onRejected(this.reason);
          x instanceof Promise ? x.then(resolve, reject) : resolve(x);
        })
      }
    })
  }
  catch(fn) {
    return this.then(null, fn)
  }
}

const p = new Promise((resolve, reject) => {
  resolve(1000);
}).then(
  (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      reject(1)
    })
  }
).catch((err) => {
  console.log(err);
})