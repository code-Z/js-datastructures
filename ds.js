var Stack = require('./stack').Stack,
    Queue = require('./queue').Queue,
    CQueue = require('./cqueue').CQueue

module.exports = {
  Stack  : Stack,           // Stack
  Queue  : Queue,           // Linear Queue
  CQueue : CQueue           // Circular Queue
}