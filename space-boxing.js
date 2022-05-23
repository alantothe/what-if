const prompt = require('prompt-sync')({sigint: true});

let venus = 0.78
let mars = 0.39
let jupiter = 2.65
let saturn = 1.17
let uranus = 1.05
let neptune = 1.23




let weight = prompt (" Enter your your earth weight :")

let planet = prompt (" Enter 1-7 for a weight on other planets 1=Venus 2=Mars 3= Jupiter 4=Saturn 5= Uranus 6=Neptune: ")

if ( planet == 1 ) {
     console.log("Your weight on Venus : " + weight * venus)


 }


 if ( planet == 2 ) {
    console.log("Your weight on Mars : " + weight * mars)
 }

 if ( planet == 3 ) {
    console.log("Your weight on Jupiter : " + weight * jupiter)
 }
 if ( planet == 4 ) {
    console.log("Your weight on Saturn : " + weight * saturn)
 }
 if ( planet == 5 ) {
    console.log("Your weight on Uranus : " + weight * uranus)
 }
 if ( planet == 6 ) {
    console.log("Your weight on Neptune : " + weight * neptune)
 }

