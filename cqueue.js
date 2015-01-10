exports.CQueue = function () {
  this.store           = []

  this.front           = 0
  this.rear            = -1
  this.length          = 0
  this.maxLength       = 100

  this.insert          = insert
  this.remove          = remove
  this.flush           = flush
  this.isEmpty         = isEmpty
  this.setMaxLength    = setMaxLength
  this.getFirstElement = getFirstElement
  this.getLastElement  = getLastElement
}

function insert (element) {
  if (this.length >= this.maxLength)
    return false                                       // queue overflow

  this.rear = (this.rear + 1) % this.maxLength
  this.store[this.rear] = element
  this.length++

  return true
}

function remove () {
  if (this.length <= 0)
    return false                                       // queue underflow

  var element = this.store[this.front]
  this.front = (this.front + 1) % this.maxLength
  this.length--

  return element
}

function flush () {
  this.front  = 0
  this.rear   = -1
  this.length = 0

  return true
}

function setMaxLength (maxLength) {
  if (typeof maxLength != "number")
    return false

  this.maxLength = maxLength
  return true
}

function getFirstElement () {
  if (this.length <= 0)
    return false

  return this.store[this.front]
}

function getLastElement () {
  if (this.length <= 0)
    return false

  return this.store[this.rear]
}

function isEmpty () {
  return this.length == 0
}