(function () {
'use strict';

angular.module('myApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemPrice = 0;
  itemAdder.itemQuantity = 0;

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemPrice, itemAdder.itemQuantity);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.total = ShoppingListService.total();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };


}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, price, quantity) {
    var item = {
      name: itemName,
      price: price,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.total = function () {
    var total = 20;
    console.log("aaa");
    for(var i = 0;i<items.length;i++){

      var item = items[i]
      total += item.price * item.quantity;
    }
    return total;
  };

}

})();
