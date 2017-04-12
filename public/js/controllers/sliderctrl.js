angular.module("spaceXApp").controller('sliderCtrl', function($scope) {
  $scope.images = [{
    src: '/dragoncrew.8k.jpg',
    date: 'FEBRUARY 27, 2017',
    title: 'SPACEX TO SEND PRIVATELY CREWED DRAGON SPACECRAFT BEYOND THE MOON NEXT YEAR',
    desc: 'We are excited to announce that SpaceX has been approached to fly two private citizens on a trip around the Moon late next year. They have already paid a significant deposit to do a Moon mission.'
  }, {
    src: '/crs-10_hangar.jpg',
    date: 'FEBRUARY 20, 2017',
    title: 'CRS-10 MISSION',
    desc: 'At 9:39:00 am ET on February 19, 2017, SpaceX’s Falcon 9 rocket, carrying the Dragon spacecraft, lifted off from Launch Complex 39A to deliver nearly 5,500 lbs of cargo and supplies to the International Space Station.'
  }, {
    src: '/jcsat_16_39a_streak_1.jpg',
    date: 'AUGUST 14, 2016',
    title: 'JCSAT-16 MISSION IN PHOTOS',
    desc: 'On August 14, 2016, Falcon 9 successfully delivered the JCSAT-16 commercial communications satellite to its targeted Geosynchronous Transfer Orbit (GTO).'
  }, {
    src: '/abseut_outhor1.jpg',
    date: 'JULY 15, 2016',
    title: 'PRESS KIT: CRS-9 DRAGON MISSION',
    desc: 'SpaceX’s Falcon 9 rocket will launch the Dragon spacecraft to low Earth orbit to deliver critical cargo to the International Space Station (ISS) for NASA.'
  }, {
    src: '/splash_wchutes.jpg',
    date: 'MAY 11, 2016',
    title: 'DRAGON SPLASHDOWN',
    desc: 'Dragon successfully splashed down at 11:51 am PT in the Pacific Ocean, completing the Commercial Resupply Services 8 (CRS 8) mission which began with the liftoff of Falcon 9 and Dragon back on April 8th.'
  }, {
    src: '/jcsat_streak.jpg',
    date: 'MAY 05, 2016',
    title: 'JCSAT-14 MISSION IN PHOTOS',
    desc: 'On May 5, 2016, Falcon 9 launched the JCSAT-14 commercial communications satellite to a Geostationary Transfer Orbit and landed the first-stage of the rocket on a droneship in the Atlantic Ocean.'
  }, {
    src: '/26239020092_d28d741951_k_1.jpg',
    date: 'APRIL 08, 2016',
    title: 'CRS-8 LAUNCH AND LANDING',
    desc: 'On April 8, 2016, Falcon 9 launched Dragon on a cargo resupply mission to the International Space Station for NASA and, for the first time, landed the first-stage of the Falcon 9 back on a droneship in the Atlantic Ocean.'
  }, {
    src: '/crs6_landing_990.jpg',
    date: 'JUNE 25, 2015',
    title: 'THE WHY AND HOW OF LANDING ROCKETS',
    desc: 'Some of you may have been following our recent attempts to vertically land the first stage of our Falcon 9 rocket back on Earth.'
  }
],
  $scope.galleryImages = [{
    src: '/orbcomm2_launch_morning2.1.jpg',
    title: 'FALCON 9 FIRST STAGE LAND LANDING (ORBCOMM 2 MISSION) DECEMBER 2015'
  }, {
    src: '/pad_abort_launch_3.jpg',
    title: 'CREW DRAGON PAD ABORT TEST MAY 2015'
  }, {
    src: 'v2_interior_wide.jpg',
    title: 'CREW DRAGON MAY 2014'
  }, {
    src: 'falcon_9_on_pad_from_causeway_31_0_0.jpg',
    title: 'FALCON 9 | FIRST GEOSTATIONARY TRANSFER MISSION NOVEMBER 2013'
  }, {
    src: 'f9-6_ocean_shot.jpg',
    title: 'FALCON 9 DEMO FLIGHT SEPTEMBER 2013'
  }, {
    src: 'ghopper_325_1.png',
    title: 'GRASSHOPPER 325M HOP JUNE 2013'
  }, {
    src: 'spacex_fairing_1.jpg',
    title: 'SPACEX FAIRING SEPARATION TEST MAY 2013'
  }, {
    src: '6_20120531_iss031e078299.jpg',
    title: 'FALCON 9/DRAGON COTS 2 MISSION TO THE ISS MAY 2012'
  }, {
    src: '1st_dragon_flight_12-10_0.jpg',
    title: 'FIRST PRIVATE SPACECRAFT TO RETURN FROM EARTH ORBIT DECEMBER 2010'
  }
]

}).directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attr) {
      console.log("LINK")
      scope.currentIndex = 0;
      scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      }
      // scope.prev = function() {
      //   scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
      // }
      scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
          image.visable = false;
        })
        scope.images[scope.currentIndex].visable = true;
      })
      var timer;
      var sliderFunc = function() {
        timer = $timeout(function() {
          scope.next()
          timer = $timeout(sliderFunc, 1000)
        }, 1000)
      }
      sliderFunc()
    },
    templateUrl: "./directives/slider.html"
  }
})
