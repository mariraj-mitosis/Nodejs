// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello Mariraj', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });



//Read and OPEN file 
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});


//write file
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


//update Files

var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});


// write file 
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my Mariraj', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});


//Delete File 
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});


//File Renamed

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
}); 