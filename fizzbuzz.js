
const prompt = require('prompt-sync')({sigint: true});

let number = prompt (" Enter Any Number:")

if (number%3===0) {
    console.log("fizz")
}

if (number%5===0) {
    console.log("buzz")
}

if (number%5===0 && number %3===0) {
    console.log("fizzbuzz")
}

// else if (number%5>0 && number %3>0) {
//     console.log("this number is not divisible by 3 or 5")
// }

else {
    console.log("this number is not divisible by 3 or 5")
}

