function sortArr(arr) {
  const n = arr.length
  let pos = 0
  
  // move strings start
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] === 'string') {
      [arr[pos], arr[i]] = [arr[i], arr[pos]]
      pos++
    }
  }

  // Bubble sort
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }

  return arr;
}

let test = sortArr([12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B', 100])
console.log(test)

module.exports = sortArr
