angular.module('spaceXApp').controller('cartCtrl', function($scope, orderService, stripe, $http, $state) {



    $scope.getTotal = function() {
        // console.table($scope.orderData)
        let total = 0;
        for (let i = 0; i < $scope.orderData.products.length; i++) {
            total += $scope.orderData.products[i].price * $scope.orderData.products[i].qty
        }
        $scope.total = total;
        console.log($scope.total)
    }

    $scope.getOrder = function() {
        orderService.getOrder().then(function(response) {
            // console.table(response);
            $scope.orderData = response;
            $scope.getTotal();
        });
    }
    $scope.getOrder();

    $scope.updateItem = function(id, qty) {
        // console.table(id, qty);
        orderService.updateItem(id, qty).then(function(response) {
            $scope.getTotal();
        });
    };

    $scope.deleteItem = function(id) {
        orderService.deleteItem(id).then(function(response) {
            console.log(response);
            $scope.getOrder();
        });
    };

    $scope.submit = function() {
        console.log('Submiting order');
        orderService.completeOrder().then(function(response) {
            $scope.getOrder();
        });
    };

    $scope.payment = {};
    // $scope.price = {};

  $scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      let payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;
      // let adjPrice = $scope.mockPrice * 100
      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.total,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $scope.submit();
      alert('Congraulations! Payment Successful')
      // $state.go('congrats');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
         alert(err.message)
       }
     });
 };


})
