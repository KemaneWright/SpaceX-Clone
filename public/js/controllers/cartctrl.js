angular.module('spaceXApp').controller('cartCtrl', function($scope, user, order, orderService) {
  $scope.user = user;
  $scope. order = order.data;

  $scope.orderTotal = orderService.orderTotal;

  $scope.updateQty = function(id, qty) {
    orderService.updateItem(id, qty).then(function(response) {
      console.log('update response.data', response.data);
    })
  }
  $scope.deleteProduct = function(id, i) {
    orderService.deleteItem(id).then(function(response) {
      console.log('delete response.data', response.data);
    })
  }
  $scope.submitOrder = function() {
    orderService.completeOrder().then(function(response) {
      $scope.order = response.data
    })
  }
})
