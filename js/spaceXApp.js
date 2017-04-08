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
      templateUrl: './views/updates.html'
    })

  $urlRouterProvider
  .otherwise('/')




})
