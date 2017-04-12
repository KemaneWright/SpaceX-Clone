angular.module('spaceXApp').service('shopService', function($http) {


    this.getProducts = function() {
        return $http.get('http://localhost:9000/api/store')
    }
})
