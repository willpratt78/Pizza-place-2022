# _Pizza Shop_

#### By _Will Pratt_

#### _This will let you imput an order at a pizza shop_

## Technologies Used

* HTML
* Javascript
* CSS

## Description

_Upon entering your order you get a return of the order you've made and the cost of the order_

## Setup/Installation Requirements

* Clone Repository onto your local maching
* Open the directory named portfolio
* Open index file

## Known Bugs

* No known bugs at this time

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 4/8/22 _William Pratt_



## TDD

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
Expected output: myPizza(17)
```