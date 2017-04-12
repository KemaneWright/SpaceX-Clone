angular.module('spaceXApp').controller('shopCtrl', function($scope, shopService) {
  $scope.welcome = true;
  $scope.productsPage = false;
  $scope.mens = false;
  $scope.womens = false;

  $scope.showMens = function() {
    $scope.productsPage = true;
    $scope.welcome = false;
    $scope.mens = true;
    $scope.womens = false;
    shopService.getProducts().then(function(res) {
      $scope.products = res.data
    })
  }
  $scope.showWomens = function() {
    $scope.productsPage = true;
    $scope.welcome = false;
    $scope.mens = false;
    $scope.womens = true;
  }









})
