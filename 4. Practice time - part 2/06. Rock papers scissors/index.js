let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function rps(){
    return hands[Math.floor(Math.random()*3)]
}

let choice = rps()
console.log(choice)

