function countChar(str) {
  let strarr = str.replace(' ', '').split('').sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))

  let result = {}
  for (let i = 0; i < strarr.length; i++) {  
    if (result[strarr[i]]) {
      result[strarr[i]]++
    } else {
      result[strarr[i]] = 1
    }
  }

  return result
}

let test = countChar('Hello World');
console.log(test)

module.exports = countChar