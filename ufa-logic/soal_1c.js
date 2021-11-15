function countChar(str) {
  let strarr1 = str.replace(' ', '').split('')
  .sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))

  let strarr2 = strarr1.filter((item, index, arr) => arr.indexOf(item) === index)
  let result = {}

  for (let i = 0; i < strarr2.length - 1; i++) {
    if (strarr2[i].charCodeAt(0) > strarr2[i+1].charCodeAt(0) && strarr2[i].toLowerCase() === strarr2[i+1].toLowerCase()) {
      [strarr2[i], strarr2[i+1]] = [strarr2[i+1], strarr2[i]]
      i += 1
    }
  }
  
  strarr2.forEach(item => {
    result[item] = 0
  });

  strarr1.forEach(item => {
    result[item] += 1
  })

  return result
}

let test = countChar('MasyaAllah');
console.log(test)

module.exports = countChar