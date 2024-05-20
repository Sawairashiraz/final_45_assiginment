"use strict";
//31. no users; add an if test to exercise 30 to
//make sure the list of users in note empty.
//.if the list is empty.print the message
// we need to find csome users.
let users = ['zara', 'sana', 'waniya', 'ferwa', 'admin'];
if (users.length === 0) {
    console.log('we need to find csome users.');
}
//.remove all of the usernames from your array.
//and make sure the correct message is  printed
else {
    users = [];
    console.log('all user have been remove' + users.length);
}
