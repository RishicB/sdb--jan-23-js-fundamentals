function potatoPoem() {
    let count = 0
    
    while (count < 12) {
        count = count + 1

        // if (count === 8) {
        //     console.log("More!")
        // } else if (count === 4) {
        //     console.log(`${count}!`)
        // } else {
        //     console.log(`${count} potato!`)
        // }
        count === 12 ? console.log("Floor!")
        : count === 8 ? console.log("More!")
        : count === 4 ? console.log(`${count}!`)
        : console.log(`${count} potato!`)
    }
}

// potatoPoem()

function potatoPoemForLoop() {
    for (let count = 0; count <= 12; count++) {
        count === 12 ? console.log("Floor!")
        : count === 8 ? console.log("More!")
        : count === 4 ? console.log(`${count}!`)
        : console.log(`${count} potato!`)
    }
}

potatoPoemForLoop()