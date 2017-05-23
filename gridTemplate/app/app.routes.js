myApp
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: './components/home/homeView.html',
      controller: 'homeCtrl'
    })

    .state('page2', {
      url: '/page2',
      templateUrl: './components/page2/page2View.html',
      controller: 'page2Ctrl'
    });
    $urlRouterProvider.otherwise('/');
  });