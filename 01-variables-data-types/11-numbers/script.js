let x;
const num = new Number(5);
x = num.toString().length; // 1

x = 10.12381092389;
console.log(x.toFixed(2)); // 2-decimal places, outputs 10.12
console.log(x.toPrecision(1)); // outputs 1