function pattern_count(str, substr) {
 const strlen = str.length
 const substrlen = substr.length
 let result = 0;

 if (strlen === 0 || substrlen === 0) return result
 else if (strlen > 100) return 'Maximum 100 characters'

 for (let i = 0; i < strlen - substrlen + 1; i++) {
  if (str.slice(i, i+substrlen) === substr) {
    result++;
  }
 }

 return result
}

let test = pattern_count('aaaaaa', 'aa')
console.log(test)

module.exports = pattern_count