/**
 * Node FS Read File
 * Node JS Read File
 */
var fs = require("fs");

function readData(err, data) {
    console.log(data);
}

fs.readFile('JournalDEV.txt', 'utf8', readData);