console.log("banana". length)
// Returns the length of a string
console.log("titanic".toUpperCase())
// Changes all characters to uppercase
console.log("quietly".toLowerCase())
// Changes all characters to lowercase
console.log("Java".repeat(10))
// Repeats the string n amount of times
console.log("berry".charAt(4))
// Returns a character at provided index
console.log("berry".charAt(0))
// Returns a character at provided index
console.log("banana".includes("ban"))
// Returns true/false if characters match those in the string
console.log("banana".endsWith("ana"))
// Returns true/false if last characters match
console.log("blueberry".replace("blue", "black"))
// Returns new string with new characters replacing old ones

let value = "blueberry"
let newValue = `${value.chartAt(0).toUpperCase()}${value.slice(1)}`
console.log(newValue)

let blueBerry = `${valueslice(0, 4)}${value[4].toUpperCase()}${value.slice(5)}`

value[4] = "B"
console.log

console.log("Double quotes 'single quotes'.")
console.log('Single quotes "double quotes".')
console.log("I', using quotes and now i want to \"quote a quote\" here")

console.log(`Template literals or string interpolation`)
console.log(`Allows us to execute `)




console.log(0.1 + 0.2)
// Leading zero 4 because of how floats are represented
console.log(2**53 === 2**53 + 1)
// Returns true. This is Number.MAX_SAFE_INTEGER before requiring BigInt
// JS does follow PEMDAS for operations

console.log(Math.floor(42.4576))

let randomNumberOneToTen = Math.floor(Math.random() * 10)
console.log(randomNumberOneToTen)