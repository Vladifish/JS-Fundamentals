let capitalizeFirst = (/* str:*/ s) => {
    let cappedFirst = (s.toUpperCase())[0];
    return cappedFirst + s.substring(1);
}
// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
let myNewString = capitalizeFirst(myString);
console.log(myNewString)

// myNewString = '';
// let x = myString.split('');
// x[0] = x[0].toUpperCase();
// for (i = 0; i<x.length; i++) {
//     myNewString += x[i];
// }
// console.log(myNewString);