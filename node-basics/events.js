const events = require('events');
const eventEmitter = new events.EventEmitter();

function onConnect1() {
   console.log('onConnect executed.');
}

function onConnect2() {
   console.log('onConnect2 executed.');
}

eventEmitter.addListener('connection', onConnect1);

eventEmitter.on('connection', onConnect2);

console.log(events.EventEmitter.listenerCount(eventEmitter,'connection'));

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', onConnect1);

eventEmitter.emit('connection');

console.log(events.EventEmitter.listenerCount(eventEmitter,'connection'));