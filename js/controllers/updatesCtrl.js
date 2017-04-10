angular.module('spaceXApp').controller('updatesCtrl', function($scope) {
  $scope.news = true;
  $scope.gallery = false;
  $scope.manifest = false;
  $scope.changeNews = function() {
    $scope.news = true
    $scope.gallery = false;
    $scope.manifest = false;
  }
  $scope.changeGallery = function() {
    $scope.news = false;
    $scope.gallery = true;
    $scope.manifest = false;
  }
  $scope.changeManifest = function() {
    $scope.news = false
    $scope.gallery = false;
    $scope.manifest = true;
  }


})
