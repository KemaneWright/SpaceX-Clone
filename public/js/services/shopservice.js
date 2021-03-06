angular.module('spaceXApp').service('shopService', function($http, $state) {


    this.getMens = function() {
        return $http.get('/api/store/men')
    }
    this.getWomens = function() {
        return $http.get('/api/store/women')
    }
    this.getKids = function() {
        return $http.get('/api/store/kids')
    }
    this.getProductDetails = function(id) {
      return $http({
        method: 'GET',
        url: '/api/store/' + id
      }).then(function(res) {
        console.log(res)
        return res.data
      })
    }

    // this.loginLocal = function(credentials) {
    //   return $http({
    //     method: "POST",
    //     url: "/auth/local",
    //     data: credentials
    //   })
    //   .then(function(res) {
    //     return res.data
    //   })
    //   .catch(function(err) {
    //     console.log('Error Logging In', err);
    //   })
    // }
    // this.getUser = function() {
    //   return $http({
    //     method: "GET",
    //     url: "/auth/me"
    //   })
    //   .then(function(res) {
    //     return res.data;
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   })
    // }
    // this.logout = function() {
    //   return $http({
    //     method: "GET",
    //     url: "/auth/logout"
    //   })
    //   .then(function(res) {
    //     return res.data;
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   })
    // }

})
