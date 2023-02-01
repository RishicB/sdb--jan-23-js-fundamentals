// ? Conditionals & Logic Gates

/* 
    * Conditional statements check if an expression is truthy
    * The expression must always resolve to true
    * If it's truthy, a code within a statement executes
    * If an expression is false, nothing happens unless we specify otherwise
*/

// ? Falsey Values

/* 
    * Falsey value is one that is considered false in Boolean context

    If JS expects false boolean, it can return the following:
    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 
    ? If Statment
    * Checks if something is true and executes code
*/

let lightSwitch = "on"

if (lightSwitch == "on") {
    console.log("The light is on")
}

/* 
    ? Else If Statement
    Allows us to do add additional condition if the prior one has not been satisfied
*/

let temp = 50

if (temp > 50) {
    console.log("It's nice out")
}else if (temp < 50 & temp > 32){
    console.log("Temp is really gettin' down")
} else if (temp < 32) {
    console.log("Watch out for ice!")
} else {
    console.log(`${temp} is not a valid temperature range`)
}

/* 
    ? Else Statment
    * If all else fails, execute this code
*/

/* 
    ? SYNTAX:

    if (conditionalIsTrue) {
        execute this code block
    } else if (conditionalIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator (||)
        * true if one of hte conditions is true
        * ex: I will be happy if I go to the movies or eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movies = true)
        * (no dinner & no movie = false)
    * AND Operator (&)
        * true if bother conditions are true
        * ex: Iwill be happy if I go to the movies and et dinner
        * (dinner and movies = true)
        * (no dinner and movies = false)
        * (dinner and no movies = false)
        * no dinner and no movies = false)
    * NOT operator (!)
        * flips the logical expression
*/

// NOT Example
lightSwitch = false

if (!lightSwitch) {
    console.log("light switch is off")
}

// AND Example

let home = true
lightSwitch = false

if (home & lightSwitch) {
    // (home == true & lightswitch == true)
    console.log("You're home and the lights are on")
} else if (home & !lightSwitch) {
    // (home == true & lightswitch == false)
        console.log ("You forgot to turn on the lights")
} else if (!home & lightSwitch) {
    // (home == false & lightswith == true)
    console.log("You forgot to turn off the lights") 
} else if (!home & !lightSwitch) {
    console.log("Home is empty and lights are off")
} else {
    console.log("Incorrect input, try a boolean value")
}

// OR Example

if (!home || !lightswitch) {
    console.log(`Home value is: ${home} and Light switch value is: ${lightSwitch}`)
}








let age = 21
let gender = "female"

if (age <16) {
    console.log("You cannot drive")
} else if (age > 16 && age < 18) {

}

// ? Ternaries

/* 
    A quick way of creating an if/else conditional
*/

let ignition = true
// true for "on" false for "off"

if (ignition) {
    console.log("The car is on")
    ignitionCount = ignitionCount + 1
    console.log(`Ignition count: ${ignitionCount}`)
}else {
    console.log("The car is off")
}

ignition ? console.log("Car is on") : console.log("Car is off")

/* 
    Ternary Syntax:

    conditonal ? code block if true : code block if false
*/

let season = 1

if (season == 1) {
    console.log("spring")
}else if (season == 2) {
    console.log("summer")
}else if (season == 3) {
    console.log("autumn")
}else if  (seaspn == 4) {
    console.log("winter")
}else {
    console.log(`${season} is not an appropriate input`)
}

season = 1 ? console.log("spring")
            : season == 2 ? console.log("summer")
            : season == 3 ?console.log("autumn")
            : season == 4 ?console.log("winter")
            : null

// ! if you do not have an else statement, you must use a null

/* 
    Ternary Syntax:

    conditional ? code block if true : code block if false

    conditional ? code block if true
                : else if statement ? code block if true
                : else if statement ? code block if true
                : else statement OR null

*/

age = 18

age < 18 ? console.log("you're still a teenager")
            : age <= 18 ? console.log("you can travel and cannot drink alcohol")
            : age >= 21 ? console.log("you can drink alcohol")
            : null

// ? Switch Statements

/* 
    Switches execute a block of code dependent upon a different case

    we ask a question that requires a specific response determined by our answer
*/

let uprightTinstructor = "Benny"

switch(uprightIinstructor) {
    // information that caes are compared against
    case "Paul":
        // condition that's compared against switch
        // execut the code below
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        break
        // used to stop other cases from evaluating
    case "Rob":
        console.log(`${uprightInstructor} is on vacation.`)
        break
    case "Matt":
        console.log(`${uprightInstructor} is an Operations Manager`)
        break
    default:
        console.log(`${uprightInstructor} may or may not work here.`)
}