angular.module('spaceXApp').controller('shopCtrl', function($scope, $stateParams, shopService) {
    $scope.welcome = true;
    $scope.productsPage = false;
    $scope.detailsPage = false;
    $scope.loginPage = false;
    $scope.cartPage = false;


    $scope.showMens = function() {
        $scope.welcome = false;
        $scope.productsPage = true;
        $scope.detailsPage = false;
        $scope.mens = true;
        $scope.womens = false;
        $scope.kids = false;
        $scope.loginPage = false;
        $scope.cartPage = false;

        shopService.getMens().then(function(res) {
            $scope.products = res.data
        })
    }

    $scope.showWomens = function() {
        $scope.welcome = false;
        $scope.productsPage = true;
        $scope.detailsPage = false;
        $scope.mens = false;
        $scope.womens = true;
        $scope.kids = false;
        $scope.loginPage = false;
        $scope.cartPage = false;

        shopService.getWomens().then(function(res) {
            $scope.products = res.data
        })
    }

    $scope.showKids = function() {
        $scope.welcome = false;
        $scope.productsPage = true;
        $scope.detailsPage = false;
        $scope.mens = false;
        $scope.womens = false;
        $scope.kids = true;
        $scope.loginPage = false;
        $scope.cartPage = false;

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
      $scope.loginPage = false;
      $scope.cartPage = false;
      $scope.details = res
      console.log('product id', res)

      if (res.product.products_type === 'men') {
        $scope.back = $scope.showMens;
      } else if (res.product.products_type === 'women') {
        $scope.back = $scope.showWomens;
      } else if (res.product.products_type === 'kids') {
        $scope.back = $scope.showKids;
      }


    }

    $scope.showCart = function() {
      $scope.welcome = false;
      $scope.productsPage = false;
      $scope.detailsPage = false;
      $scope.loginPage = false;
      $scope.cartPage = true;
    }


//////// AUTH FUNCTIONS /////////
    $scope.showLogin = function() {
      $scope.loginPage = true;
      $scope.welcome = false;
      $scope.productsPage = false;
      $scope.detailsPage = false;
      $scope.cartPage = false;
    }
    function getUser() {
      shopService.getUser().then(function(user) {
        if (user) $scope.user = user.username;
        else $scope.user = 'Please Login';
      })
    }
    getUser()

    $scope.loginLocal = function(username, password) {
      console.log('Logging in with', username, password);
      shopService.loginLocal({
        username: username,
        password: password
      })
      .then(function(res) {
        getUser();
      })
    }
    $scope.logout = shopService.logout;
})
