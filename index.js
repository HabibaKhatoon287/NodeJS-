// const square = {
//     area : (a) =>(a*a),
//     parameter: (a) => (4*a)
// }

const square = require('./square.js');

const calsquare = (a) => {
    console.log(`the value of a is ${a} and the area is` +square.area(a));
    console.log(`the value of a is ${a} and the parameter is`+square.parameter(a));
}

console.log(__filename);
console.log(__dirname);
calsquare(5);