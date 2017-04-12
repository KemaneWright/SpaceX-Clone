angular.module('spaceXApp').controller('aboutCtrl', function($scope) {
  $scope.sixteen = true;
  $scope.fifteen = false;
  $scope.fourteen = false;
  $scope.thirteen = false;
  $scope.twelve = false;
  $scope.ten = false;

  $scope.company = true;
  $scope.services = false;

  $scope.showCompany = function() {
    $scope.company = true;
    $scope.services = false;
  }
  $scope.showServices = function() {
    $scope.services = true;
    $scope.company = false;
  }

  $scope.showSixteen = function() {
    $scope.sixteen = true
    $scope.fifteen = false;
    $scope.fourteen = false;
    $scope.thirteen = false;
    $scope.twelve = false;
    $scope.ten = false;

  }
  $scope.showFifteen = function() {
    $scope.sixteen = false;
    $scope.fifteen = true;
    $scope.fourteen = false;
    $scope.thirteen = false;
    $scope.twelve = false;
    $scope.ten = false;

  }
  $scope.showFourteen = function() {
    $scope.sixteen = false
    $scope.fifteen = false;
    $scope.fourteen = true;
    $scope.thirteen = false;
    $scope.twelve = false;
    $scope.ten = false;

  }
  $scope.showThirteen = function() {
    $scope.sixteen = false
    $scope.fifteen = false;
    $scope.fourteen = false;
    $scope.thirteen = true;
    $scope.twelve = false;
    $scope.ten = false;

  }
  $scope.showTwelve = function() {
    $scope.sixteen = false
    $scope.fifteen = false;
    $scope.fourteen = false;
    $scope.thirteen = false;
    $scope.twelve = true;
    $scope.ten = false;

  }
  $scope.showTen = function() {
    $scope.sixteen = false
    $scope.fifteen = false;
    $scope.fourteen = false;
    $scope.thirteen = false;
    $scope.twelve = false;
    $scope.ten = true;

  }


})
