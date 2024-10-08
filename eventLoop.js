// const fs = require('fs');

// console.log('First'); // Synchronous - runs immediately

// // Asynchronous file read
// fs.readFile('filetwo.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Second'); // Asynchronous - runs after the file read is complete
// });

// console.log('Third'); // Synchronous - runs immediately after 'First

import { readFile } from 'fs';

console.log('First');

// Asynchronous file read
readFile('./filetwo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Second');
    console.log(`File Content: ${data}`);
});

console.log('Third');

