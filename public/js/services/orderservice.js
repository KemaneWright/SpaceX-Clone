angular.module('spaceXApp').service('orderService', function($http) {

  this.addToCart = function(id, qty) {
    return $http({
      method: 'POST',
      url: '/api/order/add',
      data: {
        product_id: id,
        qty: qty
      }
    });
  };

  this.getOrder = function() {
    return $http({
      method: 'GET',
      url: '/api/order'
    }).then(function(response) {
      console.log('Get Order: ', response);
      return response.data
    });
  };

  this.updateItem = function(id, qty) {
    return $http({
      method: 'PUT',
      url: '/api/order/update/' + id,
      data: {
        qty: qty
      }
    });
  };

  this.deleteItem = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/order/delete/' + id
    });
  };

  this.completeOrder = function() {
    return $http({
      method: 'PUT',
      url: '/api/order/complete'
    });
  }


})
