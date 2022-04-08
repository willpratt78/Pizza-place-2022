//BL for Pizza

function Pizza(toppingOne, toppingTwo, size) {
  this.pizzas = {}
  this.id = 0;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
}


Pizza.prototype.addPizza = function (order) {
  order.id = this.addId();
  this.pizzas[order.id] = order
}


Pizza.prototype.addId = function () {
  this.id += 1
  return this.id
}

Pizza.prototype.findId = function(id) {
  debugger;
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}