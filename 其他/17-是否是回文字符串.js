const str = 'R,labalr'

function fn(str) {
  if (str.length === 1) return true
  let i = 0,
    j = str.length - 1
  while (i < j) {
    if (!effectiveStr(str[i])) {
      i++
    } else if (!effectiveStr(str[j])) {
      j--
    } else if (effectiveStr(str[i]) !== effectiveStr(str[j])) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
  function effectiveStr(s) {
    if (/[a-zA-Z]/.test(s)) {
      return s.toLowerCase()
    }
  }
}
console.log(fn(str))
