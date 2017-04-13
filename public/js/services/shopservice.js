angular.module('spaceXApp').service('shopService', function($http) {


    this.getMens = function() {
        return $http.get('http://localhost:4000/api/store/men')
    }
    this.getWomens = function() {
        return $http.get('http://localhost:4000/api/store/women')
    }

})
