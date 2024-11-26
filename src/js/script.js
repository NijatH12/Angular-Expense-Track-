let app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.options = ["Food", "Technology", "Bill"];
  $scope.expenses = [];
  $scope.totalAmount = 0;
  $scope.addExpense = function () {
    if ($scope.expenseName && $scope.amount && $scope.selectedCategory) {
      $scope.expenses.push({
        name: $scope.expenseName,
        category: $scope.selectedCategory,
        amount: $scope.amount,
      });
      $scope.totalAmount += $scope.amount;
      $scope.expenseName = "";
      $scope.amount = "";
      $scope.selectedCategory = "";
      Swal.fire({
        position: "top-end",
        title: "Your work has been saved ✅",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  $scope.deleteExpense = function (index) {
    $scope.totalAmount = $scope.totalAmount - $scope.expenses[index].amount;
    $scope.expenses.splice(index, 1);
    Swal.fire({
      position: "top-end",
      title: "Your deleted expenses ❌",
      showConfirmButton: false,
      timer: 1500,
    });
  };
});
