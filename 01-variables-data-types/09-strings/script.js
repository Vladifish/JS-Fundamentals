// despite all of this, string is still a primitive data type
var name = "hi"
let x = `${name} General Kenobi`
console.log(x);
console.log(x[0]) // returns h
console.log(x.toUpperCase())
console.log(x.indexOf('h'))
console.log(x.slice(-2, -1))
console.log(x.trim())
console.log(x.split('')) // returns the full string as an array