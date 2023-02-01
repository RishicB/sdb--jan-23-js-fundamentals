// ? Variables

/* 
    Containers that store data in memory
    * declaration
        *allows memory space to be reserved
        * starts with let, var, or const
        * cannot start with a number or characters other than $ or _
        * if no value is assignd, it's undefined
    * initialization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc)
        * can be reassigned (except for const)
*/ 

// Variable Declaration
let firstName
console.log(firstName)
let lastName = "Niemczyk"
console.log(lastName)

// Reassignment
firstName = "Paul"

// ? String Concatenation
let FullName = firstName + " " + lastName
// console.log(fullName)

//? String Interpolation
let fullName = `${firstName} ${lastName}`
console.log(fullName)

// (a) (b) (c)       (d)
let address = "123 Main St, Salem, MA"
    // (e)  =     (f)
// (a) - keyword
// (b) - variable identifier
// (c) - assigment operator
// (d) - value or initializer
// (e) - variable declaraction
// (f) - variable initialization or value assignment

// Var is hoisted
//! Don't use if you can avoid it
var age = 26
console.log(age)


// ? Const vatiable CANNOT have a reassigned value
const ssn = "123-45-6789"
// ssn = "invalid ssn"
// console.log(ssn) // TypeError: cannot reassign a const

let someVariable
console.log(someVariable)
someVariable = "potato"
consol.log(someVariable)

/* 
    ? Coding Practices fpr Variables
    * be concise (ex. firstName instead of usersFirstName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase, or
    * Skewer-case
    * nocase, or
    * SCREAMING_CASE
*/

let fName = "Rishi"
let lName = "Baker"
let street = "1035 Clarkson ave"
let city = "Brooklyn"
let state = "NY"
let zip = "11212"
console.log(fName, lName, street, city, state, zip)

let addressstampConcatenated = fname + " " + lname + " " + street + " " + city + " " + state .toUpperCase() + " " + zip
console.log (addressStampConcatenated)

let addressStampInterpolated = `${fName} ${lName} \n ${street} ${city}, ${state.toUpperCase()} ${zip}`



//"All dogs are good dogs"? 18

console.log = ("titanic").toUpperCase()
console.log = ("QUIETLY").toLowerCase()
console.log = ("Java").repeat(10)
console.log = ("berry").charAt(1)
console.log = ("berry").charAt(0)
console.log = ("banana").includes("nan")
console.log = ("banana").endsWith("ana")
console.log = ("blueberry").replace("blue", "black")


console.log = ("drive" + "way")
console.log = (`Java` + "script")
console.log = ("Bert's pal Enrie" + `sings "Rubber Duckie"`)
console.log = `Two plus two is ${2 + 2}`


