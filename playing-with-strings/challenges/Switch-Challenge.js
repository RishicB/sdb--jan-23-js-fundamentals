let grade = "78"

switch(true) {
    case grade > 89:
        console.log("you got an A")
        break
    case grade > 79: 
        console.log("you got a B")
        break
    case grade > 66:
        console.log("you got a C")
        break
    case grade > 59:
        console.log("you got a D")
        break
    case grade < 59:
        console.log("Failing")
        break
    default:
        console.log(`{grade} is not a grade`)
}