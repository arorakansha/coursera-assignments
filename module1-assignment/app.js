(function () {
  'use strict';

  angular.module("lunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
      $scope.lunchItems = "";
       $scope.totalItems = "";
       $scope.isValid="";
      $scope.displayItems = function () {
        var totalValue = calculateItems($scope.lunchItems);
          $scope.totalItems = totalValue;

      }

      function calculateItems(content) {
          var totalContentValue = "", output = "";

          if(content == ""){
            $scope.isValid = false;
            output = "Please enter data first!!";
          }else {
            totalContentValue = content.split(",");
            $scope.isValid=true;
            if(totalContentValue.length > 3){
              output = "Too Much!";

            }else if (totalContentValue.length <=3){
              output = "Enjoy!!";
            }
        }
          return output;
        }

    }
})();
