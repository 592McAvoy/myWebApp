describe("ServiceTest", function () {
    beforeEach(module('myApp'));

    var service;
    var it1;
    var it2;
                                    // 被测对象
    beforeEach(inject(function ($injector) {　　      // 注入依赖
      service = $injector.get('ShoppingListService');                   // 关联被测对象实例
    }));

    beforeEach(function(){
      it1 = {
        name: "cookie",
        price: 20,
        quantity :5
      };
      it2 = {
        name: "egg",
        price: 5,
        quantity :10
      };
    });

    it("add two items", function () {
      service.addItem(it1.name,it1.price,it1.quantity);
      service.addItem(it2.name,it2.price,it2.quantity);
      expect(service.items.length).toEqual(2);
    });

    it("calculate total cost",function(){
      var total = service.total();
      expect(total).toEqual(150);
    });

});
