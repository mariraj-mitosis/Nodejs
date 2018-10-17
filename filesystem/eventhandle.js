var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
console.log('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
console.log('scream');