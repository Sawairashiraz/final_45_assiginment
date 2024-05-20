"use strict";
// store the location in a array. make sure the array is not in alphabatical order.
let places = ["Italy", "germany", "Australiya", "londun"];
//print your arry in its original order.
console.log('Orignal ' + places);
//print your array in alphabetical order with out modifying the actual list
console.log('Coppy ' + [...places].sort());
//show that your array is still init original order by printing.
console.log('Orignal ' + places);
//print your array in revers aiphabatical order with out changing  the order has changed.
console.log('Coppy ' + [...places].sort().reverse());
//show that your array is still init original order by printing it again.
console.log('Orignal ' + places);
//reverse the order of your list . print the list to show its  back to its original order.
console.log('Orignal ' + places.reverse());
//reverse the order of your list again. print the list to show its  back to its original order.
console.log('Orignal ' + places.reverse());
//sort your array so it s stored in alphabatical order. print the list to show that its order has been changed.
console.log('Orignal ' + places.sort());
//sort your array so it s stored in reverse alphabatical order. print the list to show that its order has been changed.
console.log('Orignal ' + places.sort().reverse());
