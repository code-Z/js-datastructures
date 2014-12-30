exports.Stack = function () {

  // dataStore to keep all the elements of the Stack
  this.store = []

  // stack properties
  this.depth = 0
  this.top = -1

  // stack methods
  this.push    = push       // Push the new element to the top of the array
  this.pop     = pop        // Remove the topmost element and return it
  this.display = display    // Print all the elements in the array
  this.peek    = peek       // Glance over the topmost element without popping it from the array
  this.isEmpty = isEmpty    // Determine whether the Stack is empty or no
  this.flush   = flush      // Flush the entire Stack (Empty the contents)
  this.reverse = reverse    // Reverse the order of all elements in a Stack

}


var push = function (element) {
  this.top++
  this.depth++
  this.store[this.top] = element
}

var pop = function () {
  var element = this.store[this.top]
  this.top--
  this.depth--

  return element
}

var peek = function () {
  return this.store[this.top]
}

var isEmpty = function () {
  return this.depth == 0
}

var flush = function () {
  this.store = []
}

var reverse = function () {
  this.store.reverse()
}

var display = function () {
  for (var i = this.top; i >= 0; i--) {
    console.log('|', this.store[i], '|')
    console.log('|---|')
  }
}