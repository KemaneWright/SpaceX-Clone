angular.module('spaceXApp').service('shopService', function($http) {


    this.getMens = function() {
        return $http.get('http://localhost:3000/api/store/men')
    }
    this.getWomens = function() {
        return $http.get('http://localhost:3000/api/store/women')
    }
    this.getKids = function() {
        return $http.get('http://localhost:3000/api/store/kids')
    }
    this.getProductDetails = function(id) {
      return $http.get('http://localhost:3000/api/store/details/' + id)
    }

})
