//write file system 2
/**
 * Node FS Example
 * Node JS Write to File
 */
var fs = require("fs");

var writeStream = fs.createWriteStream("JournalDEV.txt");
writeStream.write("Hi, Mariraj Users. ");
writeStream.write("Thank You");
console.log("HAI")
writeStream.end();