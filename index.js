const http = require("http");
const server = http.createServer((req, res) => {
        res.end("hello from other side");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 80000");
});


// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = "localhost";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     console.log('Request for ' + req.url + ' by method ' + req.method);

//     if (req.method == 'GET') {
//         let fileURL;

//         if (req.url == '/') {
//             fileURL = "index.html";
//         } else {
//             fileURL = req.url;
//         }

//         const filePath = path.resolve('./public' + fileURL);
//         const fileExt = path.extname(filePath);

//         if (fileExt == '.html') {
//             fs.exists(filePath, (exists) => {
//                 if (!exists) {
//                     res.statusCode = 404;
//                     res.setHeader('Content-Type', 'text/html');
//                     res.end(`<html><body><h1>Error 404: ${fileURL} does not exist</h1></body></html>`);
//                     return;  // Stop further execution if file does not exist
//                 }

//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/html');
//                 fs.createReadStream(filePath).pipe(res);
//             });
//         } else {
//             res.statusCode = 404;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(`<html><body><h1>Error 404: ${fileURL} is not an HTML file</h1></body></html>`);
//         }
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<html><body><h1>Error 404: ${req.url} not supported</h1></body></html>`);
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });
