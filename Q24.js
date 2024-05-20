// Equality and inequality Test 1
console.log("equality test with string:", "Apple" === "Apple");
// Equality and inequality Test 2
console.log("inequality test with string:", "Apple" != "orange");
// Test using the lowe case function
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");
//Numarical test invilving equility 
console.log("equality test with numbers:", 26 === 26);
///Numarical test invilving inequility 
console.log("inequality test with numbers:", 26 != 35);
// geatter then test
console.log("Greater than:", 10 > 5);
// less then test
console.log("less than:", 5 > 10);
// Greater then a or equal to test
console.log("Greater then  and equal to test:", 10 >= 10);
// less than or equal to
console.log('less than or equal totest:', 5 <= 10);
//Test using"and"  opreater
console.log("And opreator test", 5 === 5 && 10 > 5);
//Test using "or" opreater
console.log("or opreator test", 5 === 5 || false);
//Test weather an  item is an arry
var fruits = ['Banana', 'Mango', 'grapes'];
console.log('Test "Banana" in the array:', fruits.includes("Banana"));
//Test weather an  item is not an arry
console.log('Test "Apple" is not in array:', !fruits.includes("Apple"));
