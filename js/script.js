(function(){
  'use strict';

  angular.module('app',[])
  .controller('addCtrl',addCtrl)
  .controller('showCtrl',showCtrl)
  .service('shopService',shopService);

  addCtrl.$inject = ['shopService'];
  function addCtrl(shopService){
    var item = this;

    item.name = "";
    item.price = 0;
    item.quantity = 0;

    items.add = function(){
      shopService.add(item.name,item.price,item.quantity);
    }
  }

  showCtrl.&inject = ['shopService'];
  function showCtrl(shopService){
    var show = this;

    show.items = shopService.getItems();

    show.total = function(){
      shopService.total();
    }
  }
















})();
