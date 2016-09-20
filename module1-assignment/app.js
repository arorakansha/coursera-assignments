(function () {
  'use strict';

  angular.module("lunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
      $scope.lunchItems = "";
       $scope.totalItems = "";
       $scope.myClass="";
      $scope.displayItems = function () {
        var totalValue = calculateItems($scope.lunchItems);
          $scope.totalItems = totalValue;

      }

      function calculateItems(content) {
          var totalContentValue = "", output = "", count=0;
          totalContentValue = content.split(",");

          for(var i=0;i<totalContentValue.length;i++){
            if(totalContentValue[i]==""){}
            else{
              count=count+1;
            }
          }

          if(count==0){
            output = "Please enter data first!!";
              $scope.myClass="error";
          }else {
            $scope.myClass="success";
            if(count > 3){
              output = "Too Much!";
            }else if (count <=3){
              output = "Enjoy!!";
            }
        }
          return output;
        }

    }
})();
