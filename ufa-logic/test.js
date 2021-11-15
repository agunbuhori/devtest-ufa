const sortArr = require('./soal_1a')
const pattern_count = require('./soal_1b')
const countChar = require('./soal_1c')

const test = (title, result, expected) => {
  let equality = false

  if (typeof result === 'object') {
    equality = JSON.stringify(result) === JSON.stringify(expected)
  } else {
    equality = result === expected
  }

  if (equality) {
    console.log('\x1b[32m', title, 'Passed')
  } else {
    console.log('\x1b[31m', title, 'Failed')
  }
}

test('Test sort 1', sortArr([12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B', 100]), ['A', 'B', 'J', 'M', 'N', 9, 12, 30, 82, 99, 100])
test('Test sort 2', sortArr(['K', 87, 'M', -1, 'L', 26, -99, 'Y']), ['K', 'L', 'M', 'Y', -99, -1, 26, 87])
test('Test sort 3', sortArr(['G', 8, 'O', 25, 'A', 35]), ['A', 'G', 'O', 8, 25, 35])

test('Test pattern 1', pattern_count('palindrom', 'ind'), 1) // expected output 1
test('Test pattern 2', pattern_count('abakadabra', 'ab'), 2) // expected output 2
test('Test pattern 3', pattern_count('hello', ''), 0) // expected output 0
test('Test pattern 4', pattern_count('ababab', 'aba'), 2) // expected output 2
test('Test pattern 5', pattern_count('aaaaaa', 'aa'), 5) // expected output 5
test('Test pattern 6', pattern_count('hell', 'hello'), 0) // expected output 5

test('Test count char 1', countChar('Hello World'), { d: 1, e: 1, H: 1, l: 3, o: 2, r: 1, W: 1 })
test('Test count char 2', countChar('Bismillah'), { a: 1, B: 1, h: 1, i: 2, l: 2, m: 1, s: 1 })
test('Test count char 3', countChar('MasyaAllah'), { a: 3, A: 1, h: 1, l: 2, M: 1, s: 1, y: 1 }) // seharusnya benar jika sesuai intruksi
test('Test count char 4', countChar('Baarakallah'), { a: 5, B: 1, h: 1, k: 1, l: 2, r: 1 }) 