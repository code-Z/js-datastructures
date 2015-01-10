exports.Queue = function () {
  this.store = []

  this.rear = -1
  this.length = 0
  this.maxLength = 1000000

  this.insert = insert
  this.remove = remove
  this.isEmpty = isEmpty
  this.flush = flush
  this.setMaxLength = setMaxLength
  this.display = display
}

var insert = function (element) {
  if (this.length + 1 <= this.maxLength) {
    this.rear++
    this.store[this.rear] = element
    this.length++
    return true
  }

  return false
}

var remove = function () {
  if (this.length - 1 >= 0) {
    var element = this.store.shift()
    this.rear--
    this.length--
    return element
  }

  return false
}

var isEmpty = function () {
  return this.length == 0
}

var flush = function () {
  this.rear = -1
  this.length = 0
  this.store = []
}

var setMaxLength = function (maxLength) {
  this.maxLength = maxLength
}

var display = function () {
  console.log(this.store.join('|'))
}