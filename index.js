const prompt = require('prompt-sync')({sigint: true});
const operations = ["+","-","/","*","="]
let quit = false
let previousResult = 0
const operation = function(previous,number,type)  {
    let result = 0
    switch (type) {
        case "+":
            result = previous + number
            break;
        case "-":
            result = previous - number
            break;
        case "*":
            result = previous * number
            break;
        case "/":
            result = previous / number
            break;
        default:
            result = previous
            break;
    }
    return result

}

while (quit == false){
    console.clear()
    console.log(`Please, enter an operation:
    + for sum
    - for substraction
    * for multiplication
    / for division
    = for total`)

    let userInput1 = prompt("Enter an option: ")
    while (!operations.includes(userInput1)){
        console.log("Please, enter a valid option")
        userInput1 = prompt("Enter an option: ")
    }
    let userInput2 = Number(prompt("Enter an number: "))
    previousResult = operation(previousResult,userInput2,userInput1)
    console.log(`The result is ${previousResult}`)
    let userInput3 = prompt("Type yes if you want to quit the app: ").toLowerCase()
    if (userInput3 == "yes"){
        quit = true
    }

}

console.log("Thank you, come back again!")


