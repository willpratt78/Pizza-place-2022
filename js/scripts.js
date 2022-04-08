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
  if (toppingOne === "Xtra cheese" ||toppingOne ===  "Garlic" ||toppingOne ===  "Banana peppers"){
    this.price += 2;
  }else {
    this.price += 0;
  }
  if (toppingTwo === "Pineapple" ||toppingTwo === "Garlic" ||toppingTwo === "Banana peppers") {
    this.price += 3;
  }else {
    this.price += 0;
  }
  if (size === "Xtra Large") {
    this.price += 15;
  }else if (size === "Large") {
    this.price +=12;
  }else if (size === "Medium") {
    this.price +=10;
  }else {
    this.price +=6;
  }
  return this.price;
}

// UI Logic

$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    const inputtedToppingOne = $("#toppingOne").val();
    const inputtedToppingTwo = $("#toppingTwo").val();
    const inputtedSize = $("#size").val();
    let newOrder = new Pizza(inputtedToppingOne, inputtedToppingTwo, inputtedSize);
    newOrder.orderPrice();
    let totalCost = [];
    totalCost.push(newOrder.price)
    console.log(totalCost)
    let endPrice = ("<p> Your total is $" + newOrder.price + "</p>");
    let showOrder = ("<p> You're order is: a " +inputtedSize + " with " +inputtedToppingOne + " and " + inputtedToppingTwo + ".</p>")
    createTags(showOrder)
    createTags(endPrice)
  })
}) 

function createTags(tag) {
  const div = document.createElement("div");
  $(div).append(tag);
  $("#output").append(div);
}
