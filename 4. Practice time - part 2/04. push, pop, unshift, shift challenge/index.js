let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

let statement = "The 5 largest countries in the world:\n"
for(let i = 0; i < largeCountries.length; i++){
    statement += "- " + largeCountries[i] + "\n"
}
console.log(statement)