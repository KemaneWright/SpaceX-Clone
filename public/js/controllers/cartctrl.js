angular.module('spaceXApp').controller('cartCtrl', function($scope, orderService) {

    $scope.getTotal = function() {
        // console.table($scope.orderData)
        var total = 0;
        for (var i = 0; i < $scope.orderData.products.length; i++) {
            total += $scope.orderData.products[i].price * $scope.orderData.products[i].qty
        }
        $scope.total = total;
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
})
