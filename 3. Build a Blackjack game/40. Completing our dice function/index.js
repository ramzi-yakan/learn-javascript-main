// Try to modify the expression so that we get a range from 1 to 6

function rollDice(){
    let roll = Math.floor( Math.random() * 6 ) + 1
    return roll
}

randomNumber = rollDice()
console.log(randomNumber)

