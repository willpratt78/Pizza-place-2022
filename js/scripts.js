//BL for Pizza

function Pizza(toppingOne, toppingTwo, size) {
  this.pizzas = {}
  this.id = 0;
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

//BI for CustomerInput

function CustomerInput (toppingOne,toppingTwo,size ){
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
  this.price = 0;
}

CustomerInput.prototype.orderPrice = function () {
  let toppingOne = this.toppingOne;
  let toppingTwo = this.toppingTwo;
  let size = this.size;
  if (toppingOne === "Xtra-cheese" ||toppingOne ===  "Garlic" ||toppingOne ===  "Banana-peppers"){
    this.price += 2;
  }else {
    this.price += 0;
  }
  if (toppingTwo === "Pineapple" ||toppingTwo === "Ham" ||toppingTwo === "Blue-cheese") {
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
    let newOrder = new CustomerInput(inputtedToppingOne, inputtedToppingTwo, inputtedSize);
    newOrder.orderPrice();
    // let totalCost = [];
    // totalCost.push(newOrder.price)
    let endPrice = ("<p> Your total is $" + newOrder.price + "</p>");
    let showOrder = ("<p> You're order is: a " +inputtedSize + " " +inputtedToppingOne + " " + inputtedToppingTwo + " Pizza.</p>")
    createTags(showOrder)
    createTags(endPrice)
  })
}) 

function createTags(tag) {
  const div = document.createElement("div");
  $(div).append(tag);
  $("#output").append(div);
}

// function displayPizzaOrder(pizzaOrder) {
//   let yourOrder = $("#output");
//   let htmlForPizzaOrder = "" ;
//   Object.keys(pizzaOrder.pizzas).forEach(function(key) {
//     const pizza = pizzaOrder.findId(key);
//     htmlForPizzaOrder += "<p id=" + pizza.id + ">" + pizza.toppingOne + " " + pizza.toppingTwo + " " + pizza.size + ".</p>"; 
//   });
//   yourOrder.html(htmlForPizzaOrder);
// }