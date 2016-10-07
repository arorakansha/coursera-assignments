(function () {
  'use strict';

  var shoppingList1 = [
    {
      name : "cookies",
      quantity : "10"
    },
    {
      name : "cookies",
      quantity : "10"
    },
    {
      name : "cookies",
      quantity : "10"
    },
    {
      name : "cookies",
      quantity : "10"
    },
    {
      name : "cookies",
      quantity : "10"
    }

  ]

  angular.module("shoppingList",[])
    .controller("shoppingListController", ShoppingListController);

    ShoppingListController.$inject = ["$scope"];

    function ShoppingListController($scope) {
      $scope.buyShoppingList = shoppingList1;
    }
})();
