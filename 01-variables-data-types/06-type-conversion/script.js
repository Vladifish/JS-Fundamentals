// converting string to integer
// Useful terms:: NaN : not a number
let amount = '10hello'; 
console.log(parseInt(amount)) // outputs 10
console.log(10 + '5'); // 105
var amt = '5';
console.log(+amt + 10); // 15
console.log(Number(amt));


amount = '12345.6';
console.log(parseFloat(amount)); // makes it a float value
console.log(Math.sqrt(-1)) // NaN
console.log(1 + NaN) // NaN
console.log(null + null); // 0
console.log('undefined')

console.log(!'a'); // false, since 'a' is a truthy value