angular.module('spaceXApp').controller('shopCtrl', function($scope, shopService) {
  $scope.welcome = true;
  $scope.productsPage = false;

  $scope.products = false;
  $scope.login = false;
  $scope.cart = false;


  $scope.showMens = function() {
    $scope.welcome = false;
    $scope.productsPage = true;

    $scope.products = true;
    $scope.login = false;
    $scope.cart = false;
    shopService.getMens().then(function(res) {
      $scope.products = res.data
    })
  }

  $scope.showWomens = function() {
    $scope.welcome = false;
    $scope.productsPage = true;

    $scope.products = true;
    $scope.login = false;
    $scope.cart = false;
    shopService.getWomens().then(function(res) {
      $scope.products = res.data
    })
  }

  $scope.showKids = function() {
    $scope.welcome = false;
    $scope.productsPage = true;

    $scope.products = true;
    $scope.login = false;
    $scope.cart = false;
    shopService.getKids().then(function(res) {
      $scope.products = res.data
    })
  }

  $scope.productId = false;

  $scope.getProductDetails = function(id) {
    $scope.productId = id;
    $scope.productDetails = true;
    $scope.productsPage = false;
    $scope.products = false;
    shopService.getProductDetails(id).then(function(res) {
      $scope.productDetails = res.status
      console.log(res)
    })
  }








})
