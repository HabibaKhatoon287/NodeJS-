const fs = require('fs')
//fs.copyFileSync("fileone.txt","filetwo.txt");

//fs.writeFileSync("fileone.txt","welcome hello");

//fs.appendFileSync("fileone.txt","how are you");

// const buf_data = fs.readFileSync("fileone.txt","utf8");

// console.log(buf_data);

fs.renameSync("fileone.txt","myfileone.txt");

//fs.unlinkSync("myfileone.txt");

//fs.rmdirSync("folderName")
