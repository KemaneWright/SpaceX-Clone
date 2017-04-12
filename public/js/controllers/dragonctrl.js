angular.module('spaceXApp').controller('dragonCtrl', function($scope) {
  $scope.cargo = true;
  $scope.crew = false;
  $scope.dragonlab = false;
  $scope.changeCargo = function() {
    $scope.cargo = true
    $scope.crew = false;
    $scope.dragonlab = false;
  }
  $scope.changeCrew = function() {
    $scope.cargo = false;
    $scope.crew = true;
    $scope.dragonlab = false;
  }
  $scope.changeDragonlab = function() {
    $scope.cargo = false
    $scope.crew = false;
    $scope.dragonlab = true;  
  }


})
