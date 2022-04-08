``` js

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
const myPizza = new Pizza("anchovies", "pineapple", "medium");
Expected Output: Pizza {id:0 toppingOne: "anchovies", toppingTwo: "pineapple", size: "medium" }

Describe: Pizza.prototype.addId = function()

Text: "It shold increase the id of the pizza being ordered by 1"
Code:
myPizza.addId();
expected Output: 1

Describe: Pizza.prototype.addPizza = function()

Text:"It should assign the id to the pizza that's been ordered"
code:
myPizza.addPizza(myPizza);
expected output: "anchovies" "pineapple" "large" 1

Describe: Pizza.prototype.findId = function()

Text: "It should find the id of a given item"
Code:
myPizza.findId(1);
expected output: 1


Describe: Pizza.prototype.orderPrice = function ()

Text: "It should return the total price for the pizza ordered"
Code:
myPizza.orderPrice("anchovies", "pineapple", "large")
Expected output: myPizza(15)
```