"use strict";
// exercise Num 14
let guest_list = ['shaz', 'ali', 'shayan', 'waniya',];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe inviting you on dinner tomorrow.\nthank you\n');
}
// exersice num 15
let not_present = 'shayan';
let new_guest = 'shaher';
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('respected Sir\madam.' + guest_list[i] + ',\n\n we inviting you on a dinner tommorow. \n\n thank u\n');
}
;
console.log(`Mr.${not_present} will not coming tomorrow dinner.`);
