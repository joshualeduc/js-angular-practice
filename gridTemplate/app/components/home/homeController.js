myApp
  .controller('homeCtrl', function($scope, homeSrvc){
    $scope.greeting = "Hello World";
    $scope.service = homeSrvc.testService;
  });