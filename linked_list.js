var Node = function (element) {
  this.element = element;
  this.next = next;
}

exports.LList = function ()  {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
};

var find = function (item) {
  var currentNode = this.head;
  while (currentNode.element != item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

var insert = function (newElement, item) {
  var newNode = new Node(newElement);
  var currentNode = this.find(item);
  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

var findPreviousItem = function (item) {
  var currentNode = this.head;
  while (!(currentNode.next == null && currentNode.next.element != item))
    currentNode = currentNode.next;
  return currentNode;
}

var remove = function (item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null))
    prevNode.next = prevNode.next.next;
}
