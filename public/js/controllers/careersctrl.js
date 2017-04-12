angular.module('spaceXApp').controller('careersCtrl', function($scope) {
  $scope.engineering = true;
  $scope.manufacture = false;
  $scope.operations = false;

  $scope.showDesign = function() {
    $scope.engineering = true;
    $scope.manufacture = false;
    $scope.operations = false;
  }
  $scope.showBuild = function() {
    $scope.engineering = false;
    $scope.manufacture = true;
    $scope.operations = false;
  }
  $scope.showLaunch = function() {
    $scope.engineering = false;
    $scope.manufacture = false;
    $scope.operations = true;
  }
})
