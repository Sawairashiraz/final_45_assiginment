"use strict";
let guest_list = ['shaz', 'ali', 'shayan', 'waniya',];
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam '+ guest_list[i] +',\nwe inviting you on dinner tomorrow.\nthank you\n');
//}
// exersice num 15
let not_present = 'waniya';
let new_guest = 'shaher';
guest_list[3] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//console.log('respected Sir\madam.' + guest_list[i] +',\n\n we inviting you on a dinner tommorow. \n\n thank u\n');
//}
//console.log(`Mr.${not_present} will not coming tomorrow dinner.`);
//console.log('Good News! we find a big table so we are inviting 3 more guest.')
guest_list.unshift('Maryum');
guest_list.splice(2, 0, 'Mahnoor');
guest_list.push('Sawaira');
//for(let i=0; i<guest_list.length; i++){
// console.log('respected Sir\madam.' + guest_list[i] +',\n\n we inviting you on a dinner tommorow. \n\n thank u\n');
// }
console.log('/nSorry we can not arrange big table, only two people will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    //  console.log(`sorry Mr.${remove_guest},you are not invited  for dinner.`);
}
//exercice 19
// print a message indicating the number of people you are inviting in a dinner
console.log(` Total number of guest are: ${guest_list.length}`);
