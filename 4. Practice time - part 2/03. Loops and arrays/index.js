let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

let statement = "The 5 largest countries in the world:\n"
for(let i = 0; i < largeCountries.length; i++){
    statement += "- " + largeCountries[i] + "\n"
}
console.log(statement)