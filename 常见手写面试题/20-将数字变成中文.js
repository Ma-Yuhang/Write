/**
 * 数字转中文
 * @param {number} num 万亿以下的正整数
 * @returns {string}
 */
function toChineseNumber(num) {
  const numStr = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ',')
    .split(',')
    .filter(Boolean)
  const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const units = ['', '十', '百', '千']
  const bigUnits = ['', '万', '亿']
  function handleZero(str) {
    return str.replace(/零{2,}/g, '零').replace(/零+$/g, '')
  }
  function _transform(n) {
    if (n === '0000') {
      return chars[0]
    }
    let result = ''
    for (let i = 0; i < n.length; i++) {
      const c = chars[+n[i]]
      let u = units[n.length - 1 - i]
      if (c === chars[0]) {
        u = ''
      }
      result += c + u
    }
    result = handleZero(result)
    return result
  }
  let result = ''
  for (let i = 0; i < numStr.length; i++) {
    const part = numStr[i]
    const c = _transform(part)
    let u = bigUnits[numStr.length - 1 - i]
    if (c === chars[0]) {
      u = ''
    }
    result += c + u
  }
  result = handleZero(result)
  return result
}

function toBigChineseNumber(num) {
  // 先变成中文
  const str = toChineseNumber(num)
  const map = {
    零: '零',
    一: '壹',
    二: '贰',
    三: '叁',
    四: '肆',
    五: '伍',
    六: '陆',
    七: '柒',
    八: '捌',
    九: '玖',
    十: '拾',
    百: '佰',
    千: '仟',
    万: '萬',
    亿: '亿',
  }
  const res = str
    .split('')
    .map((s) => map[s])
    .join('')
  return res
}

console.log(toChineseNumber(123400004567))
console.log(toBigChineseNumber(123400004567))
