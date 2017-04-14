angular.module('spaceXApp').service('shopService', function($http, $state) {


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
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/store/' + id
      }).then(function(res) {
        console.log(res)
        return res.data
      })
    }

})
