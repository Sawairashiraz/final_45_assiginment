"use strict";
let magician = ["Harrypoter", "Hermione granger", "ron wesly", "samri jadogar"];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = "The Great " + magicianArry[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
