// rtt：请求的往返时间
/**
 * 求一堆ip地址中最短的rtt的ip
 * 1.先对ip数组按照并发数进行分组，第一组算出最短的rtt时间
 * 2.第二组运行过程中，如果超过了第一组最短的rtt时间，则终止第二组，返回第一组最短的rtt时间，
 *   否则继续，并且更新最短的rtt时间
 * @param {Array} ipArr ip数组
 * @param {Number} parallelCount 并发数量
 */
async function getShortestRTT(ipArr, parallelCount = 10) {
  // 分组 [[ip1,ip2,ip3,...], [], [], ...]
  const ipGroups = chunk(ipArr, parallelCount)
  let result = {
    ip: '',
    rtt: Infinity,
  }
  for (const ipGroup of ipGroups) {
    const temp = await race(ipGroup, result.rtt)
    if (temp) {
      result = temp
    }
  }

  return result
}

function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

/**
 * 与上一组的最短rtt时间比较，如果时间大于上一组则返回null，否则返回当前组的最短rtt和对应的ip
 * @param {Array} ipArr 每一组的ip数组
 * @param {Number} rtt 上一组的最短rtt时间
 * @returns
 */
function race(ipArr, rtt) {
  return new Promise((resolve) => {
    const controller = new AbortController()
    const signal = controller.signal
    setTimeout(() => {
      // 已经超过了上一组的rtt时间，终止所有请求
      resolve(null)
      controller.abort()
    }, rtt)
    for (const ip of ipArr) {
      const start = Date.now()
      fetch(`http://${ip}/api`, { signal }).then(() => {
        resolve({
          ip,
          rtt: Date.now() - start,
        })
        // 终止剩下的所有请求
        controller.abort()
      })
    }
  })
}
