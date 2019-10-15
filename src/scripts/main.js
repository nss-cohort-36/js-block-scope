console.log("Block scope")

let tenPlus;
const i = 99.99
for (let j = 0; j <=10; j++)
{ // Beginning of `for` scope

    /*
        Code outside of this scope has no idea that
        the `tenPlus` variable even exists.
        Only the code inside the block can access it.
        */
    console.log("i INSIDE LOOP", i)
    tenPlus = i + 10
    // Still inside the `for` block, so `tenPlus` is accessible
    if (tenPlus < 100) {
        // let i
        console.log("i INSIDE IF", i)

        console.log("Your number was too high")
    }

    console.log("i AFTER IF BUT STILL IN LOOP", i)


} // End of `for` scope

/*
    This will throw an exception stating that `tenPlus`
    is not defined. This is external code to the `for`
    loop's scope, and is therefore not capable of accessing
    anything inside it
*/
console.log(tenPlus)
console.log("i OUTSIDE LOOP", i)


let dog = "Great Dane"
let monthlyFoodCost = 0

if (dog === "Great Dane")
{  // Beginning of `if` scope

    /*
        This code can look out into the "outer" scope
        and modify a variable defined out there.
    */
    monthlyFoodCost += 23.02

}  // End of `if` scope
const mfcAsString = monthlyFoodCost.toFixed(2)
console.log("monthlyFoodCost", mfcAsString)
const mfcBackToNumber = Number.parseFloat(mfcAsString)
console.log("monthlyFoodCost", mfcBackToNumber)

function containsVowels(wordParameter) {  // Beginning of `function` scope

    /*
    The `doesItHaveOne` variable can only be accessed
    within the curly braces of this function. The match()
    method on a string will return `null` if there
    are no matches, otherwise, an array will be returned.
    */
    const doesItHaveOne = wordParameter.match(/[aeiou]/gi)
    console.log("Results of match method", doesItHaveOne)

    // if(doesItHaveOne !== null) {
    //     return true
    // } else {
    //     return false
    // }
    return doesItHaveOne !== null


}  // End of `function` scope

const itContainedVowels = containsVowels("Ku'uleialoha")

console.log(itContainedVowels) // true or false
console.log(doesItHaveOne) // doesItHaveOne is undefined


// In global scope
const product = "Mirror"

{
    const order = []
    order.push(product) // This is fine. `product` variable in outer scope
}

/*
    Nope...
    Undefined exception thrown. Can't look into inner scopes.
*/
order.clear()
