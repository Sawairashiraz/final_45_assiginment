// lower case
let personName:string="Sawaira"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:",personName.toUpperCase());

// Title case
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toUpperCase()));