// ? JavaScript

/* 
    JS was founded in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function - functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

// ? Comments

/* 
    * Blocks of code that are not being interpreted
    * Denoted by // for single-line
    * Denoted by /* for mult-line
    * Comments are read but not executed
    * As students, it helps us with note taking
    * As devs, it documents our code making it more maintainable
*/

// ? Console object

/* 
    Gives us access at the browser or node's debugging console.
    * Aloows developer to view output from their program
*/

console.log(2 + 2)
2 + 2 // rums but doesn't show in the console

// ? Data Types

/* 
    ? Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * Not a Number (NaN)
        Reference
            * array
            * object
*/

// Strings

/* 
    * Primitive data type representing characters (text)
    * Enclosed ' ', " ", or ` `
    * 
    Examples:
*/

console.log("This is a text")
console.log('This is also a text')
console.log(`Text using string interpolation backticks`)

// We can add (concatenate) strings
console.log("I'm Paul" + " and I,m 26 year old.")

// sTrings are indexed starting from zero (0)
// ! Strings are immutable
// index_value goes between [ ]
console.log("Porscheddoppelkupplungsgetriebe"[5])
// This is also a dtring representation of a number
console.log("2023")

/* 
    ?String Interpolation (` `)
    * A proccess of including space for an expresion
    Syntax:
    ` String ${ expression } string `
*/

console.log(`My name is Paul and I am ${20 + 6} years old`)

/* 
    ? String Methods
    .length
    .slice()
    .toUpperCase()
    .toLowerCase()
*/

console.log("---------------")
console.log("Niemczyk". length)
console.log("Niemczyk" .toUpperCase())
console.log("Paul Niemczyk".slice(0, 4))

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1990") // returns string

// Multi-line strings
// Done using escape charater "/n"

console.log("Paul Niemczyk \n 123 Main st \n 312 55 0808")

// ? Numbers

/* 
    Any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(typeof 1776)
console.log(0.2 + 0.1) // returns 0.300...04

// Booleans

/* 
    * Binary Value
    * Either true (on) or false (off)
    * Eamples of falsey values:
        
*/

console.log(true)
console.log(false)
console.log(2 = 2) // returns true
console.log(2 = 5) // returns false
// Boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1)) // returns true
console.log(Boolean(0)) // returns false
console.log(Boolean(null)) // returns false
console.log(boolean(undefined)) // returns false
consolelog(Boolean("")) // returns false

// ? Type Coercion

/* 
    * JavaScript is a weekly-typed programming language
    * Doesn't require data type definition
    * Comparison operator (=) performs type coercion before resolving expression
    * We can use strict equality (==) to avoid type coercion
*/

// Type Coercion of number to str and str concatenation
console.log(2 == "2") // returns true ("22")
console.log(2 === "2") // returns falses

console.log((2 + "2") == 4)

// ! know what type coercion is but Don't USE IT!

// ? Null and Undefined

/* 
    * Null - explains the lack of existence
    * Undefined - explains the lack of value
*/

// ? Operators

/* 
    * Addition (+)
    * Subtraction (-)
    * Division (/)
    * Exponent (**)
    * Dot (.)
    * Modulo (%)
    * Assignment (=) single
    * Comparison (==) double
    * Strict Comprison (===) triple
*/

// ? Expressions

/* 
    * Unprocessed values grouped using the ()
    * Evaluate to be truthy or falsey
    * Can be empty ()
*/

// ? Statements

/* 
    * keyword
    * expression
    * and code block

    * staements evaluate and execute code block when invoked
*/

// ? Modulo (%)

/* 
    Checks for the remainder of lomg division
*/

console.log(12 % 3)// returns 2
console.log(12 & 5)// returns 5




console.log (0.1 + 0.2)
console.log (2**53 === 2**53 + 1)
console.log(0.8 - 0.7 - 0.1) / (0.5 - 0.4 - 0.1)
console.log(0.5 - 0.4 - 0.1)
console.log(2**10000)

Math.floor(42.4576)
Math.floor(42.3675)
Math.floor(42)
Math.round(41.756)
Math.round(42.3675)
Math.random()

function
randomNum(min, max) { let range = max - min + 1
    return Math.floor(Math.random()* range) + min}

randomNum(1, 10) // will return a random number between 1 and 10 inclusive on both ends


console.log(typeof "42")
console.log(typeof "1 + 7")

console.log ("cheese" + "42")
console.log("4" + 2)
