// ? Loops

/* 
    Allow us to execute  block of code repeatedly until an exit condition has been met.
*/

/* 
    We set out loop in a way where we can:
        *see where we are in a loop
        *consider the condition we run it against
        *note when we are done with the condition

    Syntax:

    for (start; stop; step) {
        code block to execute until stop condition returns false
    }

    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - (ex: longWordEN) value we can inter
*/


for(let i = 0; i < 10; i++) {
    console.log(i)
}

// ? Infinite Loop - lack of stop condition
// for (let i = 0; ;i++) {
// console.log(i)
// }

let longWordEN = "supercalifragilisticecpialidocious"
console.log(longWordEN.length)

for (i = 0; i < longWordEN; i = i + 1) {
    console.log(`Index: ${count}, Letter: ${longWordEN[count]}`)
}

// ? For-in-loop

/* 
    Allows us to seek an index value of an iterable against a condition.
    * For-in-loops do not require an index number
    * For-in do not require a stop statement
*/

let longWordDE = "kraftfahrzeug-haftplifchtversicherung"

for (i in longWordDE) {
    console.log(`Iterator: ${i}, Letter: ${longWordDE[i]}`)
}

// ? For-of Loop

/* 
    Allows us to seek iterable value against a condition. 
*/

let longWordPL = "konstantynopolitancykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    Difference between for-in and for-of in terms of use?
    * For-in allows us to loop over items that are not an array
    * For-of only works if an item is indexed like an array or a string
*/

/* 
    ? Challenge

    *Using a traditional loop, set an index to 2.
    *make a condition where if that number is greater than -100
    *you will be subtracting 4
    *console log each iteration

    Hint: step can be i++ i-- i + i or i += 1
*/



for (i = 2; i > -100; i = i - 4) {
    console.log(i)
}

/* 
    ? Challenge 2

    * Loop over an array with for-in or for-of
    * Console log each animal's respective "sound" (ex: meow for a cat)
    * EXTRA: use a ternary


let animalArray = ["pig", "cat", "mouse", "dog", "bird"]
*/

let animalArray = [ "pig", "cat", "mouse", "dog", "bird"]

for (animal in animalArray) {
    console.log(animalArray[animal])
}

for(animal of animalArray) 
    if (animal == "pig") {
        console.log("Oink")
    } else if (animal == "cat") {
        console.log("Meow")
    } else if (animal == "mouse") {
        console.log("cheese")
    } else if (animal == "dog") {
    console.log("woof") 
    } else if (animal == "bird") {
        console.log("chirp")
    }

for (i in animalArray) {
    // Ternary
    // animalArray[i] == "pig" ? console.log("Oink")
    // : animalArray[i] == "cat" ? console.log("Meow") 
    // : animalArray[i] == "mouse" ? console.log("Cheese")
    // : animalArray[i] == "dog" ? console.log("Woof")
    // : animalArray[i] == "bird" ? console.log("Chirp")
    // : null
}

// ? While Loop

/* 
    Executes a statement inside of a code block
    It does so as long as a while condition evalutes to true

    Syntax

    while (true) {
        do this until false
    }

    */


//while (true) {
//    console.log("Infinite Loop Yo!")
//}

let loopCount = 0
while (loopCount <= 100) {
    console.log(loopCount)
    loopCount++
    // or
    // loopCount = loopCount + 1
    // loopCount += 1
}

// Howto use while to iterate over an iterable

let carArray = ["Honda", "BMW", "Porsche", "Lada", "Maserati"]

let carCount = 0

while (carCount < carArray.length) {
    console.log(carArray[carCount])
    carCount += 1
}

// ? Do while Loop

/* 
executes code in the do section while a condition remains true
*/

let doCount = 0

do {
    console.log(carArray[doCount])
    doCount = doCount + 1
} while (doCount < carArray.length)