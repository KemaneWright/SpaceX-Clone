angular.module('spaceXApp', ['ui.router'])
.config (function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('falcon9', {
      url: '/falcon9',
      templateUrl: './views/falcon9.html'
    })
    .state('falcon-heavy', {
      url: '/falcon-heavy',
      templateUrl: './views/falcon-heavy.html'
    })
    .state('dragon', {
      url: '/dragon',
      templateUrl: './views/dragon.html',
      controller: 'dragonCtrl'
    })
    .state('updates', {
      url: '/updates',
      templateUrl: './views/updates.html',
      controller: 'updatesCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'aboutCtrl'
    })
    .state('careers', {
      url: '/careers',
      templateUrl: './views/careers.html',
      controller: 'careersCtrl'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: './views/shop.html',
      controller: 'shopCtrl'
    })
    // .state('productDetails', {
    //   url: '/shop/:id',
    //   templateUrl: './directives/productDetails.html',
    //   controller: 'productCtrl'
    // })

  $urlRouterProvider
  .otherwise('/')
})
