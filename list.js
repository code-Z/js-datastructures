exports.List = function () {
  this.store = []

  this.size = 0
  this.pos  = 0

  this.find = find
  this.flush = flush
  this.contains = contains
  this.insert = insert
  this.append = append
  this.upsert = upsert
  this.removeElement = remove
  this.removeFrom = removeFrom
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.getLength = getLength
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;

}