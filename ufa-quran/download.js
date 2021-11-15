const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

for (let i = 1; i <= 114; i++) {
  const file = fs.createWriteStream("hasil/surah"+i+".svg");
  const request = http.get("https://cdn.muflihun.com/qimages-c/"+i+".svg", function(response) {
    response.pipe(file);
  });
}