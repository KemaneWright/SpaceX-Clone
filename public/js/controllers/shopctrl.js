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









})
