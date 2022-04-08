//BL for Pizza

function Pizza(toppingOne, toppingTwo, size) {
  this.pizza = {}
  this.id = 0;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
}

Pizza.prototype.addId = function () {
  this.id += 1
  return this.id
}