"use strict";
let guest_list = ['shaz', 'ali', 'shayan', 'waniya',];
let not_present = 'shayan';
let new_guest = 'shaher';
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('respected Sir\madam.' + guest_list[i] + ',\n\n we inviting you on a dinner tommorow. \n\n thank u\n');
}
;
console.log(`Mr.${not_present} will not coming tomorrow dinner.`);
console.log('good news! we find big table so we ae inviting 3 more guest.');
guest_list.unshift('Maryum');
guest_list.splice(2, 0, 'Mahnoor');
guest_list.push('Sawaira');
for (let i = 0; i < guest_list.length; i++) {
    console.log('respected Sir\madam.' + guest_list[i] + ',\n\n we inviting you on a dinner tommorow. \n\n thank u\n');
}
