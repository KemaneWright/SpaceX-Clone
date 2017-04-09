// angular.module("sliderApp").directive('slider', function($timeout) {
//   return {
//     restrict: 'AE',
//     replace: true,
//     scope: {
//       images: '='
//     },
//     link: function(scope, elem, attr) {
//       console.log("LINK")
//       scope.currentIndex = 0;
//       scope.next = function() {
//         scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
//       }
//       scope.prev = function() {
//         scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
//       }
//       scope.$watch('currentIndex', function() {
//         scope.images.forEach(function(image) {
//           image.visable = false;
//         })
//         scope.images[scope.currentIndex].visable = true;
//       })
//     },
//     templateUrl: "./directives/slider.html",
//     controller: function($scope) {
//       $scope.images = [{
//         src: '/images/dragoncrew.8k.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/crs-10_hangar.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/jcsat_16_39a_streak_1.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/abseut_outhor1.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/splash_wchutes.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/jcsat_streak.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/26239020092_d28d741951_k_1.jpg',
//         title: 'Dragon Crew'
//       }, {
//         src: '/images/crs6_landing_990.jpg',
//         title: 'Dragon Crew'
//       }
//       ]
//       console.log("images", $scope.images)
//     }
//   }
// })
