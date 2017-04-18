angular.module('spaceXApp').service('authService', function($http, $rootScope) {

  this.logout = function() {
    return $http ({
      method: 'GET',
      url: '/api/logout'
    })
    .then(function(response) {
      $rootScope.$emit('user', null);
      return response
    })
  }
  this.getCurrentUser = function() {
    return $http ({
      method: 'GET',
      url: '/api/me'
    })
    .then(function(response) {
      $rootScope.$emit('user', response.data);
      return response
    })
  }
  this.editUser = function(user) {
    return $http ({
      method: 'PUT',
      url: '/api/user/current',
      data: user
    })
    .then(function(response) {
      return response
    })
  }
})
