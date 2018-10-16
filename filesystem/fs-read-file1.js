

/**
 * Node FileSystem Module  
 * Node JS Read File Binary Data
 */
var fs = require("fs");

fs.readFile('JournalDEV.txt', function (err, data) {
    console.log(data);
});
