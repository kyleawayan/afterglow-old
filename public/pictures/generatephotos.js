const path = '../pictures/baf'
var sizeOf = require('image-size');

const testFolder = path;
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log('{')
    console.log("src:",`"${path}/previews/${file}",`);
    size = sizeOf(`${path}/${file}`);
    function reduce(numerator,denominator){
      var gcd = function gcd(a,b){
        return b ? gcd(b, a%b) : a;
      };
      gcd = gcd(numerator,denominator);
      return [numerator/gcd, denominator/gcd];
    }
    console.log("width:",reduce(size.width, size.height)[0],",");
    console.log("height:",reduce(size.width, size.height)[1],",");
    console.log("title:",`'<a href="${path}/${file}" target="_blank">Download</a>'`)
    console.log('},')
  });
});