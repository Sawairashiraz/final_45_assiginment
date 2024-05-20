"use strict";
let magician = ["Harrypoter", "Hermione granger", "ron wesly", "samri jadogar"];
function coppyArry(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "The Great " + magicianArry[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const coppyMagicianArry = coppyArry(magician);
make_great(coppyMagicianArry);
console.log("\n\nthis is my orignal arry ");
show_magicians(magician);
console.log("\n\nthis is my modified copy of the  arry ");
show_magicians(coppyMagicianArry);
