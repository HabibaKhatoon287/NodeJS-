const path = require('path');
const filename = path.join(__filename);
const basename = path.basename(filename);
const extname = path.extname(extname);

console.log(filename);
console.log(basename);
console.log(extname);