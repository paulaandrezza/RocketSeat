const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ev.on('saySomething', (message) => {   // ouve sempre
//     console.log("Eu ouvi você: " , message)
// })

ev.once('saySomething', (message) => {   // once ouve uma unica vez
    console.log("Eu ouvi você: " , message)
})

ev.emit('saySomething', 'Paula')
ev.emit('saySomething', 'Felipe')
ev.emit('saySomething', 'Margarida')

