let str = 'ab cD'

function fn(str) {
  return str.replace(/[a-zA-Z]/g, (s, index, self) => {
    return change(s)
  })
}

function change(s) {
  return s.charCodeAt() >= 97 && s.charCodeAt() <= 122
    ? s.toUpperCase()
    : s.toLowerCase();
}


// function fn(str) {
//   let res = ''
//   for (const s of str) {
//     res += change(s)
//   }
//   function change(s) {
//     if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) {
//       return s.toUpperCase()
//     } else if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) {
//       return s.toLowerCase()
//     } else {
//       return s
//     }
//   }
//   return res
// }
console.log(fn(str));
console.log('A'.charCodeAt()); // 65
console.log('Z'.charCodeAt()); // 90
console.log('a'.charCodeAt()); // 97
console.log('z'.charCodeAt()); // 122
console.log(' '.charCodeAt()); // 32

// function fn(str) {
//   let res = ''
//   for (const s of str) {
//     res += change(s)
//   }
//   function change(s) {
//     if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) {
//       return s.toUpperCase()
//     } else if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) {
//       return s.toLowerCase()
//     } else {
//       return s
//     }
//   }
//   return res
// }