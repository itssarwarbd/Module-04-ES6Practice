// Spread Operator three dots (...)

//Example 

// let smallDistrict = ['Sylhet', 'Sunamganj', 'Habiganj'];
// let bigDistrict = [...smallDistrict,'Kisharganj', 'Bhola', 'Dhaka'];
// console.log(bigDistrict);

//With Out Spread Operator three dots (...)

let smallDistrict = ['Sylhet', 'Sunamganj', 'Habiganj'];
let bigDistrict = ['Kisharganj', 'Bhola', 'Dhaka'];

bigDistrict.push(smallDistrict);

console.log(bigDistrict);