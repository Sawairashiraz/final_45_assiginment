"use strict";
//Stages of life: writen an if-else chain that determine a person stage of life
//set avalue for the variable age,and than:
//if the person is lessthan 2 years old, print a message that the person is a baby.
let age = 15;
if (age < 2) {
    console.log("the person is a baby.");
}
//if the person is at lest 2 year old but less than 4.print
//a message that the person is a todler.
else if (age >= 2 && age < 4) {
    console.log("person is atodler.");
}
//if the  person is  at lest 4 years old but less than 13,
//print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("person is kid.");
}
//if the  person is  at lest 13 years old but less than 20,
//print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("person is teenager.");
}
//if the  person is  at lest 20 years old but less than 65,
//print a message that the person is a adult.
else if (age >= 20 && age < 65) {
    console.log("person is adult.");
}
//if the  person is  at lest 65 or older,
//print a message that the person is an elder.
else {
    console.log("person is an elder.");
}
