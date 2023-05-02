/**
 * Primitive Data Types:
 * String: sequence of characters
 * Number: contains both integers and floating point numbers
 * Null: no object value
 * Undefined: not defined / assigned
 * Symbol, constructor returns a unique symbol
 * BigInt: includes numbers that the "Numbers" data type cannot handle
 */
let sym = Symbol('a');
console.log(sym)
console.log(typeof sym)
/**
 * Reference-Data Types:
 * Stores a "reference" to an object
 */

let person = {
    firstname: 'John',
    age: 15
}

console.log(person)
console.table(person)

let newArr = [4,5,6];
let numArr = [...newArr]; // makes numbers immutable
                          // makes a different copy in the memory
let newnewArr = newArr; // copies the full reference of newArr
console.log(numArr);