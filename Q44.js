"use strict";
function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}
makeSandwich(['ham', 'Cheese', ' lettuce']);
makeSandwich(['Turkey', 'Bacon',]);
makeSandwich(['Peanut', 'Butter', ' catchup']);
