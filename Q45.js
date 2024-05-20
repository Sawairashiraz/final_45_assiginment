"use strict";
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['navigation', 'power windo'] });
console.log(answer);
