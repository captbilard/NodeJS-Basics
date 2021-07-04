var events = require('events')
const eventEmitter = new events.EventEmitter()

//Event Handler
let myEventHandler = ()=> console.log('I can hear you screaming')

//assign the event handler to an event
eventEmitter.on('scream', myEventHandler)

//fire the event
eventEmitter.emit('scream')