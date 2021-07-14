
let arr = [6, 9, 21]

let gcd = function(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  while (a != b) {
    if (a > b) a -= b
    else b -= a
  }
  return a
}

let gcdArr = function(arr) {
  let gcdres = gcd(arr[0], arr[1])
  for (let i=3; i<arr.length; i++) {
    gcdres = gcd(gcdres, arr[i])
  }
  return gcdres
}

console.log(gcdArr(arr))