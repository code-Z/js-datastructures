exports.Stack = function () {

  // dataStore to keep all the elements of the Stack
  this.store = []

  // stack properties
  this.depth = 0
  this.top = -1
  this.maxDepth = 1000000

  // stack methods
  this.push        = push        // Push the new element to the top of the array
  this.pop         = pop         // Removes the topmost element and returns it
  this.display     = display     // Prints all the elements in the array
  this.peek        = peek        // Returns the topmost element without popping it from the array
  this.isEmpty     = isEmpty     // Determine whether the Stack is empty or no
  this.flush       = flush       // Flush the entire Stack (Empty the contents)
  this.reverse     = reverse     // Reverse the order of all elements in a Stack
  this.setMaxDepth = setMaxDepth // Set the maximum size the array should have 

}


var push = function (element, done) {
  if (this.depth + 1 <= this.maxDepth) {
    this.top++
    this.depth++
    this.store[this.top] = element
    return true
  }

  return false
}

var pop = function () {
  if (this.depth - 1 >= 0) {
    var element = this.store[this.top]
    this.top--
    this.depth--
    return element
  }
  
  return false
}

var peek = function () {
  if (this.top < 0) {
    return false
  }

  return this.store[this.top]
}

var isEmpty = function () {
  return this.depth == 0
}

var flush = function () {
  this.depth = 0
  this.top = -1
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

var setMaxDepth = function (maxDepth) {
  this.maxDepth = maxDepth
}