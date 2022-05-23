const prompt = require('prompt-sync')({sigint: true});

let number = prompt (" Enter Class Size:")

if(number % 3 === 0) {

    console.log( Math. floor(number /3) + " Groups of 3 Students" )
}
else if (number%3 === 2) {

    console.log (Math. floor(number/3) + " Groups of 3 students with 1 Group of 2 students ")

}
else if (number%3 ===1) {

} console.log (Math. floor(number/3 -1)+ " Groups of 3 students with 2 Groups of 2 students" )

