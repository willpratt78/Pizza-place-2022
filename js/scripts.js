//BL for Pizza

function Pizza(toppingOne, toppingTwo, size) {
  this.pizzas = {}
  this.id = 0;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
  this.price = 0;
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
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}

Pizza.prototype.orderPrice = function () {
  let toppingOne = this.toppingOne;
  let toppingTwo = this.toppingTwo;
  let size = this.size;
  if (toppingOne === "anchovies"){
    this.price += 2;
  }else {
    this.price += 0;
  }
  if (toppingTwo === "pineapple") {
    this.price += 3;
  }else {
    this.price += 0;
  }
  if (size === "large") {
    this.price += 10;
  }else {
    this.price +=6;
  }
  return this.price;
}

// UI Logic