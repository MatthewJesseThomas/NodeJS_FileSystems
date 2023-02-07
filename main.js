// NodeJS File System
/* ---Node.js File System
Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.
Let's see some of the common I/O operation examples using fs module.*/
// =======================================================================
// Delete a File on System:-6th
// const fs = require('fs');

// fs.unlink('Deus Lo Vult.bat', function(){
//     console.log('File Deleted Successfully.');
// });
// =======================================================================
// File Open and Read:-5th
// const fs = require('fs');

// fs.open('Deus Lo Vult.txt', 'r', function(err, fd){
//     if(err){
//         return console.error(err);
//     };
// const buffr = new Buffer(1024);

// fs.read(fd, buffr, 0, buffr.length, 0, function(err, bytes){
//     if(err)
//         throw err;
//     if(bytes > 0){
//         console.log(buffr.slice(0, bytes).toString());
//     }
//     fs.close(fd, function(err){
//         if(err)
//             throw err;
//         });
//     });
// });
// =======================================================================
// Append Content to a File:-4th
// const fs = require('fs');

// fs.appendFile('Deus Lo Vult.zip', 'And So The World Burns!', function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log('Append Operation Completed.');
// });
// =======================================================================
// Creating & Writing a File Of Any Extension(.py, .bat, .zip etc):-3rd
// const fs = require('fs');

// fs.writeFile('Deus Lo Vult.bat', '"Yummy Source Code!!!"', function(err) {
//     if(err)
//         console.log(err);
//     else
//         console.log('Write Operation Completed.');
// });
// =======================================================================
// Reading File Synchronously:-2nd
// const fs = require('fs');

// const data = fs.readFileSync('Deus Lo Vult.txt', 'utf8');
// console.log(data);
// =======================================================================
// Reading A File:-1st
// const fs = require('fs');

// fs.readFile('Deus Lo Vult.txt', function (err, data) {
//     if (err) 
//         throw err;

//     console.log(data.toString());
// });
// =======================================================================