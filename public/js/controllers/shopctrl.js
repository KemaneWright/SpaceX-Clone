angular.module('spaceXApp').controller('shopCtrl', function($scope, $stateParams, shopService) {
    $scope.welcome = true;
    $scope.productsPage = false;


    $scope.showMens = function() {
        $scope.welcome = false;
        $scope.productsPage = true;

        shopService.getMens().then(function(res) {
            $scope.products = res.data
            console.log($scope.products)
        })
    }

    $scope.showWomens = function() {
        $scope.welcome = false;
        $scope.productsPage = true;

        shopService.getWomens().then(function(res) {
            $scope.products = res.data
        })
    }

    $scope.showKids = function() {
        $scope.welcome = false;
        $scope.productsPage = true;

        shopService.getKids().then(function(res) {
            $scope.products = res.data
        })
    }

    $scope.getProductDetails = function(res) {
      // shopService.getProductDetails(id).then(function(res) {
      //   console.log('productDetails ', res)
      //   // $scope.productDetails = res[0]
      // })
      $scope.welcome = false;
      $scope.productsPage = false;
      $scope.detailsPage = true;
      $scope.details = res
      console.log('product id', res)
    }
    $scope.getProductDetails($stateParams.id);

})
