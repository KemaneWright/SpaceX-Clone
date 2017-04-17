angular.module('spaceXApp').controller('ordersCtrl', function($scope, user, orders, orderService) {
  $scope.user = user;
  $scope.orders = orders.data;


  $scope.orderTotal = orderService.orderTotal
})
