(function () {
  'use strict';

//TODO : Empty list messages handling is pending
  angular.module("ShoppingList",[])
    .controller("ShoppingListController1", ShoppingListController1)
      .controller("ShoppingListController2", ShoppingListController2)
      .service("ShoppingListService", ShoppingListService);

    ShoppingListController1.$inject = ["ShoppingListService"];
    function ShoppingListController1(ShoppingListService) {
      var buyList = this;

      buyList.items = ShoppingListService.getBuyItems();

      buyList.removeItem = function (itemIndex, name , quantity){
        ShoppingListService.addToBoughtList(name, quantity);
        ShoppingListService.removeItem(itemIndex);
      }
    }

    ShoppingListController2.$inject = ["ShoppingListService"];
    function ShoppingListController2(ShoppingListService) {
      var boughtList = this;

      boughtList.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService(){
      var service = this;

      var alreadyBought = [];
      var BuyList = [

        {
          name: "Cookies",
          quantity: "10"
        },
        {
          name: "Milk",
          quantity: "5"
        },
        {
          name: "Dounuts",
          quantity: "20"
        },
        {
          name: "Chips",
          quantity: "15"
        },
        {
          name: "Bars",
          quantity: "10"
        }

      ];

      service.addToBoughtList = function (itemname, itemquantity){
        var item = {
          name : itemname,
          quantity : itemquantity
        };

        alreadyBought.push(item);
      };

      service.getBuyItems = function (){
        return BuyList;
      };

      service.getBoughtItems = function (){
        return alreadyBought;
      };


      service.removeItem = function (itemIndex){
        BuyList.splice(itemIndex, 1);
      //  addToBoughtList("A","B");
      }
    }


})();
