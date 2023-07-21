//////////////////  variable  /////////////////////

var a = 142;
var b = 0;
while (a) {
  b += a % 10;
  a = Math.floor(a / 10);
}
console.log(b);

///////////////   recuesive   ///////////////

function sum(a, b = a%10) {
  if (!a) return b;
  else {
    return b += sum(Math.floor(a/10))
  }
}
console.log(sum(145))