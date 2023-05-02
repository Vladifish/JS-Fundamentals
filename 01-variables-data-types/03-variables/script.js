// Ways to declare a variable
// var, let, const
var x = 5; // sort-of global scope
console.log(5);
// let x = 5; will throw an error
// var x = 5; will display undefined

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase, JS Standard
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase
const x = [5];
// x = 3; // type-error exception
x.push(3); // will still become [5,3]